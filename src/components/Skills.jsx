import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const skills = [
    {
        category: "Design Skill",
        items: [
            { name: "PHOTOSHOP", percentage: 50 },
            { name: "FIGMA", percentage: 90 },
            { name: "ADOBE XD", percentage: 75 },
            { name: "ADOBE ILLUSTRATOR", percentage: 60 },
            { name: "DESIGN", percentage: 50 },
        ],
    },
    {
        category: "Development Skill",
        items: [
            { name: "TYPESCRIPT", percentage: 80 },
            { name: "PYTHON", percentage: 70 },
            { name: "JAVA", percentage: 85 },
            { name: "JAVASCRIPT", percentage: 75 },
            { name: "ANGULAR", percentage: 90 },
        ],
    },
];

const Skills = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px] p-8">
            <div className="bg-tertiary rounded-2xl p-8">
                <motion.div variants={textVariant()}>
                    <h2 className={styles.sectionHeadText}>FEATURES</h2>
                </motion.div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillCategory, index) => (
                        <div key={index}>
                            <h3 className="text-white text-[24px] font-bold mb-4">{skillCategory.category}</h3>
                            {skillCategory.items.map((skill, idx) => (
                                <div key={idx} className="mt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-secondary text-[18px]">{skill.name}</p>
                                        <p className="text-secondary text-[18px]">{skill.percentage}%</p>
                                    </div>
                                    <div className="relative w-full bg-gray-800 rounded-full h-2.5">
                                        <div
                                            className="bg-[#915EFF] h-2.5 rounded-full relative"
                                            style={{ width: `${skill.percentage}%` }}
                                        >
                                            <div
                                                className="absolute bg-[#915EFF] rounded-full h-5 w-5 transform translate-x-2 -translate-y-1/3"
                                                style={{ right: 0 }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default SectionWrapper(Skills, "skill");
