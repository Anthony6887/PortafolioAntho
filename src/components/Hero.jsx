import { motion } from "framer-motion";
import { styles } from "../styles";
import yoImage from "../assets/images/yo.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-start`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='mt-5 md:mt-0 md:ml-5'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anthony</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I fullstack developer<br className='sm:block hidden' />
            interfaces and web applications
          </p>
          <div className='flex mt-4 space-x-4'>
            <a href="https://github.com/Anthony6887" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-[#915EFF] text-[100px]" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-solis-3123191b1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-[#915EFF] text-[100px]" />
            </a>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hobbies</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Play guitar 🎸</p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Play videogames 🎮</p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Play Soccer ⚽</p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Cycling 🚴</p>
          </div>

        </div>
      </div>
      <div className='absolute right-10 top-[150px]'>
        <img
          src={yoImage}
          alt="Anthony"
          className='w-90 h-auto rounded-full'
        />
      </div>
    </section>
  );
};

export default Hero;
