import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content with Animations */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Vertical line with dot - Animated (gradient preserved) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-5 rounded-full bg-[#915eff]"
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> {/* Gradient preserved */}
        </motion.div>

        {/* Main text content with animations */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 z-10"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span
              className="text-[#915eff] inline-block"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Bikash
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop websites using <br className="sm:block hidden" /> 
            <motion.span
              animate={{ color: ["#ffffff", "#915eff", "#ffffff"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              the MERN stack
            </motion.span> & user interfaces.
          </motion.p>
        </motion.div>
      </div>

      {/* Computer Model with Animation (gradient background preserved if any) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute xs:bottom-[10%] bottom-[20%] w-full h-[50%]"
      >
        <ComputersCanvas />
      </motion.div>

      {/* Scroll Indicator with Enhanced Animation (gradient preserved) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ 
                y: [0, 24, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;