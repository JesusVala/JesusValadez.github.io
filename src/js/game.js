/**
 * Description:
 *  Makes a scene to work with the game
 */

import { Player } from "./mechanics/objects/player.js";
import { Car, Truck } from "./mechanics/objects/vehicles.js";
import { Three, Grass, Road } from "./mechanics/objects/enviroment.js"

// let helper = new THREE.CameraHelper( dirLight.shadow.camera );
// let helper = new THREE.CameraHelper( camera );
// scene.add(helper)

//Counter of points to make
const counterDOM = document.getElementById("counter");
//Game over dialog
const endDOM = document.getElementById("end");

const scene = new THREE.Scene();

const distance = 500; //Distance of the camera
const camera = new THREE.OrthographicCamera(
  globalThis.innerWidth / -2,
  globalThis.innerWidth / 2,
  globalThis.innerHeight / 2,
  globalThis.innerHeight / -2,
  0.1,
  10000,
); // Size of the camera vision

//Inclination fo camera
camera.rotation.x = 50 * Math.PI / 180;
camera.rotation.y = 20 * Math.PI / 180;
camera.rotation.z = 10 * Math.PI / 180;

//Initial potition of camera
const initialCameraPositionY = -Math.tan(camera.rotation.x) * distance;
const initialCameraPositionX = Math.tan(camera.rotation.y) *
  Math.sqrt(distance ** 2 + initialCameraPositionY ** 2);
camera.position.y = initialCameraPositionY;
camera.position.x = initialCameraPositionX;
camera.position.z = distance;

//Camera zoom
const zoom = 2;

//Player size
const playerSize = 15;

//Sizes of map
const positionWidth = 42;
const columns = 17;
const boardWidth = positionWidth * columns;

const stepTime = 200; // Miliseconds it takes for the player to take a step forward, backward, left or right

//Player location variables
let lanes;
let currentLane;
let currentColumn;

//Timestamps variables
let previousTimestamp;
let startMoving;
let moves;
let stepStartTimestamp;

//Map dimensions generator
const generateLanes = () =>
  [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    (index) => {
      const lane = new Lane(index);
      lane.mesh.position.y = index * positionWidth * zoom;
      scene.add(lane.mesh);
      return lane;
    },
  ).filter((lane) => lane.index >= 0);

//Lane generator
const addLane = () => {
  const index = lanes.length;
  const lane = new Lane(index);
  lane.mesh.position.y = index * positionWidth * zoom;
  scene.add(lane.mesh);
  lanes.push(lane);
};

//Creation of player
const player = new Player(zoom, playerSize);
scene.add(player);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
scene.add(hemiLight);

const initialDirLightPositionX = -100;
const initialDirLightPositionY = -100;
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(initialDirLightPositionX, initialDirLightPositionY, 200);
dirLight.castShadow = true;
dirLight.target = player;
scene.add(dirLight);

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
const d = 500;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;

const backLight = new THREE.DirectionalLight(0x000000, .4);
backLight.position.set(200, 200, 50);
backLight.castShadow = true;
scene.add(backLight);

const laneTypes = ["car", "truck", "forest"];
const laneSpeeds = [2, 2.5, 3];


const initaliseValues = () => {
  lanes = generateLanes();

  currentLane = 0;
  currentColumn = Math.floor(columns / 2);

  previousTimestamp = null;

  startMoving = false;
  moves = [];
  stepStartTimestamp;

  player.position.x = 0;
  player.position.y = 0;

  camera.position.y = initialCameraPositionY;
  camera.position.x = initialCameraPositionX;

  dirLight.position.x = initialDirLightPositionX;
  dirLight.position.y = initialDirLightPositionY;
};

initaliseValues();

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
document.body.appendChild(renderer.domElement);


/**
 * ---------------------------------------
 * ----     Generator functions       ----
 * ---------------------------------------
 */

