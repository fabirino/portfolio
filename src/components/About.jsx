import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full orange-yellow-gradient p-[1px] rounded-[20px]"
        >
        <div
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={title}
        className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
        </motion.div>
    )
}


const About = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondaty text-[17px] mas-w-3xl leading-[30px]' 
        >
            This website was created to test how Cloudflare Tunnels work. In some future update, it might have some relevant information :).
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />  
            ))}         
        </div>
        </>

    )
}

export default SectionWrapper(About, "about");
