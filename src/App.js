import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { useGLTF, OrbitControls } from 'drei'
import * as THREE from "three";
import { proxy, useSnapshot } from "valtio";

import "./styles.css";

function Box(props) {
  var { patternOne, patternTwo, patternThree } = props;
  const group = useRef()
  const { nodes, materials } = useGLTF('newroomcomp.glb')
  
  const mesh = useRef();
  const [hover, setHover] = useState(false);

  const [texture, setTexture] = useState(
    useLoader(THREE.TextureLoader, "floor-1.jpg")
  );
  useEffect(() => {
    new THREE.TextureLoader().load(patternOne, (txtr) => {
      txtr.wrapS = txtr.wrapT = THREE.RepeatWrapping;
      txtr.offset.set( 0, 0 );
      txtr.repeat.set( 5, 5 );
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
      txtr.repeat.set( 5, 5 );
      setTexture2(txtr);
    });
  }, [patternTwo]);

  const [texture3, setTexture3] = useState(
    useLoader(THREE.TextureLoader, "wood-1.jpg")
  );

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.offset.set( 0, 0 );
  texture.repeat.set( 5, 5 );

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
        position={[10.38, 3.76, -8.58]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.Sofa_2_2.geometry}
        material={nodes.Sofa_2_2.material}
        position={[10.38, 3.76, -8.58]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[10.38, 3.76, -8.58]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.sofa_1_3.geometry}
        material={nodes.sofa_1_3.material}
        position={[10.38, 3.76, -8.58]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.sofa_1_2.geometry}
        material={nodes.sofa_1_2.material}
        position={[10.38, 3.76, -8.58]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.Sofa_1_1.geometry}
        material={nodes.Sofa_1_1.material}
        position={[10.38, 3.76, -8.58]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.Würfel4.geometry}
        material={nodes.Würfel4.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel3.geometry}
        material={nodes.Würfel3.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel6.geometry}
        material={nodes.Würfel6.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5.geometry}
        material={nodes.Würfel5.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel4_1.geometry}
        material={nodes.Würfel4_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel9.geometry}
        material={nodes.Würfel9.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel11.geometry}
        material={nodes.Würfel11.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel10.geometry}
        material={nodes.Würfel10.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel9_1.geometry}
        material={nodes.Würfel9_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel8.geometry}
        material={nodes.Würfel8.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel7.geometry}
        material={nodes.Würfel7.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel6_1.geometry}
        material={nodes.Würfel6_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_1.geometry}
        material={nodes.Würfel5_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.wall_2.geometry}
        material={nodes.wall_2.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}>
        <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Würfel5_2.geometry}
        material={nodes.Würfel5_2.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel4_3.geometry}
        material={nodes.Würfel4_3.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.tt_1.geometry}
        material={nodes.tt_1.material}
        position={[8.08, -0.12, -6.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.tt_2.geometry}
        material={nodes.tt_2.material}
        position={[8.08, -0.12, -6.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.tt_3.geometry}
        material={nodes.tt_3.material}
        position={[8.08, -0.12, -6.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.tt_4.geometry}
        material={nodes.tt_4.material}
        position={[8.08, -0.12, -6.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.Würfel5_0.geometry}
        material={nodes.Würfel5_0.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_1_1.geometry}
        material={nodes.Würfel5_1_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_2_1.geometry}
        material={nodes.Würfel5_2_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_3.geometry}
        material={nodes.Würfel5_3.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_4.geometry}
        material={nodes.Würfel5_4.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_5.geometry}
        material={nodes.Würfel5_5.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_6.geometry}
        material={nodes.Würfel5_6.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_7.geometry}
        material={nodes.Würfel5_7.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_8.geometry}
        material={nodes.Würfel5_8.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_9.geometry}
        material={nodes.Würfel5_9.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_10.geometry}
        material={nodes.Würfel5_10.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_11.geometry}
        material={nodes.Würfel5_11.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_12.geometry}
        material={nodes.Würfel5_12.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_13.geometry}
        material={nodes.Würfel5_13.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_14.geometry}
        material={nodes.Würfel5_14.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_15.geometry}
        material={nodes.Würfel5_15.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_16.geometry}
        material={nodes.Würfel5_16.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_17.geometry}
        material={nodes.Würfel5_17.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_18.geometry}
        material={nodes.Würfel5_18.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_19.geometry}
        material={nodes.Würfel5_19.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_20.geometry}
        material={nodes.Würfel5_20.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_21.geometry}
        material={nodes.Würfel5_21.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_22.geometry}
        material={nodes.Würfel5_22.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_23.geometry}
        material={nodes.Würfel5_23.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_24.geometry}
        material={nodes.Würfel5_24.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_25.geometry}
        material={nodes.Würfel5_25.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_26.geometry}
        material={nodes.Würfel5_26.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_0_1.geometry}
        material={nodes.Würfel5_0_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_1_2.geometry}
        material={nodes.Würfel5_1_2.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_2_2.geometry}
        material={nodes.Würfel5_2_2.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_3_1.geometry}
        material={nodes.Würfel5_3_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_4_1.geometry}
        material={nodes.Würfel5_4_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_5_1.geometry}
        material={nodes.Würfel5_5_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_6_1.geometry}
        material={nodes.Würfel5_6_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_7_1.geometry}
        material={nodes.Würfel5_7_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_8_1.geometry}
        material={nodes.Würfel5_8_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_9_1.geometry}
        material={nodes.Würfel5_9_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_10_1.geometry}
        material={nodes.Würfel5_10_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_11_1.geometry}
        material={nodes.Würfel5_11_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_12_1.geometry}
        material={nodes.Würfel5_12_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_13_1.geometry}
        material={nodes.Würfel5_13_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_14_1.geometry}
        material={nodes.Würfel5_14_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_15_1.geometry}
        material={nodes.Würfel5_15_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_16_1.geometry}
        material={nodes.Würfel5_16_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_17_1.geometry}
        material={nodes.Würfel5_17_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_18_1.geometry}
        material={nodes.Würfel5_18_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_19_1.geometry}
        material={nodes.Würfel5_19_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_20_1.geometry}
        material={nodes.Würfel5_20_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_21_1.geometry}
        material={nodes.Würfel5_21_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_22_1.geometry}
        material={nodes.Würfel5_22_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_23_1.geometry}
        material={nodes.Würfel5_23_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_24_1.geometry}
        material={nodes.Würfel5_24_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_25_1.geometry}
        material={nodes.Würfel5_25_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel5_26_1.geometry}
        material={nodes.Würfel5_26_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel6_2.geometry}
        material={nodes.Würfel6_2.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.Würfel11_1.geometry}
        material={nodes.Würfel11_1.material}
        position={[-17.42, 1.54, 5.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.12]}
      />
      <mesh
        geometry={nodes.floor.geometry}
        material={nodes.floor.material}
        position={[1.02, -13.37, 5.34]}
        scale={[69.46, 0.52, 69.46]}>
          <meshStandardMaterial attach="material" map={texture} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wall_1.geometry}
        material={nodes.wall_1.material}
        position={[1.02, 1.92, -64.86]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[69.46, 0.83, 15.17]}>
          <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wall_3.geometry}
        material={nodes.wall_3.material}
        position={[71.25, 1.92, 5.55]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[69.46, 0.83, 15.17]}>
          <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wardrobe_2.geometry}
        material={nodes.wardrobe_2.material}
        position={[-0.17, -10.24, -60.93]}
        scale={[14.51, 2.75, 3.05]}>
        <meshStandardMaterial attach="material" map={texture3} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wall_4.geometry}
        material={nodes.wall_4.material}
        position={[1.02, 1.92, 75.84]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[69.46, 0.83, 15.17]}>
          <meshStandardMaterial attach="material" map={texture2} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.wardrobe_1.geometry}
        material={nodes.wardrobe_1.material}
        position={[-0.01, 0.97, -63.09]}
        scale={[-11.26, 11.41, 1]}>
        <meshStandardMaterial attach="material" map={texture3} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_2_2.geometry}
        material={nodes.Photo_2_2.material}
        position={[-12.96, 4.84, 74.94]}
        scale={[4.22, 5.25, 0.34]}>
        <meshStandardMaterial attach="material" map={photos["2_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_2_1.geometry}
        material={nodes.Photo_2_1.material}
        position={[-12.96, 4.84, 74.68]}
        scale={[3.66, 4.55, 0.3]}>
        <meshStandardMaterial attach="material" map={photos["2_1"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_1_2.geometry}
        material={nodes.Photo_1_2.material}
        position={[5.25, 4.84, 75.01]}
        scale={[6.53, 8.12, 0.53]}>
        <meshStandardMaterial attach="material" map={photos["1_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_1_1.geometry}
        material={nodes.Photo_1_1.material}
        position={[5.25, 4.84, 74.61]}
        scale={[5.67, 7.05, 0.46]}>
        <meshStandardMaterial attach="material" map={photos["1_1"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_3_2.geometry}
        material={nodes.Photo_3_2.material}
        position={[23.18, 4.84, 74.93]}
        scale={[4.17, 5.18, 0.34]}>
        <meshStandardMaterial attach="material" map={photos["3_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_3_1.geometry}
        material={nodes.Photo_3_1.material}
        position={[23.18, 4.84, 74.68]}
        scale={[3.62, 4.5, 0.29]}>
        <meshStandardMaterial attach="material" map={photos["3_1"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_4_2.geometry}
        material={nodes.Photo_4_2.material}
        position={[70.21, 4.84, 3.11]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.22, 5.25, 0.34]}>
        <meshStandardMaterial attach="material" map={photos["4_2"]} transparent={true} />
      </mesh>
      <mesh
        geometry={nodes.Photo_4_1.geometry}
        material={nodes.Photo_4_1.material}
        position={[69.95, 4.84, 3.11]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.66, 4.55, 0.3]}>
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

  return (
    <>
      <Canvas pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 1.75] }}>
        <Suspense fallback={null}>
          <Box patternOne={text} patternTwo={text1} patternThree={text2} />
        </Suspense>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />
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
