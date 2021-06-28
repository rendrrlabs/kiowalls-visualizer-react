import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useProxy } from "valtio"

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#000",
    patch: "#ffffff",
  },
})

function Shoe(props) {

  const ref = useRef()

  // Cursor showing current color
  const [hovered, set] = useState(null)
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
  }, [hovered])

  const { nodes, materials } = useGLTF('room-big.glb')
  const snap = useProxy(state);
  const texture = useLoader(TextureLoader, "wood-1.jpg");
  const texture1 = useLoader(TextureLoader, "wall-3.jpg");
  const texture2 = useLoader(TextureLoader, "floor-1.jpg");

  return (
    <group 
    {...props}
    ref={ref}
    dispose={null}
    onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
    onPointerOut={(e) => e.intersections.length === 0 && set(null)}
    onPointerMissed={() => (state.current = null)}
    onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={nodes.Cube_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={nodes.Cube001_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Cube002_1.geometry}
        material={nodes.Cube002_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_antidamage_extr_Cap_22.geometry}
        material={nodes.lamp_base_Boole2_antidamage_extr_Cap_22.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_antidamage_extr_Cap_19.geometry}
        material={nodes.lamp_base_Boole2_antidamage_extr_Cap_19.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_antidamage_extr.geometry}
        material={nodes.lamp_base_Boole2_antidamage_extr.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_Cylinder21.geometry}
        material={nodes.lamp_base_Boole2_Cylinder21.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_Vyta_en__Cap_23.geometry}
        material={nodes.lamp_base_Boole2_Vyta_en__Cap_23.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_Vyta_en__Cap_17.geometry}
        material={nodes.lamp_base_Boole2_Vyta_en__Cap_17.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Boole2_Vyta_en_.geometry}
        material={nodes.lamp_base_Boole2_Vyta_en_.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_stickright_stickright1.geometry}
        material={nodes.lamp_base_stickright_stickright1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Symmetry_1_mot_Extrude1_Cap_25.geometry}
        material={nodes.lamp_base_Symmetry_1_mot_Extrude1_Cap_25.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Symmetry_1_mot_Extrude1_Cap_15.geometry}
        material={nodes.lamp_base_Symmetry_1_mot_Extrude1_Cap_15.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Symmetry_1_mot_Extrude1.geometry}
        material={nodes.lamp_base_Symmetry_1_mot_Extrude1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Symmetry_1_mot_Tube1.geometry}
        material={nodes.lamp_base_Symmetry_1_mot_Tube1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Symmetry_1_mot_Tube_12.geometry}
        material={nodes.lamp_base_Symmetry_1_mot_Tube_12.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_Cylinder10.geometry}
        material={nodes.lamp_base_Cylinder10.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_pitchforkdown_Symetrie_Krychle_11_Krychle_1.geometry}
        material={nodes.lamp_base_pitchforkdown_Symetrie_Krychle_11_Krychle_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_pitchforkdown_Symmetry1_screw.geometry}
        material={nodes.lamp_base_pitchforkdown_Symmetry1_screw.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_pitchforkdown_Trubka.geometry}
        material={nodes.lamp_base_pitchforkdown_Trubka.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_base_pitchforkdown_Krychle.geometry}
        material={nodes.lamp_base_pitchforkdown_Krychle.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_longstickbase.geometry}
        material={nodes.lamp_leglow_longstickbase.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_Boole3_Extrude3.geometry}
        material={nodes.lamp_leglow_Boole3_Extrude3.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_Boole3_longstick_low.geometry}
        material={nodes.lamp_leglow_Boole3_longstick_low.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_Cube1.geometry}
        material={nodes.lamp_leglow_Cube1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_Tube3.geometry}
        material={nodes.lamp_leglow_Tube3.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_Cylinder_1.geometry}
        material={nodes.lamp_leglow_Cylinder_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_leglow_Cylinder_2.geometry}
        material={nodes.lamp_leglow_Cylinder_2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_tri.geometry}
        material={nodes.lamp_pichforkup_tri.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_fork_Cube_11_Cube_1.geometry}
        material={nodes.lamp_pichforkup_fork_Cube_11_Cube_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_Symmetry_Tube_13.geometry}
        material={nodes.lamp_pichforkup_Symmetry_Tube_13.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_stick_stickright3_stickright2.geometry}
        material={nodes.lamp_pichforkup_stick_stickright3_stickright2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2_Cap_210.geometry}
        material={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2_Cap_210.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2_Cap_1.geometry}
        material={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2_Cap_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2.geometry}
        material={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Extrude2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Tube2.geometry}
        material={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Tube2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Tube_1.geometry}
        material={nodes.lamp_pichforkup_stick_Symmetry_11_mot1_Tube_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_Tube_11.geometry}
        material={nodes.lamp_Tube_11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_longstickbase1.geometry}
        material={nodes.lamp_legup_longstickbase1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Boole1_Extrude.geometry}
        material={nodes.lamp_legup_Boole1_Extrude.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Boole1_longstick_low1.geometry}
        material={nodes.lamp_legup_Boole1_longstick_low1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Cylinder24.geometry}
        material={nodes.lamp_legup_Cylinder24.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Cylinder_3.geometry}
        material={nodes.lamp_legup_Cylinder_3.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Cube4.geometry}
        material={nodes.lamp_legup_Cube4.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Tube.geometry}
        material={nodes.lamp_legup_Tube.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_clip_Rounding_21_Cap_26.geometry}
        material={nodes.lamp_legup_clip_Rounding_21_Cap_26.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_clip_Rounding_21.geometry}
        material={nodes.lamp_legup_clip_Rounding_21.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_clip_Rounding_1_Cap_14.geometry}
        material={nodes.lamp_legup_clip_Rounding_1_Cap_14.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_clip_Rounding_1.geometry}
        material={nodes.lamp_legup_clip_Rounding_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_clip.geometry}
        material={nodes.lamp_legup_clip.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Extrude_1_Rounding_2_Cap_27.geometry}
        material={nodes.lamp_legup_Extrude_1_Rounding_2_Cap_27.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Extrude_1_Rounding_2.geometry}
        material={nodes.lamp_legup_Extrude_1_Rounding_2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Extrude_1_Rounding_11_Cap_12.geometry}
        material={nodes.lamp_legup_Extrude_1_Rounding_11_Cap_12.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Extrude_1_Rounding_11.geometry}
        material={nodes.lamp_legup_Extrude_1_Rounding_11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Extrude_1.geometry}
        material={nodes.lamp_legup_Extrude_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_Cylinder9.geometry}
        material={nodes.lamp_legup_mainswitch_Cylinder9.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_clip1_Cylinder17.geometry}
        material={nodes.lamp_legup_mainswitch_clip1_Cylinder17.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_clip1_Extrude_21.geometry}
        material={nodes.lamp_legup_mainswitch_clip1_Extrude_21.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_clip1_Extrude_32.geometry}
        material={nodes.lamp_legup_mainswitch_clip1_Extrude_32.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_Boole4_Extrude_2.geometry}
        material={nodes.lamp_legup_mainswitch_Boole4_Extrude_2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_Boole4_switch_Extrude_31_Cap_11.geometry}
        material={nodes.lamp_legup_mainswitch_Boole4_switch_Extrude_31_Cap_11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_Boole4_switch_Extrude_31.geometry}
        material={nodes.lamp_legup_mainswitch_Boole4_switch_Extrude_31.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_mainswitch_Boole4_switch_mainspace.geometry}
        material={nodes.lamp_legup_mainswitch_Boole4_switch_mainspace.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Cylinder_11.geometry}
        material={nodes.lamp_legup_Cylinder_11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_211.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_211.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_13.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_13.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_027.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cloner24_Capsule_027.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cube7.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cube7.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cylinder14.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_54_Cylinder14.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_24.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_24.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_17.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_17.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_029.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cloner23_Capsule_029.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cube8.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cube8.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cylinder4.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_42_Cylinder4.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_21.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_21.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_110.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_110.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_025.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cloner22_Capsule_025.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cube9.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cube9.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cylinder32.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_31_Cylinder32.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_23.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_23.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_112.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_112.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_028.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cloner21_Capsule_028.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cube11.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cube11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cylinder25.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_22_Cylinder25.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_26.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_26.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_115.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_115.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_022.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cloner19_Capsule_022.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cube12.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cube12.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cylinder27.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_11_Cylinder27.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_28.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_28.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_119.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_119.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_019.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cloner18_Capsule_019.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cube13.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cube13.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cylinder28.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_4_bulb_03_Cylinder28.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_212.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_212.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_122.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_122.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_017.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cloner17_Capsule_017.material}
        position={[0, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cube14.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cube14.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cylinder34.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_51_Cylinder34.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_216.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_216.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_120.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_120.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_016.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cloner16_Capsule_016.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cube15.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cube15.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cylinder30.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_43_Cylinder30.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_217.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_217.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_118.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_118.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_015.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cloner15_Capsule_015.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cube16.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cube16.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cylinder.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_3_Cylinder.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_221.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_221.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_114.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_114.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_013.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cloner14_Capsule_013.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cube17.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cube17.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cylinder2.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_2_Cylinder2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_222.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_222.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_113.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_113.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_012.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cloner13_Capsule_012.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cube19.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cube19.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cylinder5.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_13_Cylinder5.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_226.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_226.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_19.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_19.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_09.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cloner11_Capsule_09.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cube20.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cube20.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cylinder7.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_3_bulb_0_Cylinder7.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_229.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_229.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_18.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_18.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_07.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cloner10_Capsule_07.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cube21.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cube21.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cylinder11.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_53_Cylinder11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_227.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_227.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_15.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_15.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_06.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cloner9_Capsule_06.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cube22.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cube22.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cylinder13.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_41_Cylinder13.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_223.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_223.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_14.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_14.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_05.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cloner8_Capsule_05.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cube23.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cube23.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cylinder16.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_34_Cylinder16.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_219.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_219.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_12.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_12.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_04.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cloner7_Capsule_04.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cube24.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cube24.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cylinder19.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_21_Cylinder19.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_218.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_218.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_11.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_11.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_01.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cloner6_Capsule_01.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cube26.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cube26.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cylinder22.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_14_Cylinder22.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_215.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_215.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_1.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_0.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cloner3_Capsule_0.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cube27.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cube27.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cylinder15.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_2_bulb_01_Cylinder15.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_228.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_228.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_111.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_111.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_011.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cloner2_Capsule_011.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cube28.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cube28.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cylinder33.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_52_Cylinder33.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_210.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_210.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_116.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_116.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_026.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cloner1_Capsule_026.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cube29.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cube29.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cylinder6.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_4_Cylinder6.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_29.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_29.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_127.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_127.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_018.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cloner_Capsule_018.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cube30.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cube30.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cylinder8.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_32_Cylinder8.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_220.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_220.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_124.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_124.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_02.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cloner4_Capsule_02.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cube31.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cube31.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cylinder23.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_24_Cylinder23.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_22.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_22.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_117.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_117.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_03.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cloner5_Capsule_03.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cube25.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cube25.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cylinder18.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_1_Cylinder18.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_224.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_224.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_16.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_16.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_08.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cloner12_Capsule_08.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cube18.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cube18.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cylinder1.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_1_bulb_04_Cylinder1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_213.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_213.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_121.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_121.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_021.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cloner20_Capsule_021.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cube10.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cube10.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cylinder26.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_5_Cylinder26.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_25.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_25.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_123.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_123.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_024.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cloner25_Capsule_024.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cube6.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cube6.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cylinder20.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_44_Cylinder20.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_2.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_126.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_126.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_023.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cloner26_Capsule_023.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cube5.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cube5.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cylinder31.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_33_Cylinder31.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_27.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_27.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_129.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_129.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_020.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cloner27_Capsule_020.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cube3.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cube3.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cylinder29.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_23_Cylinder29.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_214.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_214.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_128.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_128.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_014.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cloner28_Capsule_014.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cube.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cube.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cylinder3.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_12_Cylinder3.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_225.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_225.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_125.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_125.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_010.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cloner29_Capsule_010.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cube2.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cube2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cylinder12.geometry}
        material={nodes.lamp_legup_bulb_Cloner_1_0_bulb_02_Cylinder12.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_glass1_Cap_2.geometry}
        material={nodes.lamp_legup_glass1_Cap_2.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_glass1_Cap_16.geometry}
        material={nodes.lamp_legup_glass1_Cap_16.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_glass1.geometry}
        material={nodes.lamp_legup_glass1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Boole_glass.geometry}
        material={nodes.lamp_legup_Boole_glass.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.lamp_legup_Boole_Extrude_3.geometry}
        material={nodes.lamp_legup_Boole_Extrude_3.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Würfel4.geometry}
        material={nodes.Würfel4.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel3.geometry}
        material={nodes.Würfel3.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel6.geometry}
        material={nodes.Würfel6.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5.geometry}
        material={nodes.Würfel5.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel4_1.geometry}
        material={nodes.Würfel4_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel9.geometry}
        material={nodes.Würfel9.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel11.geometry}
        material={nodes.Würfel11.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel10.geometry}
        material={nodes.Würfel10.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel9_1.geometry}
        material={nodes.Würfel9_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel8.geometry}
        material={nodes.Würfel8.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel7.geometry}
        material={nodes.Würfel7.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel6_1.geometry}
        material={nodes.Würfel6_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_1.geometry}
        material={nodes.Würfel5_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel4_2.geometry}
        material={nodes.Würfel4_2.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Wall_4.geometry}
        material={nodes.Wall_4.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      ><meshStandardMaterial map={texture1} attach="material" />
      </mesh>
      <mesh
        geometry={nodes.Würfel5_2.geometry}
        material={nodes.Würfel5_2.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel4_3.geometry}
        material={nodes.Würfel4_3.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.ножки.geometry}
        material={nodes.ножки.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.стекло.geometry}
        material={nodes.стекло.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.держатель_стекла1.geometry}
        material={nodes.держатель_стекла1.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.верх_правый.geometry}
        material={nodes.верх_правый.material}
        position={[9.81, 3.14, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.верх1левый.geometry}
        material={nodes.верх1левый.material}
        position={[9.81, 5.22, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.низ_стола.geometry}
        material={nodes.низ_стола.material}
        position={[9.81, 5.22, -5.92]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        geometry={nodes.Würfel5_0.geometry}
        material={nodes.Würfel5_0.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_1_1.geometry}
        material={nodes.Würfel5_1_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_2_1.geometry}
        material={nodes.Würfel5_2_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_3.geometry}
        material={nodes.Würfel5_3.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_4.geometry}
        material={nodes.Würfel5_4.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_5.geometry}
        material={nodes.Würfel5_5.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_6.geometry}
        material={nodes.Würfel5_6.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_7.geometry}
        material={nodes.Würfel5_7.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_8.geometry}
        material={nodes.Würfel5_8.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_9.geometry}
        material={nodes.Würfel5_9.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_10.geometry}
        material={nodes.Würfel5_10.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_11.geometry}
        material={nodes.Würfel5_11.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_12.geometry}
        material={nodes.Würfel5_12.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_13.geometry}
        material={nodes.Würfel5_13.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_14.geometry}
        material={nodes.Würfel5_14.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_15.geometry}
        material={nodes.Würfel5_15.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_16.geometry}
        material={nodes.Würfel5_16.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_17.geometry}
        material={nodes.Würfel5_17.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_18.geometry}
        material={nodes.Würfel5_18.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_19.geometry}
        material={nodes.Würfel5_19.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_20.geometry}
        material={nodes.Würfel5_20.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_21.geometry}
        material={nodes.Würfel5_21.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_22.geometry}
        material={nodes.Würfel5_22.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_23.geometry}
        material={nodes.Würfel5_23.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_24.geometry}
        material={nodes.Würfel5_24.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_25.geometry}
        material={nodes.Würfel5_25.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_26.geometry}
        material={nodes.Würfel5_26.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_0_1.geometry}
        material={nodes.Würfel5_0_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_1_2.geometry}
        material={nodes.Würfel5_1_2.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_2_2.geometry}
        material={nodes.Würfel5_2_2.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_3_1.geometry}
        material={nodes.Würfel5_3_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_4_1.geometry}
        material={nodes.Würfel5_4_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_5_1.geometry}
        material={nodes.Würfel5_5_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_6_1.geometry}
        material={nodes.Würfel5_6_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_7_1.geometry}
        material={nodes.Würfel5_7_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_8_1.geometry}
        material={nodes.Würfel5_8_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_9_1.geometry}
        material={nodes.Würfel5_9_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_10_1.geometry}
        material={nodes.Würfel5_10_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_11_1.geometry}
        material={nodes.Würfel5_11_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_12_1.geometry}
        material={nodes.Würfel5_12_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_13_1.geometry}
        material={nodes.Würfel5_13_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_14_1.geometry}
        material={nodes.Würfel5_14_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_15_1.geometry}
        material={nodes.Würfel5_15_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_16_1.geometry}
        material={nodes.Würfel5_16_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_17_1.geometry}
        material={nodes.Würfel5_17_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_18_1.geometry}
        material={nodes.Würfel5_18_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_19_1.geometry}
        material={nodes.Würfel5_19_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_20_1.geometry}
        material={nodes.Würfel5_20_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_21_1.geometry}
        material={nodes.Würfel5_21_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_22_1.geometry}
        material={nodes.Würfel5_22_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_23_1.geometry}
        material={nodes.Würfel5_23_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_24_1.geometry}
        material={nodes.Würfel5_24_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_25_1.geometry}
        material={nodes.Würfel5_25_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel5_26_1.geometry}
        material={nodes.Würfel5_26_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel6_2.geometry}
        material={nodes.Würfel6_2.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.Würfel11_1.geometry}
        material={nodes.Würfel11_1.material}
        position={[-17.97, -0.13, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.09, 0.09, 0.09]}
      />
      <mesh
        geometry={nodes.TV_Stand_bottom.geometry}
        material={nodes.TV_Stand_bottom.material}
        position={[0.46, -6.98, -36.39]}
        scale={[-13.57, 2.75, 3.05]}
      >
        <meshStandardMaterial map={texture} attach="material" />
        </mesh>
      <mesh
        geometry={nodes.TV_Stand_top.geometry}
        material={nodes.TV_Stand_top.material}
        position={[0.62, 2.55, -38.56]}
      ><meshStandardMaterial map={texture} attach="material" />
      </mesh>
      <mesh
        geometry={nodes.Wall_1.geometry}
        material={nodes.Wall_1.material}
        position={[0.43, -0.13, -39.76]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.24, 10.86, 40.55]}
      />
      <mesh
        geometry={nodes.Wall_3.geometry}
        material={nodes.Wall_3.material}
        position={[0.43, -0.13, 41.77]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.42, 10.86, 40.55]}
        ><meshStandardMaterial map={texture1} attach="material" />
        </mesh>
      <mesh
        geometry={nodes.Wall_2.geometry}
        material={nodes.Wall_2.material}
        position={[40.35, -0.13, 0.86]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.42, 10.86, 40.55]}
        ><meshStandardMaterial map={texture1} attach="material" />
        </mesh>
      <mesh
        geometry={nodes.Floor_1.geometry}
        material={nodes.Floor_1.material}
        position={[-0.17, -10.34, 0.86]}
        rotation={[Math.PI, 0, -Math.PI / 2]}
        scale={[0.42, -41.53, 40.55]}
        ><meshStandardMaterial map={texture2} attach="material" />
        </mesh>
      <mesh
        geometry={nodes.Roof_2.geometry}
        material={nodes.Roof_2.material}
        position={[-0.17, 17.34, 0.86]}
        rotation={[Math.PI, 0, -Math.PI / 2]}
        scale={[0.8, -28.56, 29.88]}
      />
      <mesh
        geometry={nodes.Roof_2001.geometry}
        material={nodes.Roof_2001.material}
        position={[-0.17, 18.46, 0.86]}
        rotation={[Math.PI, 0, -Math.PI / 2]}
        scale={[0.8, -41.2, 41.16]}
      />
      <mesh
        geometry={nodes.TV_Stand_top_back.geometry}
        material={nodes.TV_Stand_top_back.material}
        position={[0.62, 2.55, -38.56]}
      ><meshStandardMaterial map={texture} attach="material" />
      </mesh>
    </group>
  )
}

function Picker() {
  const snap = useProxy(state)
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Shoe />
          <Environment files="royal_esplanade_1k.hdr" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      <Picker />
    </>
  )
}
