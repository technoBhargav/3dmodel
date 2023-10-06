import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Model 1
// export function Model(props) {
//   const { nodes, materials } = useGLTF("/scene.gltf");

//   // Load textures and set up materials
//   const textureLoader = new THREE.TextureLoader();
//   const texture1 = textureLoader.load("3420_huge.jpg");
//   const texture2 = textureLoader.load("778_huge.jpg");

//   // Create materials with textures
//   const customMaterial1 = new THREE.MeshStandardMaterial({ map: texture1 });
//   const customMaterial2 = new THREE.MeshStandardMaterial({ map: texture2 });

//   return (
//     <group {...props}>
//       <group
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={3.5}
//         position={[0, -2.5, -0.3]}
//       >
//         <primitive object={nodes._rootJoint} />
//         <skinnedMesh
//           geometry={nodes.Object_212.geometry}
//           material={customMaterial1}
//           skeleton={nodes.Object_212.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Object_214.geometry}
//           material={customMaterial2}
//           skeleton={nodes.Object_214.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Object_216.geometry}
//           material={materials["4_Object05_0.1_16_16"]}
//           skeleton={nodes.Object_216.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Object_218.geometry}
//           material={materials["4_Object04_0.1_16_16"]}
//           skeleton={nodes.Object_218.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Object_220.geometry}
//           material={materials["4_Object01_0.1_16_16"]}
//           skeleton={nodes.Object_220.skeleton}
//         />
//       </group>
//     </group>
//   );
// }

// Model 2
// export function Model(props) {
//   const { nodes, materials } = useGLTF("wool_jacket/scene.gltf");

//   // Load textures and set up materials
//   const textureLoader = new THREE.TextureLoader();
//   const texture1 = textureLoader.load("3420_huge.jpg");
//   const texture2 = textureLoader.load("778_huge.jpg");
//   const texture3 = textureLoader.load("186_big.jpg");

//   // Create materials with textures
//   const customMaterial1 = new THREE.MeshStandardMaterial({ map: texture1 });
//   const customMaterial2 = new THREE.MeshStandardMaterial({ map: texture2 });
//   const customMaterial3 = new THREE.MeshStandardMaterial({ map: texture3 });

//   return (
//     // your jsx code...
//     <group {...props} dispose={null}>
//       <group
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={1.5}
//         position={[0.1, -7.9, -0.3]}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <mesh
//             geometry={nodes.defaultMaterial.geometry}
//             material={customMaterial1}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_1.geometry}
//             material={customMaterial2}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_2.geometry}
//             material={materials.jacket_basic}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_3.geometry}
//             material={materials.jacket_basic}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_4.geometry}
//             material={customMaterial2}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_5.geometry}
//             material={materials.jacket_basic}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_6.geometry}
//             material={materials.jacket_basic}
//           />
//           <mesh
//             geometry={nodes.defaultMaterial_7.geometry}
//             material={materials.jacket_basic}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// Model 3
// export function Model(props) {
// const { nodes, materials } = useGLTF("man_in_suit/scene.gltf");

//   // Load textures and set up materials
//   const textureLoader = new THREE.TextureLoader();
//   const texture1 = textureLoader.load("186_big.jpg");
//     const texture2 = textureLoader.load("2251_huge.jpg");
//     const texture3 = textureLoader.load("2823_huge.jpg");
//     const texture4 = textureLoader.load("3167_huge.jpg");

//   // Create materials with textures
//   const customMaterial1 = new THREE.MeshStandardMaterial({ map: texture3 });
//   const customMaterial2 = new THREE.MeshStandardMaterial({ map: texture4 });
//   const customMaterial3 = new THREE.MeshStandardMaterial({ map: texture1 });

//   return (
//     // your jsx code...
//     <group {...props} dispose={null}>
//       <group
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.025}
//         position={[0.3, -2.5, -0.3]}
//       >
//         <mesh
//           geometry={nodes.man_in_suit_suit_0.geometry}
//           material={customMaterial2}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_shirt_0.geometry}
//           material={customMaterial3}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_tie_0.geometry}
//           material={customMaterial1}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_leather_0.geometry}
//           material={materials.leather}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_sole_0.geometry}
//           material={materials.sole}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_skin_0.geometry}
//           material={materials.skin}
//         />
//         <mesh
//           geometry={nodes["man_in_suit_Material_#128_0"].geometry}
//           material={materials.Material_128}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_circle_0.geometry}
//           material={materials.circle}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_belt_part_0.geometry}
//           material={materials.belt_part}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_button_0.geometry}
//           material={customMaterial3}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_lips_0.geometry}
//           material={materials.lips}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_hair_0.geometry}
//           material={materials.hair}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_eye_mat3_0.geometry}
//           material={materials.eye_mat3}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_eye_mat2_0.geometry}
//           material={materials.eye_mat2}
//         />
//         <mesh
//           geometry={nodes.man_in_suit_eye_mat1_0.geometry}
//           material={materials.eye_mat1}
//         />
//       </group>
//     </group>
//   );
// }
