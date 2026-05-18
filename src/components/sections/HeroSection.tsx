import { Name } from "../section-components/Name";
import MyPicture from "../section-components/MyPicture";
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse lg:flex-row justify-between gap-10 min-h-[80vh] w-full max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-8 py-10"
        >
            <MyPicture />
            <Name />
        </motion.div>
    )
}