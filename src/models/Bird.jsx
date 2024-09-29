import { useRef, useEffect } from 'react'
import * as math from 'mathjs';

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations  } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //update the y position simulate the flight moving in a sin wave
    birdRef.current.position.y = math.sin(clock.elapsedTime) * 0.2 + 2;

    //check if the bird reached a certian endpont relative to the camera
    if(birdRef.current.position.x > camera.position.x + 10){
      //change direction to backward and rotate the bird 1800 deg on the y-axis
      birdRef.current.rotation.y = math.PI;
    }else if(birdRef.current.position.x < camera.position.x -10) {
      //change direction to forward and reset the birds rotation
      birdRef.current.rotation.y =0;
    }

    //update the x and z positions based on the direction
    if(birdRef.current.rotation.y === 0){
      //moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    }else{
      //moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })

  return (
    // to create and display 3D objects
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird
