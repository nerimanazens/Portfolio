import { motion } from "motion/react"
import DynamicHeader from "../section-components/DynamicHeader"

export default function AboutmeSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <DynamicHeader header="<About />" />
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true }}
            className="bg-[#151D29] p-4 sm:p-6 rounded-lg border-[#0F99A1] border w-full mx-auto drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                <div>
                    <p className="text-gray-300 text-lg sm:text-2xl lg:text-3xl font-bold leading-relaxed">
                        I’m a frontend developer focused on building clean, responsive, and user-friendly <span className="text-[#00FFFF]">web&mobile</span> interfaces. I enjoy turning ideas into real, working products using modern technologies like React and Tailwind CSS.
                    </p>
                    <p className="text-gray-300 text-lg sm:text-2xl lg:text-3xl font-bold leading-relaxed mt-4">
                        I pay attention to both design and functionality, aiming to create experiences that are not only visually appealing but also practical and efficient. I’m constantly learning, improving my skills, and exploring better ways to solve problems.
                    </p>
                    <p className="text-gray-300 text-lg sm:text-2xl lg:text-3xl font-bold leading-relaxed mt-4">
                        Currently, I’m working on personal projects to strengthen my experience and prepare for real-world challenges.
                    </p>
                </div>



            </motion.div>
        </section>
    )
}