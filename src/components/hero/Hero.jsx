import './hero.scss'
import {motion} from "framer-motion"

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }

  }
}



const Hero = () => {
  return (
    <div className='hero' >
    <div className="wrapper">
     <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate" >
        <motion.h2 variants={textVariants}>Toe Toe Aung</motion.h2>
        <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants}>See the Latest Works</motion.button>
         <a href="/Resume.pdf" download="Resume"><motion.button variants={textVariants} className='cv'>Download CV</motion.button></a> 
        </motion.div>
      <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""/>
    </motion.div>
     <div className="imageContainer">
        <img src="./photo.png" alt=""/>
     </div>
     </div>
    </div>
  )
}

export default Hero
