import "./index.css";
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Model } from "./model";

function App() {
  const camera1 = new THREE.PerspectiveCamera(
    0,
    window.innerWidth / window.innerHeight,
    0.1,
    10
  );
  camera1.position.z = 1;

  return (
    <div className="App">
      <div className="wrapper">
        <Canvas style={{ height: "100vh" }}>
          <Suspense fallback={null}>
            {/* <directionalLight /> */}
            {/* <hemisphereLight /> */}
            {/* <spotLight
              intensity={0.6}
              angle={1}
              penumbra={0.25}
              position={[10, 20, 10]}
              castShadow
            /> */}
            {/* <directionalLight /> */}
            <hemisphereLight intensity={0.35}  />
            <Model />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              // target={[0, 100, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
