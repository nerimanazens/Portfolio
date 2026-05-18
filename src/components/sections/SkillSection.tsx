import DynamicHeader from "../section-components/DynamicHeader"
import { motion } from "motion/react"
import SkillCardFrontBack from "../section-components/SkillCardFrontBack"
import SkillCardTools from "../section-components/SkillCardTools"

export default function SkillSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-15 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <DynamicHeader header="<Skills />" />
            <SkillCardFrontBack />
            <SkillCardTools />
        </motion.div>
    )
}