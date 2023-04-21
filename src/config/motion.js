// normal transition object

export const transition = {type: "spring", duration: 0.8};

// sliding function returning the object 

export const slideAnimation = (direction)=>{
  return {
    intial:{
      x: direction==="left"?-100: direction === "right" ? 100 : 0,
      y: direction==="up" ? 100 : direction === "down" ? -100 : 0,
      opacity : 0,
      transition: {...transition, delay:0.5},
    },
    animate:{
      x:0,
      y:0,
      opacity: 1,
      transition: {...transition, delay: 0},

    },
    exit:{
      opacity: 0,
      transition: {...transition, delay: 0}
    }
  }
}

// fade object

export const fadeAnimation = {
  intial:{
    opacity: 0,
    transition: {...transition, delay: 0.5}
  },
  animate:{
    opacity: 1,
    transition: {...transition, delay: 0}
  },
  exit:{
    opacity: 0,
    transition: {...transition, delay: 0}
  },
}

// main heading: right side fade In

export const headTextAnimation = {
  initial : {
    x: 100,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity: 1
  },
 transition: {
  type: "spring",
  damping: 5,
  stiffness: 40,
  restDelta: 0.001,

 }
}

//  main content: bottom-up animation

export const headContentAnimation = {
  intial: {
    y: 100, 
    opacity: 0
  },
  animate:{
    y: 0, 
    opacity: 1
  },
  transition:{
    type: "spring",
    damping: 7, 
    stiffness: 30, 
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2
  }
}

// main container left fadeIn animation 

export const headContainerAnimation = {
  intial:{
    x: -100,
    opacity: 0,
    tansition: {...transition, delay: 0.5}
  },
  animate:{
    x:0, 
    opacity: 1,
    transition: {...transition, delay:0}
  },
  exit:{
    x: -100,
    opacity: 0,
    transition: {...transition, delay: 0}

  }
}