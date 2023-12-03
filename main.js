import * as THREE from 'three';
//skjhfg//
function main() {

	const canvas = document.querySelector( '#c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

	const fov = 90;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 2;
    camera.position.x = -1

	const scene = new THREE.Scene();

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

	// const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } ); // greenish blue
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88 })

	const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 1.5
	scene.add( cube );

    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

	function render( time ) {

		time *= 0.001; // convert time to seconds

		cube.rotation.x = time;
		cube.rotation.y = time;
        cube.rotation.z = time;
        // console.log(cube.rotation.x)

		renderer.render( scene, camera );

		requestAnimationFrame( render );

	}

	requestAnimationFrame( render );

}

main();