function Lane(index) {
  this.index = index;
  this.type = index <= 0
    ? "field"
    : laneTypes[Math.floor(Math.random() * laneTypes.length)];

  switch (this.type) {
    case "field": {
      this.type = "field";
      this.mesh = new Grass(zoom, boardWidth, positionWidth);
      break;
    }
    case "forest": {
      this.mesh = new Grass(zoom, boardWidth, positionWidth);

      this.occupiedPositions = new Set();
      this.threes = [1, 2, 3, 4].map(() => {
        const three = new Three(zoom);
        let position;
        do {
          position = Math.floor(Math.random() * columns);
        } while (this.occupiedPositions.has(position));
        this.occupiedPositions.add(position);
        three.position.x =
          (position * positionWidth + positionWidth / 2) * zoom -
          boardWidth * zoom / 2;
        this.mesh.add(three);
        return three;
      });
      break;
    }
    case "car": {
      this.mesh = new Road(zoom, boardWidth, positionWidth);
      this.direction = Math.random() >= 0.5;

      const occupiedPositions = new Set();
      this.vechicles = [1, 2, 3].map(() => {
        const vechicle = new Car(zoom);
        let position;
        do {
          position = Math.floor(Math.random() * columns / 2);
        } while (occupiedPositions.has(position));
        occupiedPositions.add(position);
        vechicle.position.x =
          (position * positionWidth * 2 + positionWidth / 2) * zoom -
          boardWidth * zoom / 2;
        if (!this.direction) vechicle.rotation.z = Math.PI;
        this.mesh.add(vechicle);
        return vechicle;
      });

      this.speed = laneSpeeds[Math.floor(Math.random() * laneSpeeds.length)];
      break;
    }
    case "truck": {
      this.mesh = new Road(zoom, boardWidth, positionWidth);
      this.direction = Math.random() >= 0.5;

      const occupiedPositions = new Set();
      this.vechicles = [1, 2].map(() => {
        const vechicle = new Truck(zoom);
        let position;
        do {
          position = Math.floor(Math.random() * columns / 3);
        } while (occupiedPositions.has(position));
        occupiedPositions.add(position);
        vechicle.position.x =
          (position * positionWidth * 3 + positionWidth / 2) * zoom -
          boardWidth * zoom / 2;
        if (!this.direction) vechicle.rotation.z = Math.PI;
        this.mesh.add(vechicle);
        return vechicle;
      });

      this.speed = laneSpeeds[Math.floor(Math.random() * laneSpeeds.length)];
      break;
    }
  }
}

/**
 * ---------------------------------------
 * ----     Behavior functions        ----
 * ---------------------------------------
 */

//Player movement
function move(direction) {
  const finalPositions = moves.reduce((position, move) => {
    if (move === "forward") {
      return { lane: position.lane + 1, column: position.column };
    }
    if (move === "backward") {
      return { lane: position.lane - 1, column: position.column };
    }
    if (move === "left") {
      return { lane: position.lane, column: position.column - 1 };
    }
    if (move === "right") {
      return { lane: position.lane, column: position.column + 1 };
    }
  }, { lane: currentLane, column: currentColumn });

  if (direction === "forward") {
    if (
      lanes[finalPositions.lane + 1].type === "forest" &&
      lanes[finalPositions.lane + 1].occupiedPositions.has(
        finalPositions.column,
      )
    ) return;
    if (!stepStartTimestamp) startMoving = true;
    addLane();
  } else if (direction === "backward") {
    if (finalPositions.lane === 0) return;
    if (
      lanes[finalPositions.lane - 1].type === "forest" &&
      lanes[finalPositions.lane - 1].occupiedPositions.has(
        finalPositions.column,
      )
    ) return;
    if (!stepStartTimestamp) startMoving = true;
  } else if (direction === "left") {
    if (finalPositions.column === 0) return;
    if (
      lanes[finalPositions.lane].type === "forest" &&
      lanes[finalPositions.lane].occupiedPositions.has(
        finalPositions.column - 1,
      )
    ) return;
    if (!stepStartTimestamp) startMoving = true;
  } else if (direction === "right") {
    if (finalPositions.column === columns - 1) return;
    if (
      lanes[finalPositions.lane].type === "forest" &&
      lanes[finalPositions.lane].occupiedPositions.has(
        finalPositions.column + 1,
      )
    ) return;
    if (!stepStartTimestamp) startMoving = true;
  }
  moves.push(direction);
}

// Initialize values after game over
document.querySelector("#retry").addEventListener("click", () => {
  lanes.forEach((lane) => scene.remove(lane.mesh));
  initaliseValues();
  endDOM.style.visibility = "hidden";
});

// Key map of buttons
document.getElementById("forward").addEventListener(
  "click",
  () => move("forward"),
);
document.getElementById("backward").addEventListener(
  "click",
  () => move("backward"),
);
document.getElementById("left").addEventListener("click", () => move("left"));
document.getElementById("right").addEventListener("click", () => move("right"));

// Key map arrows
globalThis.addEventListener("keydown", (event) => {
  if (event.keyCode == "38") {
    // up arrow
    move("forward");
  } else if (event.keyCode == "40") {
    // down arrow
    move("backward");
  } else if (event.keyCode == "37") {
    // left arrow
    move("left");
  } else if (event.keyCode == "39") {
    // right arrow
    move("right");
  }
});

