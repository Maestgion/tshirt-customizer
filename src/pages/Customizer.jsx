import  {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import { AiPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import state from '../store'
import {download} from "../assets"
import { downloadCanvasToImage } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';


const Customizer = () => {
  const snap = useSnapshot(state)
  return (
   <AnimatePresence>
    {!snap.intro && (
      <>

        {/* Editor-tabs container */}

        <motion.div
        key="custom"
        className='absolute top-0 left-0 z-10'
        {...slideAnimation('left')}
        >
          <div className='min-h-screen flex items-center'>

            <div className='editortabs-container   tabs'>
              {EditorTabs.map((tab)=>(
                <Tab
                key={tab.name}
                tab = { tab }
                handleClick={()=>{}}
                />
              ))}
            </div>

          </div>
        </motion.div>
        
        {/* back-nav btn */}

        <motion.div
        className=' absolute top-5 right-5 z-10'
        {...fadeAnimation}
        >
          <CustomButton
          type="filled"
          title="Go Back"
          handleClick={()=>state.intro=true}
          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.div>

        {/* Filter-tabs container */}

        <motion.div
        className='filtertabs-container'
        {...slideAnimation('up')}
        >

         {
          FilterTabs.map((tab)=>(
            <Tab
            key={tab.name}
            tab={tab}
            isFilterTab
            isActiveTab=""
            handleClick={()=>{}}
            
            />
  
          ))
         }
        </motion.div>

 

      </>
    )}
   </AnimatePresence>
  )
}

export default Customizer