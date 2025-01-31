var Te=Object.defineProperty;var c=(o,r)=>Te(o,"name",{value:r,configurable:!0});var k=new THREE.Color().setHex(8900331),Re=-100,Me=-100,_=500,K=50*Math.PI/180,F=20*Math.PI/180,pe=10*Math.PI/180,Y=-Math.tan(K)*500,He=Math.tan(F)*Math.sqrt(500**2+Y**2),w=Object.freeze({DIR_LIGHT:{POSITION:{X:Re,Y:Me},SHADOW:{CAMERA:{LEFT:-_,RIGHT:_,TOP:_,BOTTON:-_}}},CAMERA:{ROTATION:{X:K,Y:F,Z:pe},POSITION:{X:He,Y}}}),E=15,d=42,U=3;var D=d*U,s=42;var X=[20,45,60];function g(){let o=new THREE.Group,n=c(t=>new THREE.Mesh(new THREE.BoxBufferGeometry(s*2,d*2),new THREE.MeshPhongMaterial({color:t})),"createSection")(12252245);return n.receiveShadow=!0,o.add(n),o.position.z=1.5*2,o}c(g,"GrassTile");function M(){let o=new THREE.Group,n=c(t=>new THREE.Mesh(new THREE.BoxBufferGeometry(s*2,d*2),new THREE.MeshPhongMaterial({color:t})),"createSection")(4541017);return n.receiveShadow=!0,o.add(n),o.position.z=1.5*2,o}c(M,"RoadTile");function Z(){let o=new THREE.Group,n=c(t=>new THREE.Mesh(new THREE.BoxBufferGeometry(s*2,d*2),new THREE.MeshPhongMaterial({color:t})),"createSection")(33023);return n.receiveShadow=!0,o.add(n),o.position.z=1.5*2,o}c(Z,"WaterTile");function V(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(15*2,15*2,20*2),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));r.position.z=10*2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=X[Math.floor(Math.random()*X.length)],t=new THREE.Mesh(new THREE.BoxBufferGeometry(30*2,30*2,n*2),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return t.position.z=(n/2+20)*2,t.castShadow=!0,t.receiveShadow=!1,o.add(t),o}c(V,"ThreeTile");function j(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.IcosahedronGeometry(15*2,1),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));return r.castShadow=!0,r.receiveShadow=!0,o.add(r),o}c(j,"RockTile");function q(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(5*2,5*2,80*2),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));r.position.z=40*2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(130*2,5*2,80*2),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));return n.position.z=120*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n),o}c(q,"CVBoard");var J=[10822947,12432952,7909707],Se=new b(40,80,[{x:0,y:10,w:30,h:60}]),xe=new b(40,80,[{x:10,y:10,w:30,h:60}]),Be=new b(110,40,[{x:10,y:0,w:50,h:30},{x:70,y:0,w:30,h:30}]),me=new b(110,40,[{x:10,y:10,w:50,h:30},{x:70,y:10,w:30,h:30}]),_e=new b(30,30,[{x:15,y:0,w:10,h:30}]),ve=new b(25,30,[{x:0,y:15,w:10,h:10}]),ke=new b(25,30,[{x:0,y:5,w:10,h:10}]);function $(){let o=new THREE.Group,r=J[Math.floor(Math.random()*J.length)],n=new THREE.Mesh(new THREE.BoxBufferGeometry(60*2,30*2,15*2),new THREE.MeshPhongMaterial({color:r,flatShading:!0}));n.position.z=12*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(33*2,24*2,12*2),[new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:xe}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:Se}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:Be}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:me}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0})]);t.position.x=6*2,t.position.z=25.5*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t);let i=new Q;i.position.x=-18*2,o.add(i);let h=new Q;return h.position.x=18*2,o.add(h),o.castShadow=!0,o.receiveShadow=!1,o}c($,"Car");function Q(){let o=new THREE.Mesh(new THREE.BoxBufferGeometry(12*2,33*2,12*2),new THREE.MeshLambertMaterial({color:3355443,flatShading:!0}));return o.position.z=6*2,o}c(Q,"Wheel");function b(o,r,n){let t=document.createElement("canvas");t.width=o,t.height=r;let i=t.getContext("2d");return i.fillStyle="#ffffff",i.fillRect(0,0,o,r),i.fillStyle="rgba(0,0,0,0.6)",n.forEach(h=>{i.fillRect(h.x,h.y,h.w,h.h)}),new THREE.CanvasTexture(t)}c(b,"Texture");var f={GRASS:0,ROAD:1,THREE:2,ROCK:3,OCCUPIED:4,WATER:5,VEHICLE:6,TEST:7,TOURBUILDING:8,BOARD:9,LUBTRAC_CONTAINNER:10,LUBTRAC_BOARD:11,BOSCH_CUBES:12,BOSCH_BOARD:13,BOSCH_DIGITAL:14,AG_BOARD:15,BUS_SIGN:16,BUS_STOP:17,AG_BUILDING:18},x=[[1,16,17,4,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,1,1,1,1,1,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,0,2],[1,0,0,0,0,1,0,9,0,0,2,0,2,2,2,0,2,0,2,2,0,0,0,2,2,2,0,2,0,2],[1,7,0,0,0,1,0,0,0,0,2,0,2,0,2,0,0,0,2,2,2,2,2,2,0,2,0,2,0,2],[1,0,0,0,0,1,0,0,0,0,2,1,2,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,2],[1,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,0,0,0,0,1,4,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,1,4,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,4,4,0,0,0,0,0,1,1,18,0,0,1,10,4,0,0,1,6,1,12,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,15,1,4,0,0,11,4,4,0,0,13,4,1,14,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,0,5,5,5,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,0,5,2,5,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,0,5,5,5,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];function ee(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(3*s*2,2*d*2,20*2),new THREE.MeshPhongMaterial({color:10040319,flatShading:!0}));r.position.z=10*2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(3*s*2,1*d*2,20*2),new THREE.MeshPhongMaterial({color:10040319,flatShading:!0}));n.position.z=30*2,n.position.y=s,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(3*s*2,2*d*2,2*2),new THREE.MeshPhongMaterial({color:10040319,flatShading:!0}));t.position.z=41*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(3*s*2,2*2,20*2),new THREE.MeshPhongMaterial({color:6829312,flatShading:!0}));return i.position.z=s*2+s/2,i.position.y=-s*2,i.castShadow=!0,i.receiveShadow=!0,o.add(i),o}c(ee,"TourBuilding");function oe(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.CylinderGeometry(35*2,35*2,2*s*2,10),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));return r.position.z=s*2,r.position.y=s*2/2,r.position.x=s*2/2,r.rotation.x=Math.PI/2,r.castShadow=!0,r.receiveShadow=!0,o.add(r),o}c(oe,"LubtracContainner");function te(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,3*2,60*2),new THREE.MeshPhongMaterial({color:1329151,flatShading:!0}));r.position.z=30*2,r.position.y=s*2/-2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,3*2,60*2),new THREE.MeshPhongMaterial({color:1329151,flatShading:!0}));n.position.z=30*2,n.position.y=s*2/2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,s*2,20*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));t.position.z=30*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(6*2,s*2,30*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));return i.position.z=75*2,i.castShadow=!0,i.receiveShadow=!0,o.add(i),o}c(te,"LubtracBoard");function ne(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(10*2,10*2,10*2),new THREE.MeshPhongMaterial({color:1197863,flatShading:!0}));r.position.z=5*2,r.position.y=s*2/-4,r.position.x=s*2/-4,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(10*2,10*2,10*2),new THREE.MeshPhongMaterial({color:1329151,flatShading:!0}));n.position.z=5*2,n.position.y=s*2/4,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(10*2,10*2,10*2),new THREE.MeshPhongMaterial({color:10040319,flatShading:!0}));return t.position.z=5*2,t.position.y=s*2/-4,t.position.x=s*2/4,t.castShadow=!0,t.receiveShadow=!0,o.add(t),o}c(ne,"BoschCubes");function re(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,3*2,60*2),new THREE.MeshPhongMaterial({color:1329151,flatShading:!0}));r.position.z=30*2,r.position.y=s*2/-2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,3*2,60*2),new THREE.MeshPhongMaterial({color:1329151,flatShading:!0}));n.position.z=30*2,n.position.y=s*2/2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(6*2,s*2,30*2),new THREE.MeshPhongMaterial({color:1329151,flatShading:!0}));return t.position.z=75*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t),o}c(re,"BoschBoard");function ae(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,s*2,s*2),new THREE.MeshPhongMaterial({color:0,flatShading:!0}));return r.position.z=s*2/2,r.castShadow=!0,r.receiveShadow=!0,o.add(r),o}c(ae,"BoschDigital");function ie(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(3*2,s*2,s*2),new THREE.MeshPhongMaterial({color:16744448,flatShading:!0}));return r.position.z=s*2/2,r.castShadow=!0,r.receiveShadow=!0,o.add(r),o}c(ie,"AGBoard");function se(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(10*2,10*2,4*2),new THREE.MeshPhongMaterial({color:4541017,flatShading:!0}));r.position.z=2*2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(4*2,4*2,10*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));n.position.z=7*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(5*2,30*2,40*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));return t.position.z=34*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t),o}c(se,"BusSign");function he(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(s*2,2*d*2,2*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));r.position.z=2*2,r.position.y=s*2/2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(s*2/2,2*d*2-10,10*2),new THREE.MeshPhongMaterial({color:6829312,flatShading:!0}));n.position.z=7*2,n.position.y=s*2/2,n.position.x=-6*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(4*2,4*2,40*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));t.position.z=21*2,t.position.y=-s*2/2,t.position.x=-s*2/2,t.castShadow=!0,t.receiveShadow=!0,o.add(t);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(4*2,4*2,40*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));i.position.z=21*2,i.position.y=s*2+s*2/2,i.position.x=-s*2/2,i.castShadow=!0,i.receiveShadow=!0,o.add(i);let h=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*s*2,40*2),new THREE.MeshPhongMaterial({color:33023,flatShading:!0}));h.position.z=21*2,h.position.y=s*2/2,h.position.x=-s*2/2,h.castShadow=!0,h.receiveShadow=!0,o.add(h);let u=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*s*2,40*2),new THREE.MeshPhongMaterial({color:33023,flatShading:!0}));return u.position.z=51*2,u.position.y=s*2/2,u.rotation.y=Math.PI/3,u.position.x=-s*2/4,u.castShadow=!0,u.receiveShadow=!0,o.add(u),o}c(he,"BusStop");function ce(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(60*2,30*2,2*s*2),new THREE.MeshPhongMaterial({color:0,flatShading:!0}));r.position.z=30*2,r.position.x=s*2/2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.IcosahedronGeometry(3*2,1),new THREE.MeshPhongMaterial({color:16711680,flatShading:!0}));n.position.z=40*2,n.position.x=50*2,n.position.y=8*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(5*2,25*2,5*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));return t.position.z=50*2,t.position.x=50*2,t.castShadow=!0,t.receiveShadow=!0,o.add(t),o}c(ce,"AGBuilding");var a=Object.freeze({GENERAL:{BLACK:"rgb(48,48,48)",WHITE:"rgb(255,255,255)"},COW:{BASE:"rgb(255, 255, 255)",BROWN:"rgb(105, 59, 7)",PINK:"rgb(232, 106, 218)",BLACK:"rgb(0, 0, 0)"},BEAR:{BROWN:"rgb(165,97,51)",PINK:"rgb(199,104,166)"},PORK:{PINK:"rgb(255,173,205)",DARKPINK:"rgb(255,112,167)",BROWN:"rgb(188,111,58)"},SHEEP:{BROWN:"rgb(188,111,58)",PINK:"rgb(255,173,205)",SKIN:"rgb(253,221,202)"},FROG:{GREEN:"rgb(62,212,107)",YELLOW:"rgb(255,192,3)",PINK:"rgb(255,173,205)"},FISH:{ORANGE:"rgb(255,71,0)",DARKYELLOW:"rgb(255,165,0)",YELLOW:"rgb(255,192,3)"}}),I=Object.freeze({COW:{RIGHT:new p(70,70,[{x:0,y:20,w:20,h:40,color:a.COW.BROWN},{x:20,y:30,w:10,h:20,color:a.COW.BROWN},{x:30,y:0,w:10,h:10,color:a.COW.PINK}]),LEFT:new p(70,70,[{x:50,y:0,w:20,h:40,color:a.COW.BROWN},{x:40,y:0,w:10,h:30,color:a.COW.BROWN},{x:30,y:10,w:10,h:10,color:a.COW.BROWN},{x:50,y:60,w:20,h:10,color:a.COW.BROWN},{x:10,y:40,w:20,h:10,color:a.COW.BROWN},{x:30,y:0,w:10,h:10,color:a.COW.PINK}]),FRONT:new p(70,70,[{x:30,y:60,w:10,h:10,color:a.COW.BROWN},{x:0,y:40,w:30,h:30,color:a.COW.BROWN},{x:10,y:30,w:10,h:10,color:a.COW.BROWN},{x:10,y:40,w:10,h:10,color:a.COW.BLACK},{x:50,y:40,w:10,h:10,color:a.COW.BLACK},{x:0,y:30,w:10,h:10,color:a.COW.PINK},{x:60,y:30,w:10,h:10,color:a.COW.PINK},{x:20,y:20,w:30,h:20,color:a.COW.PINK}]),BACK:new p(70,70,[{x:0,y:0,w:10,h:20,color:a.COW.BROWN},{x:10,y:0,w:10,h:10,color:a.COW.BROWN},{x:30,y:50,w:10,h:10,color:a.COW.BLACK}]),TOP:new p(70,70,[{x:0,y:0,w:30,h:30,color:a.COW.BROWN},{x:30,y:0,w:10,h:10,color:a.COW.BROWN},{x:0,y:30,w:10,h:10,color:a.COW.BROWN},{x:10,y:10,w:10,h:10,color:a.COW.BLACK},{x:50,y:10,w:10,h:10,color:a.COW.BLACK},{x:0,y:60,w:20,h:10,color:a.COW.BROWN},{x:60,y:20,w:10,h:40,color:a.COW.BROWN},{x:50,y:30,w:10,h:10,color:a.COW.BROWN}])},PANDA:{RIGHT:new p(64,64,[{x:40,y:8,w:24,h:48,color:a.GENERAL.BLACK},{x:24,y:16,w:16,h:32,color:a.GENERAL.BLACK},{x:8,y:32,w:16,h:16,color:a.GENERAL.BLACK},{x:0,y:40,w:8,h:8,color:a.GENERAL.BLACK}]),LEFT:new p(64,64,[{x:0,y:8,w:24,h:48,color:a.GENERAL.BLACK},{x:24,y:16,w:16,h:32,color:a.GENERAL.BLACK},{x:40,y:32,w:16,h:16,color:a.GENERAL.BLACK},{x:56,y:40,w:8,h:8,color:a.GENERAL.BLACK}]),FRONT:new p(64,64,[{x:8,y:32,w:16,h:16,color:a.GENERAL.BLACK},{x:40,y:32,w:16,h:16,color:a.GENERAL.BLACK},{x:24,y:16,w:16,h:8,color:a.GENERAL.BLACK}]),BACK:new p(64,64,[{x:24,y:40,w:16,h:16,color:a.GENERAL.BLACK}]),TOP:new p(64,64,[{x:0,y:8,w:24,h:8,color:a.GENERAL.BLACK},{x:40,y:8,w:24,h:8,color:a.GENERAL.BLACK},{x:0,y:40,w:64,h:8,color:a.GENERAL.BLACK}])},BEAR:{RIGHT:new p(64,64,[{x:0,y:0,w:64,h:64,color:a.BEAR.BROWN},{x:32,y:0,w:8,h:8,color:a.BEAR.PINK}]),LEFT:new p(64,64,[{x:0,y:0,w:64,h:64,color:a.BEAR.BROWN},{x:24,y:0,w:8,h:8,color:a.BEAR.PINK}]),FRONT:new p(64,64,[{x:0,y:0,w:64,h:64,color:a.BEAR.BROWN},{x:16,y:40,w:8,h:8,color:a.GENERAL.BLACK},{x:40,y:40,w:8,h:8,color:a.GENERAL.BLACK},{x:0,y:24,w:8,h:8,color:a.BEAR.PINK},{x:56,y:24,w:8,h:8,color:a.BEAR.PINK}])}});function Ee(o){switch(o){case"cow":return ge();default:return Ie()}}c(Ee,"Player");function ge(){let o=new THREE.Group,r=[new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.COW.RIGHT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.COW.LEFT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.COW.FRONT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.COW.BACK}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.COW.TOP}),new THREE.MeshBasicMaterial({color:15733283,side:THREE.DoubleSide})],n=new THREE.Mesh(new THREE.BoxGeometry(E*2,E*2,E*2),r);n.position.z=8*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(6*2,3*2,4*2),new THREE.MeshLambertMaterial({color:a.COW.PINK,flatShading:!0}));t.position.z=E/2*2,t.position.y=E/2*2,t.castShadow=!0,t.receiveShadow=!1,o.add(t);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BLACK,flatShading:!0}));i.position.z=(E+1.5)*2,i.position.y=E/3.5*2,i.position.x=E/3.3*2,i.castShadow=!0,i.receiveShadow=!1,o.add(i);let h=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BLACK,flatShading:!0}));h.position.z=(E+1.5)*2,h.position.y=E/3.5*2,h.position.x=-(E/3.3)*2,h.castShadow=!0,h.receiveShadow=!1,o.add(h);let u=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BASE,flatShading:!0}));u.position.z=(E-2)*2,u.position.y=E/3.5*2,u.position.x=-(E/1.8)*2,u.castShadow=!0,u.receiveShadow=!1,o.add(u);let S=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BASE,flatShading:!0}));S.position.z=(E-2)*2,S.position.y=E/3.5*2,S.position.x=E/1.8*2,S.castShadow=!0,S.receiveShadow=!1,o.add(S);let N=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,4*2),new THREE.MeshLambertMaterial({color:a.COW.BLACK,flatShading:!0}));return N.position.z=E/3*2,N.position.y=-(E/1.8)*2,N.castShadow=!0,N.receiveShadow=!1,o.add(N),o}c(ge,"cowPlayer");function de(){let o=new THREE.Group,r=[new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.BEAR.RIGHT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.BEAR.LEFT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:I.BEAR.FRONT}),new THREE.MeshBasicMaterial({color:a.BEAR.BROWN,side:THREE.DoubleSide}),new THREE.MeshBasicMaterial({color:a.BEAR.BROWN,side:THREE.DoubleSide}),new THREE.MeshBasicMaterial({color:15733283,side:THREE.DoubleSide})],n=new THREE.Mesh(new THREE.BoxGeometry(E*2,E*2,E*2),r);n.position.z=8*2,n.castShadow=!0,n.receiveShadow=!0,o.add(n);let t=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.BEAR.BROWN,flatShading:!0}));t.position.z=(E+1.5)*2,t.position.y=E/3.5*2,t.position.x=E/3.3*2,t.castShadow=!0,t.receiveShadow=!1,o.add(t);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.BEAR.BROWN,flatShading:!0}));i.position.z=(E+1.5)*2,i.position.y=E/3.5*2,i.position.x=-(E/3.3)*2,i.castShadow=!0,i.receiveShadow=!1,o.add(i);let h=new THREE.Mesh(new THREE.BoxBufferGeometry(6*2,2*2,4*2),new THREE.MeshLambertMaterial({color:a.BEAR.BROWN,flatShading:!0}));h.position.z=E/2*2,h.position.y=E/2*2,h.castShadow=!0,h.receiveShadow=!1,o.add(h);let u=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.GENERAL.BLACK,flatShading:!0}));u.position.z=E/2*2+E/16*2,u.position.y=E/2*2,u.castShadow=!0,u.receiveShadow=!1,o.add(u);let S=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.BEAR.BROWN,flatShading:!0}));return S.position.z=E/3*2,S.position.y=-(E/1.8)*2,S.castShadow=!0,S.receiveShadow=!1,o.add(S),o}c(de,"bearPlayer");function Ie(){let o=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(E*2,E*2,20*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));r.position.z=10*2,r.castShadow=!0,r.receiveShadow=!0,o.add(r);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,4*2,2*2),new THREE.MeshLambertMaterial({color:15753626,flatShading:!0}));return n.position.z=21*2,n.castShadow=!0,n.receiveShadow=!1,o.add(n),o}c(Ie,"originalChickenPlayer");function p(o,r,n){let t=document.createElement("canvas");t.width=o,t.height=r;let i=t.getContext("2d");return n.forEach(h=>{i.fillStyle=h.color,i.fillRect(h.x,h.y,h.w,h.h)}),new THREE.CanvasTexture(t)}c(p,"CanvasTexture");function le(o){let r=new Array(x.length);for(let n=0;n<x.length;n++){r[n]=new Array(x[n].length);for(let t=0;t<x[n].length;t++){let i=new ye(x[n][t],n,t);i.mesh.position.x=n*d*2-d*2,i.mesh.position.y=t*d*2,o.add(i.mesh),r[n][t]=i}}return r}c(le,"generateMap");function ye(o,r,n){this.x_index=r,this.y_index=n,this.type=o,this.occupiedPosition=!1;let t=null;switch(this.type){case f.GRASS:this.mesh=new g;break;case f.ROAD:this.mesh=new M;break;case f.THREE:this.mesh=new g,t=new V,t.position.x=d*2-d*2,this.mesh.add(t),this.occupiedPosition=!0;break;case f.ROCK:this.mesh=new g,t=new j,t.position.x=d*2-d*2,this.mesh.add(t),this.occupiedPosition=!0;break;case f.OCCUPIED:this.mesh=new M,this.occupiedPosition=!0;break;case f.WATER:this.mesh=new Z,this.occupiedPosition=!0;break;case f.VEHICLE:this.mesh=new M,t=new $,t.position.x=d*2/2,this.mesh.add(t),this.occupiedPosition=!0;break;case f.TEST:this.mesh=new g,t=new de,this.mesh.add(t),this.occupiedPosition=!0;break;case f.TOURBUILDING:this.mesh=new M,t=new ee,t.position.x=d*2,t.position.y=d*2/-2,this.mesh.add(t),this.occupiedPosition=!0;break;case f.BOARD:this.mesh=new M,t=new q,this.mesh.add(t),this.occupiedPosition=!0;break;case f.LUBTRAC_CONTAINNER:this.mesh=new M,t=new oe,this.mesh.add(t),this.occupiedPosition=!0;break;case f.LUBTRAC_BOARD:this.mesh=new M,t=new te,this.mesh.add(t),this.occupiedPosition=!0;break;case f.BOSCH_CUBES:this.mesh=new M,t=new ne,this.mesh.add(t),this.occupiedPosition=!0;break;case f.BOSCH_BOARD:this.mesh=new M,t=new re,this.mesh.add(t),this.occupiedPosition=!0;break;case f.BOSCH_DIGITAL:this.mesh=new M,t=new ae,this.mesh.add(t),this.occupiedPosition=!0;break;case f.AG_BOARD:this.mesh=new M,t=new ie,this.mesh.add(t),this.occupiedPosition=!0;break;case f.BUS_SIGN:this.mesh=new g,t=new se,this.mesh.add(t),this.occupiedPosition=!0;break;case f.BUS_STOP:this.mesh=new g,t=new he,this.mesh.add(t),this.occupiedPosition=!0;break;case f.AG_BUILDING:this.mesh=new M,t=new ce,this.mesh.add(t),this.occupiedPosition=!0;break;default:this.mesh=new g;break}}c(ye,"Tile");var we=document.getElementById("counter"),Ae=document.getElementById("end"),Pe=x[0].length,be=x.length,P=new THREE.Scene;P.background=k;var H=new THREE.OrthographicCamera(globalThis.innerWidth/-2,globalThis.innerWidth/2,globalThis.innerHeight/2,globalThis.innerHeight/-2,.1,1e4);H.rotation.x=w.CAMERA.ROTATION.X;H.rotation.y=w.CAMERA.ROTATION.Y;H.rotation.z=w.CAMERA.ROTATION.Z;H.position.y=w.CAMERA.POSITION.Y;H.position.x=w.CAMERA.POSITION.X;H.position.z=500;var G,y,C,m,W,L,O,B,l=new Ee("cow");P.add(l);var Le=new THREE.HemisphereLight(16777215,16777215,.6);P.add(Le);var T=new THREE.DirectionalLight(16777215,.6);T.position.set(w.DIR_LIGHT.POSITION.X,w.DIR_LIGHT.POSITION.Y,200);T.castShadow=!0;T.target=l;P.add(T);T.shadow.mapSize.width=2048;T.shadow.mapSize.height=2048;T.shadow.camera.left=w.DIR_LIGHT.SHADOW.CAMERA.LEFT;T.shadow.camera.right=w.DIR_LIGHT.SHADOW.CAMERA.RIGHT;T.shadow.camera.top=w.DIR_LIGHT.SHADOW.CAMERA.TOP;T.shadow.camera.bottom=w.DIR_LIGHT.SHADOW.CAMERA.BOTTON;var v=new THREE.DirectionalLight(0,.4);v.position.set(200,200,50);v.castShadow=!0;P.add(v);var ue=c(()=>{G=le(P),y=0,C=1,W=null,L=!1,O=[],B="forward",l.position.x=0,l.position.y=0,l.rotation.z=0,H.position.y=w.CAMERA.POSITION.Y,H.position.x=w.CAMERA.POSITION.X,T.position.x=w.DIR_LIGHT.POSITION.X,T.position.y=w.DIR_LIGHT.POSITION.Y},"initaliseValues");ue();var z=new THREE.WebGLRenderer({alpha:!0,antialias:!0});z.shadowMap.enabled=!0;z.shadowMap.type=THREE.PCFSoftShadowMap;z.setSize(globalThis.innerWidth,globalThis.innerHeight);document.body.appendChild(z.domElement);function A(o){if(O.length>=2)return;let r=O.reduce((n,t)=>{if(t==="forward")return{lane:n.lane+1,column:n.column};if(t==="backward")return{lane:n.lane-1,column:n.column};if(t==="left")return{lane:n.lane,column:n.column-1};if(t==="right")return{lane:n.lane,column:n.column+1}},{lane:y,column:C});if(o==="forward"){if(r.lane===Pe-1||G[r.column][r.lane+1].occupiedPosition===!0)return;m||(L=!0)}else if(o==="backward"){if(r.lane===0||G[r.column][r.lane-1].occupiedPosition===!0)return;m||(L=!0)}else if(o==="left"){if(r.column===0||G[r.column-1][r.lane].occupiedPosition===!0)return;m||(L=!0)}else if(o==="right"){if(r.column===be-1||G[r.column+1][r.lane].occupiedPosition===!0)return;m||(L=!0)}O.push(o)}c(A,"move");document.querySelector("#retry").addEventListener("click",()=>{G.forEach(o=>o.forEach(r=>P.remove(r))),ue(),Ae.style.visibility="hidden"});document.getElementById("forward").addEventListener("click",()=>A("forward"));document.getElementById("backward").addEventListener("click",()=>A("backward"));document.getElementById("left").addEventListener("click",()=>A("left"));document.getElementById("right").addEventListener("click",()=>A("right"));globalThis.addEventListener("keydown",o=>{o.keyCode=="38"?A("forward"):o.keyCode=="40"?A("backward"):o.keyCode=="37"?A("left"):o.keyCode=="39"&&A("right")});function fe(o){requestAnimationFrame(fe),W||(W=o);let r=o-W;if(W=o,L&&(m=o,L=!1),m){let n=o-m,t=Math.min(n/200,1)*d*2,i=Math.sin(Math.min(n/200,1)*Math.PI)*8*2;switch(O[0]){case"forward":{let h=y*d*2+t;switch(H.position.y=w.CAMERA.POSITION.Y+h,T.position.y=w.DIR_LIGHT.POSITION.Y+h,l.position.y=h,l.position.z=i,B){case"left":l.rotation.z=-(Math.min(n/200,1)-1)*Math.PI/2;break;case"right":l.rotation.z=(Math.min(n/200,1)-1)*Math.PI/2;break;case"backward":l.rotation.z=(Math.min(n/200,1)-1)*Math.PI;break;default:break}break}case"backward":{let h=y*d*2-t;switch(H.position.y=w.CAMERA.POSITION.Y+h,T.position.y=w.DIR_LIGHT.POSITION.Y+h,l.position.y=h,l.position.z=i,B){case"forward":l.rotation.z=-(Math.min(n/200,1)*Math.PI);break;case"left":l.rotation.z=Math.min(n/200,1)*Math.PI/2+Math.PI/2;break;case"right":l.rotation.z=-(Math.min(n/200,1)*Math.PI/2+Math.PI/2);break;default:break}break}case"left":{let h=(C*d+d/2)*2-D*2/2-t;switch(H.position.x=w.CAMERA.POSITION.X+h,T.position.x=w.DIR_LIGHT.POSITION.X+h,l.position.x=h,l.position.z=i,B){case"forward":l.rotation.z=Math.min(n/200,1)*Math.PI/2;break;case"backward":l.rotation.z=-(Math.min(n/200,1)*Math.PI/2-Math.PI);break;case"right":l.rotation.z=-(Math.min(n/200,1)*Math.PI+Math.PI/2);break;default:break}break}case"right":{let h=(C*d+d/2)*2-D*2/2+t;switch(H.position.x=w.CAMERA.POSITION.X+h,T.position.x=w.DIR_LIGHT.POSITION.X+h,l.position.x=h,l.position.z=i,B){case"forward":l.rotation.z=-(Math.min(n/200,1)*Math.PI/2);break;case"backward":l.rotation.z=Math.min(n/200,1)*Math.PI/2-Math.PI;break;case"left":l.rotation.z=Math.min(n/200,1)*Math.PI+Math.PI/2;break;default:break}break}}if(n>200){switch(O[0]){case"forward":{y++,we.innerHTML=y,B="forward";break}case"backward":{y--,we.innerHTML=y,B="backward";break}case"left":{C--,B="left";break}case"right":{C++,B="right";break}}O.shift(),m=O.length===0?null:o}}z.render(P,H)}c(fe,"animate");requestAnimationFrame(fe);
