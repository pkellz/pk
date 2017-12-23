document.addEventListener("DOMContentLoaded",function()
{
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var ambLight = new THREE.AmbientLight(0xffffff,1);
  scene.add(ambLight);

  var pointLightLeft = new THREE.PointLight(0xff4422,1);
  pointLightLeft.position.set(-2,-1,1);
  scene.add(pointLightLeft);

  var pointLightRight = new THREE.PointLight(0x44ff88,1);
  pointLightRight.position.set(2,1,1);
  scene.add(pointLightRight);

  var pointLightTop = new THREE.PointLight(0xdd3311,1);
  pointLightTop.position.set(0,1,1);
  scene.add(pointLightTop);

  var geometry = new THREE.BoxGeometry(1,1,1);
  var geometry2 = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshStandardMaterial({
    color:0xffffff,
    map:new THREE.TextureLoader().load('./mario.jpg'),
    metalness:0.9,
    roughness:0.4
  });
  var mesh = new THREE.Mesh(geometry,material);

  scene.add(mesh);
  camera.position.z = 2;

  function animate()
  {
    mesh.rotation.x+=0.01;
    mesh.rotation.y+=0.01;
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
  }
  animate();
  window.addEventListener('resize',resize);
  function resize()
  {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth/window.innerHeight);
  }
});
