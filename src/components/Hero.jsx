import { styles } from '../styles';

import { motion } from 'framer-motion';
// import { ComputerCanvas } from '../canvas';
 
const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'> 
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#D97000]'/>
                    <div className='w-1 sm:h-80 h-40 orange-gradient'/>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#D97000]'>Fábio</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a cybersecurity student</p>
        {/* <img
                         src="src/assets/WIP.JPEG" 
                         alt="WIP"
                         className="mt-4 w-full max-w-md object-contain" 
                    />
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>Work in Progress</p> */}
                </div>
            </div>
       {/* FIXME: Uncoment Stuff from components/index.js, canva/computers.js, imports and exports /> */}
       {/* <ComputerCanvas /> */}

        <div className='absolute xs:bottom-10 borrom-32 w-full flex justify-center items-center'>
            <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.dev 
                    animate={{
                        y: [0, 24, 0]
                    }}
                    transition={{
                        duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
            </div>
            </a>
        </div>
        </section>
    )
}

export default Hero;
