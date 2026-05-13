import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { DiReact } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";


export default function SkillCardFrontBack() {
    return (
        <div className="w-300 mx-auto  grid grid-cols-2 grid-rows-[fit-content] gap-4 ">
            <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] ">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto  font-bold text-2xl">Frontend</div>
                <div className="grid grid-cols-4 grid-rows-[fit-content] gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        <IoLogoHtml5 size={80} color="#E34F26" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">HTML</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <DiCss3 size={80} color="#1572B6" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">CSS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <IoLogoJavascript size={80} color="#F7DF1E" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <SiTypescript size={80} color="#3178C6" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <DiReact size={80} color="#61DAFB" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">React</p>
                    </div>
                    <div className="flex flex-col items-center gap-2"   >
                        <TbBrandReactNative size={80} color="#61DAFB" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">React Native</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <RiNextjsFill size={80} color="#000000" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <RiTailwindCssFill size={80} color="#06B6D4" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">Tailwind CSS</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] ">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto  font-bold text-2xl">BackEnd</div>
                <div className="grid grid-cols-3 grid-rows-[fit-content] gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        <FaNodeJs size={80} color="#339933" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">Node.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <SiExpress size={80} color="#000000" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">Express.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <RiNextjsFill size={80} color="#000000" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">Next.js(API Routes)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <PiFileSql size={80} color="#4479A1" className="hover:scale-130 transition-transform duration-400" />
                        <p className="text-white font-bold">SQL/SQLite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}