document.addEventListener("DOMContentLoaded",function()
{
  var table = [
				"HTML5", "", "", 1, 1,
				"CSS3", "", "", 1, 2,
				"Javascript", "", "", 2, 3,
        "Express","","",1,1,
        "Node","","",1,1,
				"ReactJS", "", "", 2, 2,
				"Unit Testing", "", "", 13, 2,
				"C#", "", "", 14, 2,
				"MongoDB", "", "", 15, 2,
				"Git", "", "", 16, 2,
				"Heroku", "", "", 17, 2,
				"Microsoft Azure", "", "", 18, 2,
				"jQuery", "", "", 1, 3,
				"MVC .NET", "", "", 2, 3,
				"Bootstrap", "", "", 13, 3,
				"Java", "", "", 14, 3,
			];
			var camera, scene, renderer;
			var controls;
			var objects = [];
			var targets = { table: [], sphere: [], helix: [], grid: [] };
      let started = false;
      $(window).on('scroll',function()
      {
        if($(this).scrollTop() > '150' && !started)
        {
          started = true;
          init();
          animate();
        }
      })
			function init() {
				camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3100;
				scene = new THREE.Scene();
				// table
				for ( var i = 0; i < table.length; i += 5 ) {
					var element = document.createElement( 'div' );
					element.className = 'element';
					element.style.backgroundColor = 'rgba(216,106,42,' + ( Math.random() * 0.5 + 0.25 ) + ')';
					var number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = (i/5) + 1;
					element.appendChild( number );
					var symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.textContent = table[ i ];
					element.appendChild( symbol );
					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
					element.appendChild( details );
					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );
					objects.push( object );
					//
				}
				// sphere
				var vector = new THREE.Vector3();
				var spherical = new THREE.Spherical();
				for ( var i = 0, l = objects.length; i < l; i ++ ) {
					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;
					var object = new THREE.Object3D();
					spherical.set( 1500, phi, theta );
					object.position.setFromSpherical( spherical );
					vector.copy( object.position ).multiplyScalar( 2 );
					object.lookAt( vector );
					targets.sphere.push( object );
				}
				//
				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );
				//
				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 0.5;
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );
				transform( targets.sphere, 2000 );

				window.addEventListener( 'resize', onWindowResize, false );
			}
			function transform( targets, duration ) {
				TWEEN.removeAll();
				for ( var i = 0; i < objects.length; i ++ ) {
					var object = objects[ i ];
					var target = targets[ i ];
					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
				}
				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				render();
			}
			function animate() {
				requestAnimationFrame( animate );
				TWEEN.update();
				controls.update();
			}
			function render() {
				renderer.render( scene, camera );
			}

})
