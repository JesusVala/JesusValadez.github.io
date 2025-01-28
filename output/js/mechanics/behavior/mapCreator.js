var D=Object.defineProperty;var i=(t,n)=>D(t,"name",{value:n,configurable:!0});var ee=new THREE.Color().setHex(8900331),z=-100,W=-100,x=500,O=50*Math.PI/180,A=20*Math.PI/180,Y=10*Math.PI/180,y=-Math.tan(O)*500,Z=Math.tan(A)*Math.sqrt(500**2+y**2),te=Object.freeze({DIR_LIGHT:{POSITION:{X:z,Y:W},SHADOW:{CAMERA:{LEFT:-x,RIGHT:x,TOP:x,BOTTON:-x}}},CAMERA:{ROTATION:{X:O,Y:A,Z:Y},POSITION:{X:Z,Y:y}}});var s=42,E=3;var h=s*E,m=42,S=["car","truck","forest"],T=[2,2.5,3];var f=[20,45,60];function L(){let t=new THREE.Group,n=new THREE.Mesh(new THREE.BoxBufferGeometry(15*2,15*2,20*2),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));n.position.z=10*2,n.castShadow=!0,n.receiveShadow=!0,t.add(n);let r=f[Math.floor(Math.random()*f.length)],o=new THREE.Mesh(new THREE.BoxBufferGeometry(30*2,30*2,r*2),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return o.position.z=(r/2+20)*2,o.castShadow=!0,o.receiveShadow=!1,t.add(o),t}i(L,"Three");function I(){let t=new THREE.Group,n=i(c=>new THREE.Mesh(new THREE.BoxBufferGeometry(h*2,s*2),new THREE.MeshPhongMaterial({color:c})),"createSection"),r=n(12252245);r.receiveShadow=!0,t.add(r);let o=n(10078278);o.position.x=-h*2,t.add(o);let a=n(10078278);return a.position.x=h*2,t.add(a),t.position.z=1.5*2,t}i(I,"Grass");function w(){let t=new THREE.Group,r=i(o=>new THREE.Mesh(new THREE.BoxBufferGeometry(m*2,s*2),new THREE.MeshPhongMaterial({color:o})),"createSection")(12252245);return r.receiveShadow=!0,t.add(r),t.position.z=1.5*2,t}i(w,"GrassTile");function N(){let t=new THREE.Group,r=i(o=>new THREE.Mesh(new THREE.BoxBufferGeometry(m*2,s*2),new THREE.MeshPhongMaterial({color:o})),"createSection")(4541017);return r.receiveShadow=!0,t.add(r),t.position.z=1.5*2,t}i(N,"RoadTile");function B(){let t=new THREE.Group,n=new THREE.Mesh(new THREE.BoxBufferGeometry(15*2,15*2,20*2),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));n.position.z=10*2,n.castShadow=!0,n.receiveShadow=!0,t.add(n);let r=f[Math.floor(Math.random()*f.length)],o=new THREE.Mesh(new THREE.BoxBufferGeometry(30*2,30*2,r*2),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return o.position.z=(r/2+20)*2,o.castShadow=!0,o.receiveShadow=!1,t.add(o),t}i(B,"ThreeTile");function G(){let t=new THREE.Group,n=new THREE.Mesh(new THREE.IcosahedronGeometry(15*2,1),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));return n.castShadow=!0,n.receiveShadow=!0,t.add(n),t}i(G,"RockTile");function H(){let t=new THREE.Group,n=i(c=>new THREE.Mesh(new THREE.PlaneBufferGeometry(h*2,s*2),new THREE.MeshPhongMaterial({color:c})),"createSection"),r=n(4541017);r.receiveShadow=!0,t.add(r);let o=n(3751241);o.position.x=-h*2,t.add(o);let a=n(3751241);return a.position.x=h*2,t.add(a),t}i(H,"Road");var M=[10822947,12432952,7909707],X=new d(40,80,[{x:0,y:10,w:30,h:60}]),F=new d(40,80,[{x:10,y:10,w:30,h:60}]),U=new d(110,40,[{x:10,y:0,w:50,h:30},{x:70,y:0,w:30,h:30}]),j=new d(110,40,[{x:10,y:10,w:50,h:30},{x:70,y:10,w:30,h:30}]),V=new d(30,30,[{x:15,y:0,w:10,h:30}]),q=new d(25,30,[{x:0,y:15,w:10,h:10}]),K=new d(25,30,[{x:0,y:5,w:10,h:10}]);function b(){let t=new THREE.Group,n=M[Math.floor(Math.random()*M.length)],r=new THREE.Mesh(new THREE.BoxBufferGeometry(60*2,30*2,15*2),new THREE.MeshPhongMaterial({color:n,flatShading:!0}));r.position.z=12*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let o=new THREE.Mesh(new THREE.BoxBufferGeometry(33*2,24*2,12*2),[new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:F}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:X}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:U}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:j}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0})]);o.position.x=6*2,o.position.z=25.5*2,o.castShadow=!0,o.receiveShadow=!0,t.add(o);let a=new u;a.position.x=-18*2,t.add(a);let c=new u;return c.position.x=18*2,t.add(c),t.castShadow=!0,t.receiveShadow=!1,t}i(b,"Car");function v(){let t=new THREE.Group,n=M[Math.floor(Math.random()*M.length)],r=new THREE.Mesh(new THREE.BoxBufferGeometry(100*2,25*2,5*2),new THREE.MeshLambertMaterial({color:11847420,flatShading:!0}));r.position.z=10*2,t.add(r);let o=new THREE.Mesh(new THREE.BoxBufferGeometry(75*2,35*2,40*2),new THREE.MeshPhongMaterial({color:11847420,flatShading:!0}));o.position.x=15*2,o.position.z=30*2,o.castShadow=!0,o.receiveShadow=!0,t.add(o);let a=new THREE.Mesh(new THREE.BoxBufferGeometry(25*2,30*2,30*2),[new THREE.MeshPhongMaterial({color:n,flatShading:!0}),new THREE.MeshPhongMaterial({color:n,flatShading:!0,map:V}),new THREE.MeshPhongMaterial({color:n,flatShading:!0,map:q}),new THREE.MeshPhongMaterial({color:n,flatShading:!0,map:K}),new THREE.MeshPhongMaterial({color:n,flatShading:!0}),new THREE.MeshPhongMaterial({color:n,flatShading:!0})]);a.position.x=-40*2,a.position.z=20*2,a.castShadow=!0,a.receiveShadow=!0,t.add(a);let c=new u;c.position.x=-38*2,t.add(c);let R=new u;R.position.x=-10*2,t.add(R);let p=new u;return p.position.x=30*2,t.add(p),t}i(v,"Truck");function u(){let t=new THREE.Mesh(new THREE.BoxBufferGeometry(12*2,33*2,12*2),new THREE.MeshLambertMaterial({color:3355443,flatShading:!0}));return t.position.z=6*2,t}i(u,"Wheel");function d(t,n,r){let o=document.createElement("canvas");o.width=t,o.height=n;let a=o.getContext("2d");return a.fillStyle="#ffffff",a.fillRect(0,0,t,n),a.fillStyle="rgba(0,0,0,0.6)",r.forEach(c=>{a.fillRect(c.x,c.y,c.w,c.h)}),new THREE.CanvasTexture(o)}i(d,"Texture");var k=["grass","road","three","rock"],l=[[1,1,2,0,3,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0],[1,1,3,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];function we(t){let n=new Array(l.length);for(let r=0;r<l.length;r++){n[r]=new Array(l[r].length);for(let o=0;o<l[r].length;o++){let a=new J(l[r][o],r,o);a.mesh.position.x=r*s*2-s*2,a.mesh.position.y=o*s*2,t.add(a.mesh),n[r][o]=a}}return n}i(we,"generateMap");function J(t,n,r){this.x_index=n,this.y_index=r,this.type=k[t],this.occupiedPosition=!1;let o=null;switch(this.type){case"grass":this.mesh=new w;break;case"road":this.mesh=new N;break;case"three":this.mesh=new w,o=new B,o.position.x=s*2-s*2,this.mesh.add(o),this.occupiedPosition=!0;break;case"rock":this.mesh=new w,o=new G,o.position.x=s*2-s*2,this.mesh.add(o),this.occupiedPosition=!0;break;default:this.mesh=new w;break}}i(J,"Tile");var ue=i((t,n,r,o,a,c,R,p,g,P,_)=>{lanes=Q(t),currentLane=0,currentColumn=Math.floor(E/2),previousTimestamp=null,startMoving=!1,moves=[],g.position.x=0,g.position.y=0,P.position.y=initialCameraPositionY,P.position.x=initialCameraPositionX,_.position.x=initialDirLightPositionX,_.position.y=initialDirLightPositionY},"initaliseValues"),Q=i(t=>[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9].map(n=>{let r=new C(n);return r.mesh.position.y=n*s*2,t.add(r.mesh),r}).filter(n=>n.index>=0),"generateLanes"),pe=i((t,n)=>{let r=n.length,o=new C(r);o.mesh.position.y=r*s*2,t.add(o.mesh),n.push(o)},"addLane");function C(t){switch(this.index=t,this.type=t<=0?"field":S[Math.floor(Math.random()*S.length)],this.type){case"field":{this.type="field",this.mesh=new I;break}case"forest":{this.mesh=new I,this.occupiedPositions=new Set,this.threes=[1,2,3,4].map(()=>{let n=new L,r;do r=Math.floor(Math.random()*E);while(this.occupiedPositions.has(r));return this.occupiedPositions.add(r),n.position.x=(r*s+s/2)*2-h*2/2,this.mesh.add(n),n});break}case"car":{this.mesh=new H,this.direction=Math.random()>=.5;let n=new Set;this.vechicles=[1,2,3].map(()=>{let r=new b,o;do o=Math.floor(Math.random()*E/2);while(n.has(o));return n.add(o),r.position.x=(o*s*2+s/2)*2-h*2/2,this.direction||(r.rotation.z=Math.PI),this.mesh.add(r),r}),this.speed=T[Math.floor(Math.random()*T.length)];break}case"truck":{this.mesh=new H,this.direction=Math.random()>=.5;let n=new Set;this.vechicles=[1,2].map(()=>{let r=new v,o;do o=Math.floor(Math.random()*E/3);while(n.has(o));return n.add(o),r.position.x=(o*s*3+s/2)*2-h*2/2,this.direction||(r.rotation.z=Math.PI),this.mesh.add(r),r}),this.speed=T[Math.floor(Math.random()*T.length)];break}}}i(C,"Lane");export{pe as addLane,Q as generateLanes,we as generateMap,ue as initaliseValues};
