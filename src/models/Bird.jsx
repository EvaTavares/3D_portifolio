import { useRef, useEffect } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Bird() {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const {actions} = useAnimations(animations, birdRef);

  useEffect(()=>{
    actions['Take 001'].play();
  },[])

  useFrame(({clock, camera})=>{
    // atualiza a posição vertical do movimento dopassaro usando o sine wave - sinal de ondas
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    //vê se o pássaro atingiu um determinado ponto final em relação à câmera
    if(birdRef.current.position.x > camera.position.x + 10){
      // muda a direção para voltar e a rotação de 180° no eixo Y
        birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      // muda a direção para frente e recomeça a rotação do pássaro
        birdRef.current.rotation.y = 0;
    }

    // atualiza as posições X e Z baseado na direção
    if(birdRef.current.rotation.y === 0 ){
      // movimento para frente
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
    } else {
      // movimento para trás
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;

    }
  })

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
}
