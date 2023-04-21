import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { useSnapshot } from 'valtio'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';


const Home = () => {
  const snap = useSnapshot(state);
  return (
    <>
        <AnimatePresence>
          {snap.intro && (
            <></>
          )}
        </AnimatePresence>
    </>
  )
}

export default Home