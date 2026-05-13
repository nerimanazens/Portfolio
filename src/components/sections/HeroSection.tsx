import { Name } from "../section-components/Name";
import MyPicture from "../section-components/MyPicture";
import { motion } from "motion/react"

export default function HeroSection() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between h-[80vh] px-20 w-300 mx-auto items-center"
        >
            <MyPicture />
            <Name />
        </motion.div>
    )
}