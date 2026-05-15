import {motion} from "motion/react"

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-transparent backdrop-blur-lg border border-white/10 shadow h-16 flex items-center justify-between  w-300 mx-auto px-6 py-2.5 sticky top-2 rounded-4xl z-50 md:w-[98%] lg:w-[95%] xl:w-[90%]"
        >
            <p className="font-bold text-white text-2xl">AZENS</p>
            <ul className="flex space-x-8 text-lg font-medium text-white bg-[#293545]/55 backdrop-blur-md px-4 py-2 rounded-full [10]">
                <li >Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <p>resume</p>
        </motion.nav>
    )
}