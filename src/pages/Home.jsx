import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { useSnapshot } from 'valtio'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import state from '../store';

import { CustomButton } from '../components';


const Home = () => {
  const snap = useSnapshot(state);
  return (
    
        <AnimatePresence>
          {snap.intro && (
            
            <>

              {/* container */}

              <motion.section
              className='home'
              {...slideAnimation('left')}
              >

                {/* header */}

                <motion.header
                {...slideAnimation('down')}
                >
                  <img 
                  src="./threejs.png"
                  alt="three logo"
                  className='w-8 h-8 object-contain'
                  />
                </motion.header>

                {/* main-content div */}

                <motion.div
                className='home-content' 
                {...headContainerAnimation}
                >
                    <motion.div
                    {...headTextAnimation}
                    >
                      <h1 className='head-text'>
                      YOUR STYLE<br className="xl:block hidden" /> YOUR WAY.
                      </h1>
                    </motion.div>


                    <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Unleash your inner fashionista with our 3D customization tool! Create a one-of-a-kind shirt that's exclusively yours.
              </p>

              {/* custom button to make a transition from  intro to customizer page*/}

               <CustomButton
               type="filled"
               title="Customize It"
               handleClick={()=> state.intro=false}
               customStyles="w-fit px-4 py-2.5 font-bold text-sm"
               />

            </motion.div>
                    
                </motion.div>

              </motion.section>
            
            </>
          )}
        </AnimatePresence>
    
  )
}

export default Home