var ee=Object.defineProperty;var h=(o,n)=>ee(o,"name",{value:n,configurable:!0});var z=new THREE.Color().setHex(8900331),te=-100,oe=-100,D=500,F=50*Math.PI/180,W=20*Math.PI/180,ne=10*Math.PI/180,Y=-Math.tan(F)*500,ae=Math.tan(W)*Math.sqrt(500**2+Y**2),c=Object.freeze({DIR_LIGHT:{POSITION:{X:te,Y:oe},SHADOW:{CAMERA:{LEFT:-D,RIGHT:D,TOP:D,BOTTON:-D}}},CAMERA:{ROTATION:{X:F,Y:W,Z:ne},POSITION:{X:ae,Y}}}),I=15,l=42,m=17,u=l*m,C=["car","truck","forest"],y=[2,2.5,3];var X=[20,45,60];function Z(){let o=new THREE.Group,n=new THREE.Mesh(new THREE.BoxBufferGeometry(15*2,15*2,20*2),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));n.position.z=10*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=X[Math.floor(Math.random()*X.length)],a=new THREE.Mesh(new THREE.BoxBufferGeometry(30*2,30*2,t*2),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return a.position.z=(t/2+20)*2,a.castShadow=!0,a.receiveShadow=!1,o.add(a),o}h(Z,"Three");function B(){let o=new THREE.Group,t=h(a=>new THREE.Mesh(new THREE.BoxBufferGeometry(u*2,l*2,3*2),new THREE.MeshPhongMaterial({color:a})),"createSection")(12252245);return t.receiveShadow=!0,o.add(t),o.position.z=1.5*2,o}h(B,"Grass");function G(){let o=new THREE.Group,n=h(r=>new THREE.Mesh(new THREE.PlaneBufferGeometry(u*2,l*2),new THREE.MeshPhongMaterial({color:r})),"createSection"),t=n(4541017);t.receiveShadow=!0,o.add(t);let a=n(3751241);a.position.x=-u*2,o.add(a);let i=n(3751241);return i.position.x=u*2,o.add(i),o}h(G,"Road");var N=[10822947,12432952,7909707],re=new g(40,80,[{x:0,y:10,w:30,h:60}]),ie=new g(40,80,[{x:10,y:10,w:30,h:60}]),se=new g(110,40,[{x:10,y:0,w:50,h:30},{x:70,y:0,w:30,h:30}]),ce=new g(110,40,[{x:10,y:10,w:50,h:30},{x:70,y:10,w:30,h:30}]),he=new g(30,30,[{x:15,y:0,w:10,h:30}]),le=new g(25,30,[{x:0,y:15,w:10,h:10}]),de=new g(25,30,[{x:0,y:5,w:10,h:10}]);function U(){let o=new THREE.Group,n=N[Math.floor(Math.random()*N.length)],t=new THREE.Mesh(new THREE.BoxBufferGeometry(60*2,30*2,15*2),new THREE.MeshPhongMaterial({color:n,flatShading:!0}));t.position.z=12*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t);let a=new THREE.Mesh(new THREE.BoxBufferGeometry(33*2,24*2,12*2),[new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:ie}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:re}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:se}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:ce}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0})]);a.position.x=6*2,a.position.z=25.5*2,a.castShadow=!0,a.receiveShadow=!0,o.add(a);let i=new A;i.position.x=-18*2,o.add(i);let r=new A;return r.position.x=18*2,o.add(r),o.castShadow=!0,o.receiveShadow=!1,o}h(U,"Car");function q(){let o=new THREE.Group,n=N[Math.floor(Math.random()*N.length)],t=new THREE.Mesh(new THREE.BoxBufferGeometry(100*2,25*2,5*2),new THREE.MeshLambertMaterial({color:11847420,flatShading:!0}));t.position.z=10*2,o.add(t);let a=new THREE.Mesh(new THREE.BoxBufferGeometry(75*2,35*2,40*2),new THREE.MeshPhongMaterial({color:11847420,flatShading:!0}));a.position.x=15*2,a.position.z=30*2,a.castShadow=!0,a.receiveShadow=!0,o.add(a);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(25*2,30*2,30*2),[new THREE.MeshPhongMaterial({color:n,flatShading:!0}),new THREE.MeshPhongMaterial({color:n,flatShading:!0,map:he}),new THREE.MeshPhongMaterial({color:n,flatShading:!0,map:le}),new THREE.MeshPhongMaterial({color:n,flatShading:!0,map:de}),new THREE.MeshPhongMaterial({color:n,flatShading:!0}),new THREE.MeshPhongMaterial({color:n,flatShading:!0})]);i.position.x=-40*2,i.position.z=20*2,i.castShadow=!0,i.receiveShadow=!0,o.add(i);let r=new A;r.position.x=-38*2,o.add(r);let k=new A;k.position.x=-10*2,o.add(k);let _=new A;return _.position.x=30*2,o.add(_),o}h(q,"Truck");function A(){let o=new THREE.Mesh(new THREE.BoxBufferGeometry(12*2,33*2,12*2),new THREE.MeshLambertMaterial({color:3355443,flatShading:!0}));return o.position.z=6*2,o}h(A,"Wheel");function g(o,n,t){let a=document.createElement("canvas");a.width=o,a.height=n;let i=a.getContext("2d");return i.fillStyle="#ffffff",i.fillRect(0,0,o,n),i.fillStyle="rgba(0,0,0,0.6)",t.forEach(r=>{i.fillRect(r.x,r.y,r.w,r.h)}),new THREE.CanvasTexture(a)}h(g,"Texture");var V=h(o=>[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9].map(n=>{let t=new fe(n);return t.mesh.position.y=n*l*2,o.add(t.mesh),t}).filter(n=>n.index>=0),"generateLanes");function fe(o){switch(this.index=o,this.type=o<=0?"field":C[Math.floor(Math.random()*C.length)],this.type){case"field":{this.type="field",this.mesh=new B;break}case"forest":{this.mesh=new B,this.occupiedPositions=new Set,this.threes=[1,2,3,4].map(()=>{let n=new Z,t;do t=Math.floor(Math.random()*m);while(this.occupiedPositions.has(t));return this.occupiedPositions.add(t),n.position.x=(t*l+l/2)*2-u*2/2,this.mesh.add(n),n});break}case"car":{this.mesh=new G,this.direction=Math.random()>=.5;let n=new Set;this.vechicles=[1,2,3].map(()=>{let t=new U,a;do a=Math.floor(Math.random()*m/2);while(n.has(a));return n.add(a),t.position.x=(a*l*2+l/2)*2-u*2/2,this.direction||(t.rotation.z=Math.PI),this.mesh.add(t),t}),this.speed=y[Math.floor(Math.random()*y.length)];break}case"truck":{this.mesh=new G,this.direction=Math.random()>=.5;let n=new Set;this.vechicles=[1,2].map(()=>{let t=new q,a;do a=Math.floor(Math.random()*m/3);while(n.has(a));return n.add(a),t.position.x=(a*l*3+l/2)*2-u*2/2,this.direction||(t.rotation.z=Math.PI),this.mesh.add(t),t}),this.speed=y[Math.floor(Math.random()*y.length)];break}}}h(fe,"Lane");function j(o){switch(o){case"fox":return Ee();default:return ue()}}h(j,"Player");function Ee(){let o=new THREE.Group,n=new THREE.Mesh(new THREE.BoxBufferGeometry(I*2,I*2,20*2),[new THREE.MeshPhongMaterial({color:285278207,flatShading:!0,map:new O(25,30,[{x:0,y:5,w:10,h:10}])}),new THREE.MeshPhongMaterial({color:1832664319,flatShading:!0,map:new O(25,30,[{x:0,y:5,w:10,h:10}])}),new THREE.MeshPhongMaterial({color:2832015615,flatShading:!0,map:new O(25,30,[{x:0,y:5,w:10,h:10}])}),new THREE.MeshPhongMaterial({color:2499870719,flatShading:!0,map:new O(25,30,[{x:0,y:5,w:10,h:10}])}),new THREE.MeshPhongMaterial({color:550983679,flatShading:!0,map:new O(25,30,[{x:0,y:5,w:10,h:10}])}),new THREE.MeshPhongMaterial({color:255,flatShading:!0,map:new O(25,30,[{x:0,y:5,w:10,h:10}])})]);return n.position.z=10*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n),o}h(Ee,"cowPlayer");function ue(){let o=new THREE.Group,n=new THREE.Mesh(new THREE.BoxBufferGeometry(I*2,I*2,20*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));n.position.z=10*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,4*2,2*2),new THREE.MeshLambertMaterial({color:15753626,flatShading:!0}));return t.position.z=21*2,t.castShadow=!0,t.receiveShadow=!1,o.add(t),o}h(ue,"originalChickenPlayer");function O(o,n,t){let a=document.createElement("canvas");a.width=o,a.height=n;let i=a.getContext("2d");return i.fillStyle="#ffffff",i.fillRect(0,0,o,n),i.fillStyle="rgba(0,0,0,0.6)",t.forEach(r=>{i.fillRect(r.x,r.y,r.w,r.h)}),new THREE.CanvasTexture(a)}h(O,"Texture");var K=document.getElementById("counter"),J=document.getElementById("end"),S=new THREE.Scene;S.background=z;var T=new THREE.OrthographicCamera(globalThis.innerWidth/-2,globalThis.innerWidth/2,globalThis.innerHeight/2,globalThis.innerHeight/-2,.1,1e4);T.rotation.x=c.CAMERA.ROTATION.X;T.rotation.y=c.CAMERA.ROTATION.Y;T.rotation.z=c.CAMERA.ROTATION.Z;T.position.y=c.CAMERA.POSITION.Y;T.position.x=c.CAMERA.POSITION.X;T.position.z=500;var E,w,P,M,b,H,x,p,s=new j("fox");S.add(s);var we=new THREE.HemisphereLight(16777215,16777215,.6);S.add(we);var d=new THREE.DirectionalLight(16777215,.6);d.position.set(c.DIR_LIGHT.POSITION.X,c.DIR_LIGHT.POSITION.Y,200);d.castShadow=!0;d.target=s;S.add(d);d.shadow.mapSize.width=2048;d.shadow.mapSize.height=2048;d.shadow.camera.left=c.DIR_LIGHT.SHADOW.CAMERA.LEFT;d.shadow.camera.right=c.DIR_LIGHT.SHADOW.CAMERA.RIGHT;d.shadow.camera.top=c.DIR_LIGHT.SHADOW.CAMERA.TOP;d.shadow.camera.bottom=c.DIR_LIGHT.SHADOW.CAMERA.BOTTON;var v=new THREE.DirectionalLight(0,.4);v.position.set(200,200,50);v.castShadow=!0;S.add(v);var Q=h(()=>{E=V(S),w=0,P=Math.floor(m/2),b=null,H=!1,x=[],p="forward",s.position.x=0,s.position.y=0,T.position.y=c.CAMERA.POSITION.Y,T.position.x=c.CAMERA.POSITION.X,d.position.x=c.DIR_LIGHT.POSITION.X,d.position.y=c.DIR_LIGHT.POSITION.Y},"initaliseValues");Q();var L=new THREE.WebGLRenderer({alpha:!0,antialias:!0});L.shadowMap.enabled=!0;L.shadowMap.type=THREE.PCFSoftShadowMap;L.setSize(globalThis.innerWidth,globalThis.innerHeight);document.body.appendChild(L.domElement);function R(o){if(x.length>=2)return;let n=x.reduce((t,a)=>{if(a==="forward")return{lane:t.lane+1,column:t.column};if(a==="backward")return{lane:t.lane-1,column:t.column};if(a==="left")return{lane:t.lane,column:t.column-1};if(a==="right")return{lane:t.lane,column:t.column+1}},{lane:w,column:P});if(o==="forward"){if(E[n.lane+1].type==="forest"&&E[n.lane+1].occupiedPositions.has(n.column))return;M||(H=!0)}else if(o==="backward"){if(n.lane===0||E[n.lane-1].type==="forest"&&E[n.lane-1].occupiedPositions.has(n.column))return;M||(H=!0)}else if(o==="left"){if(n.column===0||E[n.lane].type==="forest"&&E[n.lane].occupiedPositions.has(n.column-1))return;M||(H=!0)}else if(o==="right"){if(n.column===m-1||E[n.lane].type==="forest"&&E[n.lane].occupiedPositions.has(n.column+1))return;M||(H=!0)}x.push(o)}h(R,"move");document.querySelector("#retry").addEventListener("click",()=>{E.forEach(o=>S.remove(o.mesh)),Q(),J.style.visibility="hidden"});document.getElementById("forward").addEventListener("click",()=>R("forward"));document.getElementById("backward").addEventListener("click",()=>R("backward"));document.getElementById("left").addEventListener("click",()=>R("left"));document.getElementById("right").addEventListener("click",()=>R("right"));globalThis.addEventListener("keydown",o=>{o.keyCode=="38"?R("forward"):o.keyCode=="40"?R("backward"):o.keyCode=="37"?R("left"):o.keyCode=="39"&&R("right")});function $(o){requestAnimationFrame($),b||(b=o);let n=o-b;if(b=o,E.forEach(t=>{if(t.type==="car"||t.type==="truck"){let a=-u*2/2-l*2*2,i=u*2/2+l*2*2;t.vechicles.forEach(r=>{t.direction?r.position.x=r.position.x<a?i:r.position.x-=t.speed/16*n:r.position.x=r.position.x>i?a:r.position.x+=t.speed/16*n})}}),H&&(M=o,H=!1),M){let t=o-M,a=Math.min(t/200,1)*l*2,i=Math.sin(Math.min(t/200,1)*Math.PI)*8*2;switch(x[0]){case"forward":{let r=w*l*2+a;switch(T.position.y=c.CAMERA.POSITION.Y+r,d.position.y=c.DIR_LIGHT.POSITION.Y+r,s.position.y=r,s.position.z=i,p){case"left":s.rotation.z=-(Math.min(t/200,1)-1)*Math.PI/2;break;case"right":s.rotation.z=(Math.min(t/200,1)-1)*Math.PI/2;break;case"backward":s.rotation.z=(Math.min(t/200,1)-1)*Math.PI;break;default:break}break}case"backward":{let r=w*l*2-a;switch(T.position.y=c.CAMERA.POSITION.Y+r,d.position.y=c.DIR_LIGHT.POSITION.Y+r,s.position.y=r,s.position.z=i,p){case"forward":s.rotation.z=-(Math.min(t/200,1)*Math.PI);break;case"left":s.rotation.z=Math.min(t/200,1)*Math.PI/2+Math.PI/2;break;case"right":s.rotation.z=-(Math.min(t/200,1)*Math.PI/2+Math.PI/2);break;default:break}break}case"left":{let r=(P*l+l/2)*2-u*2/2-a;switch(T.position.x=c.CAMERA.POSITION.X+r,d.position.x=c.DIR_LIGHT.POSITION.X+r,s.position.x=r,s.position.z=i,p){case"forward":s.rotation.z=Math.min(t/200,1)*Math.PI/2;break;case"backward":s.rotation.z=-(Math.min(t/200,1)*Math.PI/2-Math.PI);break;case"right":s.rotation.z=-(Math.min(t/200,1)*Math.PI+Math.PI/2);break;default:break}break}case"right":{let r=(P*l+l/2)*2-u*2/2+a;switch(T.position.x=c.CAMERA.POSITION.X+r,d.position.x=c.DIR_LIGHT.POSITION.X+r,s.position.x=r,s.position.z=i,p){case"forward":s.rotation.z=-(Math.min(t/200,1)*Math.PI/2);break;case"backward":s.rotation.z=Math.min(t/200,1)*Math.PI/2-Math.PI;break;case"left":s.rotation.z=Math.min(t/200,1)*Math.PI+Math.PI/2;break;default:break}break}}if(t>200){switch(x[0]){case"forward":{w++,K.innerHTML=w,p="forward";break}case"backward":{w--,K.innerHTML=w,p="backward";break}case"left":{P--,p="left";break}case"right":{P++,p="right";break}}x.shift(),M=x.length===0?null:o}}if(E[w].type==="car"||E[w].type==="truck"){let t=s.position.x-I*2/2,a=s.position.x+I*2/2,i={car:60,truck:105}[E[w].type];E[w].vechicles.forEach(r=>{let k=r.position.x-i*2/2,_=r.position.x+i*2/2;a>k&&t<_&&(J.style.visibility="visible")})}L.render(S,T)}h($,"animate");requestAnimationFrame($);
