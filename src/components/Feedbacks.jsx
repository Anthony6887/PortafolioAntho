import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { certificates } from "../constants";

const CertificateCard = ({ index, name, link, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full md:w-[30%]'

  >
    <div className='relative w-full h-[230px] '>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
      </a>
    </div>
    <div className='mt-5'>
      <h3 className='text-white font-bold text-[24px] text-center'>{name}</h3>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-auto`}
      >
        <motion.div variants={textVariant()}>
          {/*           <p className={styles.sectionSubText}>What others say</p> */}
          <div className="grid grid-cols-3 w-[100%] row-auto">
            <div className="">
              <h2 className={styles.sectionHeadText}>CV</h2>
            </div>

            <div className="col-start-3 items-center flex">
              <a className="bg-red-600 w-full p-5 rounded-lg text-center"
                href="https://drive.google.com/file/d/17tKYTv5oSfKHWLTIlTblBH-CBp81gJH-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                Resume </a>
            </div>
          </div>

          <div className='mt-20 flex flex-wrap gap-10'>
            {certificates.map((certificate, index) => (
              <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
            ))}
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
