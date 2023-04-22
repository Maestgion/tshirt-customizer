import React,{useRef} from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import state from '../../store'
import { useFrame } from '@react-three/fiber'


const CameraRig = ({children}) => {
  const snap = useSnapshot(state)
  const group = useRef();

  useFrame((state, delta)=>{

    const isBreakPont = window.innerWidth<=1260
    const isMobile = window.innerWidth<=600

    // initial position of the mode

    let targetPosition = [-0.4, 0, 2];

    if(snap.intro)
    {
      if(isBreakPont)
      {
        targetPosition = [-0.4, 0, 2];
      }else if(isMobile)
      {
        targetPosition = [0, 0.2, 2.5];

      }
    }else{
      if(isMobile){
        targetPosition = [0, 0, 2.5]
      }
      else {
        targetPosition = [0, 0, 2];
      }
    }


    // model camera postion

    easing.damp3(state.camera.position, targetPosition, 0.25, delta)


    // easing for smooth rotation
  
  easing.dampE(
    group.current.rotation,
    [state.pointer.y / 10, -state.pointer.x / 5, 0],
    0.25,
    delta
  )
  })

  

  return (

    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig