import "./index.css";
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export function Model({selectedFabricSuit,...props}) {
  const { nodes, materials } = useGLTF("man_in_suit/scene.gltf");

  // Load textures and set up materials
  const textureLoader = new THREE.TextureLoader();
  const tieTexture = textureLoader.load("fabric_img/tie.jpg");
  const shoeTexture = textureLoader.load("fabric_img/shoe.jpg");


  // Create materials with textures
  const customMaterial1 = new THREE.MeshStandardMaterial({
    map: selectedFabricSuit ? new THREE.TextureLoader().load(selectedFabricSuit) : new THREE.TextureLoader().load("fabric_img/894_huge.jpg"),
  });

  const tieMaterial = new THREE.MeshStandardMaterial({ map: tieTexture });
  const shoeMaterial = new THREE.MeshStandardMaterial({ map: shoeTexture });


  return (
    // your jsx code...
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.030}
        position={[-1, -2.5, -0.3]}
      >
        <mesh
          geometry={nodes.man_in_suit_suit_0.geometry}
          material={customMaterial1}
        />
        <mesh
          geometry={nodes.man_in_suit_shirt_0.geometry}
          material={materials.shirt}
        />
        <mesh
          geometry={nodes.man_in_suit_tie_0.geometry}
          material={tieMaterial}
        />
        <mesh
          geometry={nodes.man_in_suit_leather_0.geometry}
          material={shoeMaterial}
        />
        <mesh
          geometry={nodes.man_in_suit_sole_0.geometry}
          material={shoeMaterial}
        />
        <mesh
          geometry={nodes.man_in_suit_skin_0.geometry}
          material={materials.skin}
        />
        <mesh
          geometry={nodes["man_in_suit_Material_#128_0"].geometry}
          material={materials.Material_128}
        />
        <mesh
          geometry={nodes.man_in_suit_circle_0.geometry}
          material={materials.circle}
        />
        <mesh
          geometry={nodes.man_in_suit_belt_part_0.geometry}
          material={materials.belt_part}
        />
        <mesh
          geometry={nodes.man_in_suit_button_0.geometry}
          material={materials.button}
        />
        <mesh
          geometry={nodes.man_in_suit_lips_0.geometry}
          material={materials.lips}
        />
        <mesh
          geometry={nodes.man_in_suit_hair_0.geometry}
          material={materials.hair}
        />
        <mesh
          geometry={nodes.man_in_suit_eye_mat3_0.geometry}
          material={materials.eye_mat3}
        />
        <mesh
          geometry={nodes.man_in_suit_eye_mat2_0.geometry}
          material={materials.eye_mat2}
        />
        <mesh
          geometry={nodes.man_in_suit_eye_mat1_0.geometry}
          material={materials.eye_mat1}
        />
      </group>
    </group>
  );
}

function App() {
  const camera1 = new THREE.PerspectiveCamera(
    0,
    window.innerWidth / window.innerHeight,
    0.1,
    10
  );
  camera1.position.z = 1;

  const [selectedFabricSuit, setSelectedFabricSuit] = useState(null);


  return (
    <div className="App">
    <div className="wrapper">
      <Grid container spacing={2} style={{ margin: "10px 10px 10px 10px" }}>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Fabric
              </Typography>

              <Grid container spacing={2}>
                {/* wool blends */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/894_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/894_huge.jpg"
                      )
                    }
                  ></div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Wool Blends
                  </Typography>
                </Grid>
                {/* Pure Wool */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/141_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/141_huge.jpg"
                      )
                    }
                  ></div>
                   <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Pure Wool
                  </Typography>
                </Grid>
                {/* comfort strect */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/3328_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/3328_huge.jpg"
                      )
                    }
                  ></div>
                   <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Comfort strect
                  </Typography>
                </Grid>
                {/* anti -pilling */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/3425_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/3425_huge.jpg"
                      )
                    }
                  ></div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Anti-Pilling
                  </Typography>
                </Grid>
                {/* Tweed */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/1802_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/1802_huge.jpg"
                      )
                    }
                  ></div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Tweed
                  </Typography>
                </Grid>
                {/* Linen */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/3104_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/3104_huge.jpg"
                      )
                    }
                  ></div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Linen
                  </Typography>
                </Grid>
                {/* Cotton Linen */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/2256_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/2256_huge.jpg"
                      )
                    }
                  ></div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Cotton Linen
                  </Typography>
                </Grid>
                {/* mildly stretch */}
                <Grid item xs={3}>
                  <div
                    class="grid-item"
                    style={{
                      backgroundImage:
                        'url("fabric_img/3195_huge.jpg")',
                      height: "50px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      margin: "5px 5px 5px 0px",
                    }}
                    onClick={() =>
                      setSelectedFabricSuit(
                        "fabric_img/3195_huge.jpg"
                      )
                    }
                  ></div>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Mildly Stretch
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
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
              <hemisphereLight intensity={0.35} />
              <Model selectedFabricSuit={selectedFabricSuit} />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                // target={[0, 100, 0]}
              />
            </Suspense>
          </Canvas>
        </Grid>
      </Grid>
    </div>
  </div>
  );
}

export default App;
