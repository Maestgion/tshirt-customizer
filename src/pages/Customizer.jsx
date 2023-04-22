import  {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import { AiPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import state from '../store'
import {download} from "../assets"
import { downloadCanvasToImage, reader  } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';


const Customizer = () => {
  const snap = useSnapshot(state)

  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg,setGeneratingImg ] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false
  });

  // displaying tab content depending on the staus of the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
        file = {file}
        setFile = {setFile}
        readFile = {readFile}
        />
      case "aipicker":
        return <AiPicker />
      default:
        return null;
    }
  }

  // decal check
  const handleDecals = (type, result)=>{
      const decalType = DecalTypes[type]

      state[decalType.stateProperty] = result;

      if(!activeFilterTab[decalType.filterTab])
      {
        handleActiveFilterTab(decalType.filterTab)
      }
    }

// updating the state based on the fileType

const handleActiveFilterTab=(tabName)=>{

  switch(tabName){
    case "logoShirt":
      state.isLogoTexture = !activeFilterTab[tabName]
      break;
    case "stylishShirt":
      state.isFullTexture = !activeFilterTab[tabName]
      break;
    default:
      state.isLogoTexture = true;
      state.isFullTexture = false;
      break;
  }



setActiveFilterTab((prevState) => {
  return {
    ...prevState,
    [tabName]: !prevState[tabName]
  }
})
}


  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }
    
  

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
                handleClick={()=>{setActiveEditorTab(tab.name)}}
                />
              ))}

              {generateTabContent()}
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
            isActiveTab={activeFilterTab[tab.name]}
            handleClick={() => handleActiveFilterTab(tab.name)}
            
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