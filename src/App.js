import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { useGLTF, OrbitControls } from 'drei'
import * as THREE from "three";
import { proxy, useSnapshot } from "valtio";

import "./styles.css";

function Box(props) {
  var { patternOne, patternTwo, patternThree } = props;
  const group = useRef()
  const { nodes, materials } = useGLTF('roomop.glb')
  
  const mesh = useRef();
  const [hover, setHover] = useState(false);

  const [texture, setTexture] = useState(
    useLoader(THREE.TextureLoader, "floor-1.jpg")
  );
  useEffect(() => {
    new THREE.TextureLoader().load(patternOne, (txtr) => {
      txtr.wrapS = txtr.wrapT = THREE.RepeatWrapping;
      txtr.offset.set( 0, 0 );
      txtr.repeat.set( 50, 50 );
      setTexture(txtr);
    });
  }, [patternOne]);

  const [texture2, setTexture2] = useState(
    useLoader(THREE.TextureLoader, "wall-1.jpg")
  );
  useEffect(() => {
    new THREE.TextureLoader().load(patternTwo, (txtr) => {
      txtr.wrapS = txtr.wrapT = THREE.RepeatWrapping;
      txtr.offset.set( 1, 1 );
      txtr.repeat.set( 50, 50 );
      setTexture2(txtr);
    });
  }, [patternTwo]);

  const [texture3, setTexture3] = useState(
    useLoader(THREE.TextureLoader, "wood-1.jpg")
  );

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.offset.set( 0, 0 );
  texture.repeat.set( 50, 50 );

  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.offset.set( 0, 0 );
  texture2.repeat.set( 5, 5 );

  texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
  texture3.offset.set( 0, 0 );
  texture3.repeat.set( 5, 5 );

  const photos = {
    "1_1": useLoader(THREE.TextureLoader, "pic/pic_1.jpeg"),
    "1_2": useLoader(THREE.TextureLoader, "pic/white.jpeg"),
    "2_1": useLoader(THREE.TextureLoader, "pic/pic_4.jpeg"),
    "2_2": useLoader(THREE.TextureLoader, "pic/white.jpeg"),
    "3_1": useLoader(THREE.TextureLoader, "pic/pic_3.jpeg"),
    "3_2": useLoader(THREE.TextureLoader, "pic/white.jpeg"),
    "4_1": useLoader(THREE.TextureLoader, "pic/pic_2.jpeg"),
    "4_2": useLoader(THREE.TextureLoader, "pic/white.jpeg")
  }

  useEffect(() => {
    new THREE.TextureLoader().load(patternThree, (txtr) => {
      txtr.wrapS = txtr.wrapT = THREE.RepeatWrapping;
      txtr.offset.set( 0, 0 );
      txtr.repeat.set( 5, 5 );
      setTexture3(txtr);
    });
  }, [patternThree]);

  return (

    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sofa_2_3.geometry}
        material={nodes.Sofa_2_3.material}
        position={[-6.34, 1.85, -47.34]}
        rotation={[Math.PI / 2, 0, -1.57]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.Sofa_2_2.geometry}
        material={nodes.Sofa_2_2.material}
        position={[-6.34, 1.85, -47.34]}
        rotation={[Math.PI / 2, 0, -1.57]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.sofa_2_1.geometry}
        material={nodes.sofa_2_1.material}
        position={[-6.34, 1.85, -47.34]}
        rotation={[Math.PI / 2, 0, -1.57]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.sofa_1_3.geometry}
        material={nodes.sofa_1_3.material}
        position={[8.73, 1.85, -48.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.sofa_1_2.geometry}
        material={nodes.sofa_1_2.material}
        position={[8.73, 1.85, -48.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.Sofa_1_1.geometry}
        material={nodes.Sofa_1_1.material}
        position={[8.73, 1.85, -48.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.W??rfel4.geometry}
        material={nodes.W??rfel4.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel3.geometry}
        material={nodes.W??rfel3.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel6.geometry}
        material={nodes.W??rfel6.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5.geometry}
        material={nodes.W??rfel5.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel4_1.geometry}
        material={nodes.W??rfel4_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel9.geometry}
        material={nodes.W??rfel9.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel11.geometry}
        material={nodes.W??rfel11.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel10.geometry}
        material={nodes.W??rfel10.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel9_1.geometry}
        material={nodes.W??rfel9_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel8.geometry}
        material={nodes.W??rfel8.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel7.geometry}
        material={nodes.W??rfel7.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel6_1.geometry}
        material={nodes.W??rfel6_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_1.geometry}
        material={nodes.W??rfel5_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.wall_2.geometry}
        material={nodes.wall_2.material}
        position={[-35.25, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.15, -0.12]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.W??rfel5_2.geometry}
        material={nodes.W??rfel5_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel4_3.geometry}
        material={nodes.W??rfel4_3.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.tt_1.geometry}
        material={nodes.tt_1.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.tt_2.geometry}
        material={nodes.tt_2.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.tt_3.geometry}
        material={nodes.tt_3.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.tt_4.geometry}
        material={nodes.tt_4.material}
        position={[3.95, -1.02, -46.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.W??rfel5_0.geometry}
        material={nodes.W??rfel5_0.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_1_1.geometry}
        material={nodes.W??rfel5_1_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_2_1.geometry}
        material={nodes.W??rfel5_2_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_3.geometry}
        material={nodes.W??rfel5_3.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_4.geometry}
        material={nodes.W??rfel5_4.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_5.geometry}
        material={nodes.W??rfel5_5.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_6.geometry}
        material={nodes.W??rfel5_6.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_7.geometry}
        material={nodes.W??rfel5_7.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_8.geometry}
        material={nodes.W??rfel5_8.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_9.geometry}
        material={nodes.W??rfel5_9.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_10.geometry}
        material={nodes.W??rfel5_10.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_11.geometry}
        material={nodes.W??rfel5_11.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_12.geometry}
        material={nodes.W??rfel5_12.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_13.geometry}
        material={nodes.W??rfel5_13.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_14.geometry}
        material={nodes.W??rfel5_14.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_15.geometry}
        material={nodes.W??rfel5_15.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_16.geometry}
        material={nodes.W??rfel5_16.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_17.geometry}
        material={nodes.W??rfel5_17.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_18.geometry}
        material={nodes.W??rfel5_18.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_19.geometry}
        material={nodes.W??rfel5_19.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_20.geometry}
        material={nodes.W??rfel5_20.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_21.geometry}
        material={nodes.W??rfel5_21.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_22.geometry}
        material={nodes.W??rfel5_22.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_23.geometry}
        material={nodes.W??rfel5_23.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_24.geometry}
        material={nodes.W??rfel5_24.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_25.geometry}
        material={nodes.W??rfel5_25.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_26.geometry}
        material={nodes.W??rfel5_26.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_0_1.geometry}
        material={nodes.W??rfel5_0_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_1_2.geometry}
        material={nodes.W??rfel5_1_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_2_2.geometry}
        material={nodes.W??rfel5_2_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_3_1.geometry}
        material={nodes.W??rfel5_3_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_4_1.geometry}
        material={nodes.W??rfel5_4_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_5_1.geometry}
        material={nodes.W??rfel5_5_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_6_1.geometry}
        material={nodes.W??rfel5_6_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_7_1.geometry}
        material={nodes.W??rfel5_7_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_8_1.geometry}
        material={nodes.W??rfel5_8_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_9_1.geometry}
        material={nodes.W??rfel5_9_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_10_1.geometry}
        material={nodes.W??rfel5_10_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_11_1.geometry}
        material={nodes.W??rfel5_11_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_12_1.geometry}
        material={nodes.W??rfel5_12_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_13_1.geometry}
        material={nodes.W??rfel5_13_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_14_1.geometry}
        material={nodes.W??rfel5_14_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_15_1.geometry}
        material={nodes.W??rfel5_15_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_16_1.geometry}
        material={nodes.W??rfel5_16_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_17_1.geometry}
        material={nodes.W??rfel5_17_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_18_1.geometry}
        material={nodes.W??rfel5_18_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_19_1.geometry}
        material={nodes.W??rfel5_19_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_20_1.geometry}
        material={nodes.W??rfel5_20_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_21_1.geometry}
        material={nodes.W??rfel5_21_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_22_1.geometry}
        material={nodes.W??rfel5_22_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_23_1.geometry}
        material={nodes.W??rfel5_23_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_24_1.geometry}
        material={nodes.W??rfel5_24_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_25_1.geometry}
        material={nodes.W??rfel5_25_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel5_26_1.geometry}
        material={nodes.W??rfel5_26_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel6_2.geometry}
        material={nodes.W??rfel6_2.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.W??rfel11_1.geometry}
        material={nodes.W??rfel11_1.material}
        position={[-15.37, 3.38, -17.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, -0.12]}
      />
      <mesh
        geometry={nodes.floor.geometry}
        material={nodes.floor.material}
        position={[-1.72, -10.82, -17.79]}
        scale={[51.4, 0.38, 51.4]}>
          <meshStandardMaterial attach="material" map={texture} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wall_1.geometry}
        material={nodes.wall_1.material}
        position={[-1.72, 3.63, -69.74]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[51.4, 0.61, 14.18]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wall_3.geometry}
        material={nodes.wall_3.material}
        position={[50.25, 3.37, -17.63]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[51.4, 0.61, 14.62]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wardrobe_2.geometry}
        material={nodes.wardrobe_2.material}
        position={[-0.02, -8.5, -66.83]}
        scale={[10.74, 2.03, 2.26]}>
        <meshStandardMaterial attach="material" map={texture3} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wall_4.geometry}
        material={nodes.wall_4.material}
        position={[-1.72, 3.52, 34.38]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[51.4, 0.61, 14.58]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wardrobe_1.geometry}
        material={nodes.wardrobe_1.material}
        position={[0.1, -0.2, -68.43]}
        scale={[-8.33, 8.44, 0.74]}>
        <meshStandardMaterial attach="material" map={texture3} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_2_2.geometry}
        material={nodes.Photo_2_2.material}
        position={[-7.58, 6.03, 33.71]}
        scale={[3.12, 3.88, 0.25]}>
        <meshStandardMaterial attach="material" map={photos["2_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_2_1.geometry}
        material={nodes.Photo_2_1.material}
        position={[-7.58, 6.03, 33.52]}
        scale={[2.71, 3.37, 0.22]}>
        <meshStandardMaterial attach="material" map={photos["2_1"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_1_2.geometry}
        material={nodes.Photo_1_2.material}
        position={[1.41, 2.66, 33.76]}
        scale={[4.83, 6.01, 0.39]}>
        <meshStandardMaterial attach="material" map={photos["1_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_1_1.geometry}
        material={nodes.Photo_1_1.material}
        position={[1.41, 2.66, 33.47]}
        scale={[4.19, 5.22, 0.34]}>
        <meshStandardMaterial attach="material" map={photos["1_1"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_3_2.geometry}
        material={nodes.Photo_3_2.material}
        position={[10.16, 6.26, 33.71]}
        scale={[3.08, 3.84, 0.25]}>
        <meshStandardMaterial attach="material" map={photos["3_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_3_1.geometry}
        material={nodes.Photo_3_1.material}
        position={[10.16, 6.26, 33.52]}
        scale={[2.68, 3.33, 0.22]}>
        <meshStandardMaterial attach="material" map={photos["3_1"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_4_2.geometry}
        material={nodes.Photo_4_2.material}
        position={[49.48, 8.69, -19.45]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.12, 3.88, 0.25]}>
        <meshStandardMaterial attach="material" map={photos["4_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_4_1.geometry}
        material={nodes.Photo_4_1.material}
        position={[49.29, 8.69, -19.45]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.71, 3.37, 0.22]}>
        <meshStandardMaterial attach="material" map={photos["4_1"]} transparent={true} />
      </mesh>
    </group>
    
    // <group ref={group} {...props} dispose={null}>
    //   <mesh
    //     geometry={nodes.floor.geometry}
    //     material={nodes.floor.material}
    //     position={[-0.17, -0.79, 0.52]}
    //     scale={[1.98, 0.02, -1.89]}
    //   >
    //   <meshStandardMaterial
    //     attach="material"
    //     map={texture}
    //     transparent={true} />
    //   </mesh>
    //   <mesh
    //     geometry={nodes.wall_1.geometry}
    //     material={nodes.wall_1.material}
    //     position={[-0.18, 0.08, -1.36]}
    //     scale={[-2.07, -0.88, -0.01]}
    //   >
    //   <meshStandardMaterial
    //     attach="material"
    //     map={texture2}
    //     transparent={true} />
    //   </mesh>
    //   <mesh
    //     geometry={nodes.wall_2.geometry}
    //     material={nodes.wall_2.material}
    //     position={[-2.14, 0.07, 0.53]}
    //     scale={[0.01, 0.87, -1.88]}
    //   >
    //   <meshStandardMaterial
    //     attach="material"
    //     map={texture2}
    //     transparent={true} />
    //   </mesh>
    //   <mesh
    //     geometry={nodes.wood.geometry}
    //     material={nodes.wood.material}
    //     position={[-2.11, 0.21, 0.61]}
    //     scale={[0.03, 0.54, 0.61]}
    //   >
    //   <meshStandardMaterial
    //     attach="material"
    //     map={texture3}
    //     transparent={true} />
    //   </mesh>
    // </group>

    // <mesh
    //   ref={mesh}
    //   position={[0, 0, 0]}
    //   scale={hover ? [1.2, 1, 1.2] : [1, 1, 1]}
    //   onPointerOver={(e) => setHover(true)}
    //   onPointerOut={(e) => setHover(false)}
    //   onClick={() => {
    //     new THREE.TextureLoader().load(
    //       "https://source.unsplash.com/512x512/?water",
    //       (txtr) => {
    //         setTexture(txtr);
    //       }
    //     );
    //   }}
    // >
    //   <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    //   <meshStandardMaterial
    //     attach="material"
    //     map={texture}
    //     transparent={true}
    //   />
    // </mesh>
  );
}

export default function App() {
  var [text, setText] = useState(null);
  var [text1, setText1] = useState(null);
  var [text2, setText2] = useState(null);

  var sectionStyle = {
    backgroundImage: "url('/pexels-josh-hild-2422461.jpg')"
  };

  return (
    <>
      <Canvas style={sectionStyle} pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 1.75] }}>
        <Suspense fallback={null}>
          <Box patternOne={text} patternTwo={text1} patternThree={text2} />
        </Suspense>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>

      <div className="sidebar">
        <div className="sidebar-item">
          <h4>Floor</h4>
          <div className="img-wrapper" onClick={() => { setText("floor-1.jpg"); }}> <img src="floor-1.jpg" /> </div>
          <div className="img-wrapper" onClick={() => { setText("floor-2.jpg"); }}> <img src="floor-2.jpg" /> </div>
          <div className="img-wrapper" onClick={() => { setText("floor-3.jpg"); }}> <img src="floor-3.jpg" /> </div>
        </div>

        <div className="sidebar-item">
          <h4>Walls</h4>
          <div className="img-wrapper" onClick={() => { setText1("wall-1.jpg"); }}> <img src="wall-1.jpg" /> </div>
          <div className="img-wrapper" onClick={() => { setText1("wall-2.jpg"); }}> <img src="wall-2.jpg" /> </div>
        </div>

        <div className="sidebar-item">
          <h4>Wardrobe</h4>
          <div className="img-wrapper" onClick={() => { setText2("wood-1.jpg"); }}> <img src="wood-1.jpg" /> </div>
          <div className="img-wrapper" onClick={() => { setText2("wood-2.jpg"); }}> <img src="wood-2.jpg" /> </div>
        </div>

      </div>
    </>
  );
}
