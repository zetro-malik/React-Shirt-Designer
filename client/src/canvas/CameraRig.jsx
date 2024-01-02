import React from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

const CameraRig = ({childeren}) => {
  return <group>{childeren}</group>
}

export default CameraRig