function animate(timestamp) {
  requestAnimationFrame(animate);

  if (!previousTimestamp) previousTimestamp = timestamp;
  const delta = timestamp - previousTimestamp;
  previousTimestamp = timestamp;

  // Animate cars and trucks moving on the lane
  lanes.forEach((lane) => {
    if (lane.type === "car" || lane.type === "truck") {
      const aBitBeforeTheBeginingOfLane = -boardWidth * zoom / 2 -
        positionWidth * 2 * zoom;
      const aBitAfterTheEndOFLane = boardWidth * zoom / 2 +
        positionWidth * 2 * zoom;
      lane.vechicles.forEach((vechicle) => {
        if (lane.direction) {
          vechicle.position.x =
            vechicle.position.x < aBitBeforeTheBeginingOfLane
              ? aBitAfterTheEndOFLane
              : vechicle.position.x -= lane.speed / 16 * delta;
        } else {
          vechicle.position.x = vechicle.position.x > aBitAfterTheEndOFLane
            ? aBitBeforeTheBeginingOfLane
            : vechicle.position.x += lane.speed / 16 * delta;
        }
      });
    }
  });

  if (startMoving) {
    stepStartTimestamp = timestamp;
    startMoving = false;
  }

  if (stepStartTimestamp) {
    const moveDeltaTime = timestamp - stepStartTimestamp;
    const moveDeltaDistance = Math.min(moveDeltaTime / stepTime, 1) *
      positionWidth * zoom;
    const jumpDeltaDistance =
      Math.sin(Math.min(moveDeltaTime / stepTime, 1) * Math.PI) * 8 * zoom;
    switch (moves[0]) {
      case "forward": {
        const positionY = currentLane * positionWidth * zoom +
          moveDeltaDistance;
        camera.position.y = initialCameraPositionY + positionY;
        dirLight.position.y = initialDirLightPositionY + positionY;
        player.position.y = positionY; // initial player position is 0

        player.position.z = jumpDeltaDistance;
        break;
      }
      case "backward": {
        const positionY = currentLane * positionWidth * zoom -
          moveDeltaDistance;
        camera.position.y = initialCameraPositionY + positionY;
        dirLight.position.y = initialDirLightPositionY + positionY;
        player.position.y = positionY;

        player.position.z = jumpDeltaDistance;
        break;
      }
      case "left": {
        const positionX =
          (currentColumn * positionWidth + positionWidth / 2) * zoom -
          boardWidth * zoom / 2 - moveDeltaDistance;
        camera.position.x = initialCameraPositionX + positionX;
        dirLight.position.x = initialDirLightPositionX + positionX;
        player.position.x = positionX; // initial player position is 0
        player.position.z = jumpDeltaDistance;
        break;
      }
      case "right": {
        const positionX =
          (currentColumn * positionWidth + positionWidth / 2) * zoom -
          boardWidth * zoom / 2 + moveDeltaDistance;
        camera.position.x = initialCameraPositionX + positionX;
        dirLight.position.x = initialDirLightPositionX + positionX;
        player.position.x = positionX;

        player.position.z = jumpDeltaDistance;
        break;
      }
    }
    // Once a step has ended
    if (moveDeltaTime > stepTime) {
      switch (moves[0]) {
        case "forward": {
          currentLane++;
          counterDOM.innerHTML = currentLane;
          break;
        }
        case "backward": {
          currentLane--;
          counterDOM.innerHTML = currentLane;
          break;
        }
        case "left": {
          currentColumn--;
          break;
        }
        case "right": {
          currentColumn++;
          break;
        }
      }
      moves.shift();
      // If more steps are to be taken then restart counter otherwise stop stepping
      stepStartTimestamp = moves.length === 0 ? null : timestamp;
    }
  }

  // Hit test
  if (
    lanes[currentLane].type === "car" || lanes[currentLane].type === "truck"
  ) {
    const playerMinX = player.position.x - playerSize * zoom / 2;
    const playerMaxX = player.position.x + playerSize * zoom / 2;
    const vechicleLength = { car: 60, truck: 105 }[lanes[currentLane].type];
    lanes[currentLane].vechicles.forEach((vechicle) => {
      const carMinX = vechicle.position.x - vechicleLength * zoom / 2;
      const carMaxX = vechicle.position.x + vechicleLength * zoom / 2;
      if (playerMaxX > carMinX && playerMinX < carMaxX) {
        endDOM.style.visibility = "visible";
      }
    });
  }
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);
