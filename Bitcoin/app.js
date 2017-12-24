document.addEventListener("DOMContentLoaded",function()
{
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var ambLight = new THREE.AmbientLight(0xffffff,1);
  scene.add(ambLight);

  var pointLightLeft = new THREE.PointLight(0x77aa88,1);
  pointLightLeft.position.set(-2,-1,10);
  scene.add(pointLightLeft);

  var pointLightRight = new THREE.PointLight(0xff8833,1);
  pointLightRight.position.set(2,-1,2);
  scene.add(pointLightRight);

  var whitePointLight = new THREE.PointLight(0xffffff,0.3);
  whitePointLight.position.set(0,2,1);
  scene.add(whitePointLight);

  var dirLight = new THREE.DirectionalLight(0xff8833,1);
  dirLight.position.z = 2;

  scene.add(dirLight);

  var texture = new THREE.TextureLoader().load('./bit.png');
  var geom = new THREE.CylinderGeometry(3,3,0.4,100);
  var material = new THREE.MeshStandardMaterial({
    color:0xffffff,
    map:texture,
    metalness:0.9,
    roughness:0.3,
  });
  var mesh = new THREE.Mesh(geom,material);

  scene.add(mesh);
  camera.position.set(0,0,7);

  mesh.rotation.x=2;
  mesh.rotation.y=1.5;
  function animate()
  {
    mesh.rotation.x+=0.01;
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
  }
  animate();
});
