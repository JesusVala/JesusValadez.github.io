var oe=Object.defineProperty;var l=(t,r)=>oe(t,"name",{value:r,configurable:!0});var v=new THREE.Color().setHex(8900331),ne=-100,re=-100,G=500,z=50*Math.PI/180,Y=20*Math.PI/180,ae=10*Math.PI/180,X=-Math.tan(z)*500,ie=Math.tan(Y)*Math.sqrt(500**2+X**2),d=Object.freeze({DIR_LIGHT:{POSITION:{X:ne,Y:re},SHADOW:{CAMERA:{LEFT:-G,RIGHT:G,TOP:G,BOTTON:-G}}},CAMERA:{ROTATION:{X:z,Y,Z:ae},POSITION:{X:ie,Y:X}}}),E=15,s=42,K=3;var C=s*K,b=42;var Z=[20,45,60];function B(){let t=new THREE.Group,o=l(n=>new THREE.Mesh(new THREE.BoxBufferGeometry(b*2,s*2),new THREE.MeshPhongMaterial({color:n})),"createSection")(12252245);return o.receiveShadow=!0,t.add(o),t.position.z=1.5*2,t}l(B,"GrassTile");function L(){let t=new THREE.Group,o=l(n=>new THREE.Mesh(new THREE.BoxBufferGeometry(b*2,s*2),new THREE.MeshPhongMaterial({color:n})),"createSection")(4541017);return o.receiveShadow=!0,t.add(o),t.position.z=1.5*2,t}l(L,"RoadTile");function F(){let t=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(15*2,15*2,20*2),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));r.position.z=10*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let o=Z[Math.floor(Math.random()*Z.length)],n=new THREE.Mesh(new THREE.BoxBufferGeometry(30*2,30*2,o*2),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return n.position.z=(o/2+20)*2,n.castShadow=!0,n.receiveShadow=!1,t.add(n),t}l(F,"ThreeTile");function U(){let t=new THREE.Group,r=new THREE.Mesh(new THREE.IcosahedronGeometry(15*2,1),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}l(U,"RockTile");function j(){let t=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(5*2,5*2,80*2),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));r.position.z=40*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let o=new THREE.Mesh(new THREE.BoxBufferGeometry(130*2,5*2,80*2),new THREE.MeshPhongMaterial({color:8421504,flatShading:!0}));return o.position.z=120*2,o.castShadow=!0,o.receiveShadow=!0,t.add(o),t}l(j,"CVBoard");var Ie=new S(40,80,[{x:0,y:10,w:30,h:60}]),me=new S(40,80,[{x:10,y:10,w:30,h:60}]),Oe=new S(110,40,[{x:10,y:0,w:50,h:30},{x:70,y:0,w:30,h:30}]),Se=new S(110,40,[{x:10,y:10,w:50,h:30},{x:70,y:10,w:30,h:30}]),He=new S(30,30,[{x:15,y:0,w:10,h:30}]),ge=new S(25,30,[{x:0,y:15,w:10,h:10}]),Pe=new S(25,30,[{x:0,y:5,w:10,h:10}]);function S(t,r,o){let n=document.createElement("canvas");n.width=t,n.height=r;let h=n.getContext("2d");return h.fillStyle="#ffffff",h.fillRect(0,0,t,r),h.fillStyle="rgba(0,0,0,0.6)",o.forEach(i=>{h.fillRect(i.x,i.y,i.w,i.h)}),new THREE.CanvasTexture(n)}l(S,"Texture");var V=["grass","road","three","rock","occupied","","","","tourbuilding","board"],M=[[1,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,1,1,1,1,1,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,0,2],[1,0,0,0,0,1,0,9,0,0,2,0,2,2,2,0,2,0,2,2,0,0,0,2,2,2,0,2,0,2],[1,0,0,0,0,1,0,0,0,0,2,0,2,0,2,0,0,0,2,2,2,2,2,2,0,2,0,2,0,2],[1,0,0,0,0,1,0,0,0,0,2,1,2,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,2],[1,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,0,0,0,0,1,4,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,1,4,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,4,4,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,0,1,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];function q(){let t=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(3*b*2,2*s*2,40*2),new THREE.MeshPhongMaterial({color:10040319,flatShading:!0}));return r.position.z=20*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}l(q,"TourBuilding");function J(t){let r=new Array(M.length);for(let o=0;o<M.length;o++){r[o]=new Array(M[o].length);for(let n=0;n<M[o].length;n++){let h=new se(M[o][n],o,n);h.mesh.position.x=o*s*2-s*2,h.mesh.position.y=n*s*2,t.add(h.mesh),r[o][n]=h}}return r}l(J,"generateMap");function se(t,r,o){this.x_index=r,this.y_index=o,this.type=V[t],this.occupiedPosition=!1;let n=null;switch(this.type){case"grass":this.mesh=new B;break;case"road":this.mesh=new L;break;case"three":this.mesh=new B,n=new F,n.position.x=s*2-s*2,this.mesh.add(n),this.occupiedPosition=!0;break;case"rock":this.mesh=new B,n=new U,n.position.x=s*2-s*2,this.mesh.add(n),this.occupiedPosition=!0;break;case"occupied":this.mesh=new L,this.occupiedPosition=!0;break;case"tourbuilding":this.mesh=new L,n=new q,n.position.x=s*2,n.position.y=s*2/-2,this.mesh.add(n),this.occupiedPosition=!0;break;case"board":this.mesh=new L,n=new j,n.position.x=s*2-s*2,this.mesh.add(n),this.occupiedPosition=!0;break;default:this.mesh=new B;break}}l(se,"Tile");var a=Object.freeze({COW:{BASE:"rgb(255, 255, 255)",BROWN:"rgb(105, 59, 7)",PINK:"rgb(232, 106, 218)",BLACK:"rgb(0, 0, 0)"}}),N=Object.freeze({COW:{RIGHT:new W(70,70,[{x:0,y:20,w:20,h:40,color:a.COW.BROWN},{x:20,y:30,w:10,h:20,color:a.COW.BROWN},{x:30,y:0,w:10,h:10,color:a.COW.PINK}]),LEFT:new W(70,70,[{x:50,y:0,w:20,h:40,color:a.COW.BROWN},{x:40,y:0,w:10,h:30,color:a.COW.BROWN},{x:30,y:10,w:10,h:10,color:a.COW.BROWN},{x:50,y:60,w:20,h:10,color:a.COW.BROWN},{x:10,y:40,w:20,h:10,color:a.COW.BROWN},{x:30,y:0,w:10,h:10,color:a.COW.PINK}]),FRONT:new W(70,70,[{x:30,y:60,w:10,h:10,color:a.COW.BROWN},{x:0,y:40,w:30,h:30,color:a.COW.BROWN},{x:10,y:30,w:10,h:10,color:a.COW.BROWN},{x:10,y:40,w:10,h:10,color:a.COW.BLACK},{x:50,y:40,w:10,h:10,color:a.COW.BLACK},{x:0,y:30,w:10,h:10,color:a.COW.PINK},{x:60,y:30,w:10,h:10,color:a.COW.PINK},{x:20,y:20,w:30,h:20,color:a.COW.PINK}]),BACK:new W(70,70,[{x:0,y:0,w:10,h:20,color:a.COW.BROWN},{x:10,y:0,w:10,h:10,color:a.COW.BROWN},{x:30,y:50,w:10,h:10,color:a.COW.BLACK}]),TOP:new W(70,70,[{x:0,y:0,w:30,h:30,color:a.COW.BROWN},{x:30,y:0,w:10,h:10,color:a.COW.BROWN},{x:0,y:30,w:10,h:10,color:a.COW.BROWN},{x:10,y:10,w:10,h:10,color:a.COW.BLACK},{x:50,y:10,w:10,h:10,color:a.COW.BLACK},{x:0,y:60,w:20,h:10,color:a.COW.BROWN},{x:60,y:20,w:10,h:40,color:a.COW.BROWN},{x:50,y:30,w:10,h:10,color:a.COW.BROWN}])}});function Q(t){switch(t){case"cow":return ce();default:return he()}}l(Q,"Player");function ce(){let t=new THREE.Group,r=[new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:N.COW.RIGHT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:N.COW.LEFT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:N.COW.FRONT}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:N.COW.BACK}),new THREE.MeshBasicMaterial({side:THREE.DoubleSide,map:N.COW.TOP}),new THREE.MeshBasicMaterial({color:15733283,side:THREE.DoubleSide})],o=new THREE.Mesh(new THREE.BoxGeometry(E*2,E*2,E*2),r);o.position.z=8*2,o.castShadow=!0,o.receiveShadow=!0,t.add(o);let n=new THREE.Mesh(new THREE.BoxBufferGeometry(6*2,3*2,4*2),new THREE.MeshLambertMaterial({color:a.COW.PINK,flatShading:!0}));n.position.z=E/2*2,n.position.y=E/2*2,n.castShadow=!0,n.receiveShadow=!1,t.add(n);let h=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BLACK,flatShading:!0}));h.position.z=(E+1.5)*2,h.position.y=E/3.5*2,h.position.x=E/3.3*2,h.castShadow=!0,h.receiveShadow=!1,t.add(h);let i=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BLACK,flatShading:!0}));i.position.z=(E+1.5)*2,i.position.y=E/3.5*2,i.position.x=-(E/3.3)*2,i.castShadow=!0,i.receiveShadow=!1,t.add(i);let g=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BASE,flatShading:!0}));g.position.z=(E-2)*2,g.position.y=E/3.5*2,g.position.x=-(E/1.8)*2,g.castShadow=!0,g.receiveShadow=!1,t.add(g);let P=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,2*2),new THREE.MeshLambertMaterial({color:a.COW.BASE,flatShading:!0}));P.position.z=(E-2)*2,P.position.y=E/3.5*2,P.position.x=E/1.8*2,P.castShadow=!0,P.receiveShadow=!1,t.add(P);let A=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,2*2,4*2),new THREE.MeshLambertMaterial({color:a.COW.BLACK,flatShading:!0}));return A.position.z=E/3*2,A.position.y=-(E/1.8)*2,A.castShadow=!0,A.receiveShadow=!1,t.add(A),t}l(ce,"cowPlayer");function he(){let t=new THREE.Group,r=new THREE.Mesh(new THREE.BoxBufferGeometry(E*2,E*2,20*2),new THREE.MeshPhongMaterial({color:16777215,flatShading:!0}));r.position.z=10*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let o=new THREE.Mesh(new THREE.BoxBufferGeometry(2*2,4*2,2*2),new THREE.MeshLambertMaterial({color:15753626,flatShading:!0}));return o.position.z=21*2,o.castShadow=!0,o.receiveShadow=!1,t.add(o),t}l(he,"originalChickenPlayer");function W(t,r,o){let n=document.createElement("canvas");n.width=t,n.height=r;let h=n.getContext("2d");return o.forEach(i=>{h.fillStyle=i.color,h.fillRect(i.x,i.y,i.w,i.h)}),new THREE.CanvasTexture(n)}l(W,"CanvasTexture");var $=document.getElementById("counter"),de=document.getElementById("end"),Ee=M[0].length,we=M.length,O=new THREE.Scene;O.background=v;var T=new THREE.OrthographicCamera(globalThis.innerWidth/-2,globalThis.innerWidth/2,globalThis.innerHeight/2,globalThis.innerHeight/-2,.1,1e4);T.rotation.x=d.CAMERA.ROTATION.X;T.rotation.y=d.CAMERA.ROTATION.Y;T.rotation.z=d.CAMERA.ROTATION.Z;T.position.y=d.CAMERA.POSITION.Y;T.position.x=d.CAMERA.POSITION.X;T.position.z=500;var y,x,f,R,k,H,I,p,c=new Q("cow");O.add(c);var ue=new THREE.HemisphereLight(16777215,16777215,.6);O.add(ue);var w=new THREE.DirectionalLight(16777215,.6);w.position.set(d.DIR_LIGHT.POSITION.X,d.DIR_LIGHT.POSITION.Y,200);w.castShadow=!0;w.target=c;O.add(w);w.shadow.mapSize.width=2048;w.shadow.mapSize.height=2048;w.shadow.camera.left=d.DIR_LIGHT.SHADOW.CAMERA.LEFT;w.shadow.camera.right=d.DIR_LIGHT.SHADOW.CAMERA.RIGHT;w.shadow.camera.top=d.DIR_LIGHT.SHADOW.CAMERA.TOP;w.shadow.camera.bottom=d.DIR_LIGHT.SHADOW.CAMERA.BOTTON;var D=new THREE.DirectionalLight(0,.4);D.position.set(200,200,50);D.castShadow=!0;O.add(D);var ee=l(()=>{y=J(O),x=0,f=1,k=null,H=!1,I=[],p="forward",c.position.x=0,c.position.y=0,c.rotation.z=0,T.position.y=d.CAMERA.POSITION.Y,T.position.x=d.CAMERA.POSITION.X,w.position.x=d.DIR_LIGHT.POSITION.X,w.position.y=d.DIR_LIGHT.POSITION.Y},"initaliseValues");ee();var _=new THREE.WebGLRenderer({alpha:!0,antialias:!0});_.shadowMap.enabled=!0;_.shadowMap.type=THREE.PCFSoftShadowMap;_.setSize(globalThis.innerWidth,globalThis.innerHeight);document.body.appendChild(_.domElement);function m(t){if(I.length>=2)return;let r=I.reduce((o,n)=>{if(n==="forward")return{lane:o.lane+1,column:o.column};if(n==="backward")return{lane:o.lane-1,column:o.column};if(n==="left")return{lane:o.lane,column:o.column-1};if(n==="right")return{lane:o.lane,column:o.column+1}},{lane:x,column:f});if(t==="forward"){if(r.lane===Ee-1||y[f][r.lane+1].occupiedPosition===!0)return;R||(H=!0)}else if(t==="backward"){if(r.lane===0||y[f][r.lane-1].occupiedPosition===!0)return;R||(H=!0)}else if(t==="left"){if(r.column===0||y[f-1][r.lane].occupiedPosition===!0)return;R||(H=!0)}else if(t==="right"){if(r.column===we-1||y[f+1][r.lane].occupiedPosition===!0)return;R||(H=!0)}I.push(t)}l(m,"move");document.querySelector("#retry").addEventListener("click",()=>{y.forEach(t=>t.forEach(r=>O.remove(r))),ee(),de.style.visibility="hidden"});document.getElementById("forward").addEventListener("click",()=>m("forward"));document.getElementById("backward").addEventListener("click",()=>m("backward"));document.getElementById("left").addEventListener("click",()=>m("left"));document.getElementById("right").addEventListener("click",()=>m("right"));globalThis.addEventListener("keydown",t=>{t.keyCode=="38"?m("forward"):t.keyCode=="40"?m("backward"):t.keyCode=="37"?m("left"):t.keyCode=="39"&&m("right")});function te(t){requestAnimationFrame(te),k||(k=t);let r=t-k;if(k=t,H&&(R=t,H=!1),R){let o=t-R,n=Math.min(o/200,1)*s*2,h=Math.sin(Math.min(o/200,1)*Math.PI)*8*2;switch(I[0]){case"forward":{let i=x*s*2+n;switch(T.position.y=d.CAMERA.POSITION.Y+i,w.position.y=d.DIR_LIGHT.POSITION.Y+i,c.position.y=i,c.position.z=h,p){case"left":c.rotation.z=-(Math.min(o/200,1)-1)*Math.PI/2;break;case"right":c.rotation.z=(Math.min(o/200,1)-1)*Math.PI/2;break;case"backward":c.rotation.z=(Math.min(o/200,1)-1)*Math.PI;break;default:break}break}case"backward":{let i=x*s*2-n;switch(T.position.y=d.CAMERA.POSITION.Y+i,w.position.y=d.DIR_LIGHT.POSITION.Y+i,c.position.y=i,c.position.z=h,p){case"forward":c.rotation.z=-(Math.min(o/200,1)*Math.PI);break;case"left":c.rotation.z=Math.min(o/200,1)*Math.PI/2+Math.PI/2;break;case"right":c.rotation.z=-(Math.min(o/200,1)*Math.PI/2+Math.PI/2);break;default:break}break}case"left":{let i=(f*s+s/2)*2-C*2/2-n;switch(T.position.x=d.CAMERA.POSITION.X+i,w.position.x=d.DIR_LIGHT.POSITION.X+i,c.position.x=i,c.position.z=h,p){case"forward":c.rotation.z=Math.min(o/200,1)*Math.PI/2;break;case"backward":c.rotation.z=-(Math.min(o/200,1)*Math.PI/2-Math.PI);break;case"right":c.rotation.z=-(Math.min(o/200,1)*Math.PI+Math.PI/2);break;default:break}break}case"right":{let i=(f*s+s/2)*2-C*2/2+n;switch(T.position.x=d.CAMERA.POSITION.X+i,w.position.x=d.DIR_LIGHT.POSITION.X+i,c.position.x=i,c.position.z=h,p){case"forward":c.rotation.z=-(Math.min(o/200,1)*Math.PI/2);break;case"backward":c.rotation.z=Math.min(o/200,1)*Math.PI/2-Math.PI;break;case"left":c.rotation.z=Math.min(o/200,1)*Math.PI+Math.PI/2;break;default:break}break}}if(o>200){switch(I[0]){case"forward":{x++,$.innerHTML=x,p="forward";break}case"backward":{x--,$.innerHTML=x,p="backward";break}case"left":{f--,p="left";break}case"right":{f++,p="right";break}}I.shift(),R=I.length===0?null:t}}_.render(O,T)}l(te,"animate");requestAnimationFrame(te);
