import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
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
          <div className="flex">
            <div className="">
              <h2 className={styles.sectionHeadText}>CV</h2>
            </div>
            <div className="ml-[400px]">
              <a className="bg-red-600 p-5 rounded-lg flex justify-center items-center" href="https://drive.google.com/file/d/17tKYTv5oSfKHWLTIlTblBH-CBp81gJH-/view?usp=drive_link"> Resume </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
