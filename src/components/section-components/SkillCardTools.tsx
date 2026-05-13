import { BiLogoVisualStudio } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { VscCopilot } from "react-icons/vsc";

export default function SkillCardTools() {
    return (
        <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] w-300 mx-auto mt-8">
            <div className="bg-white py-2 px-8 rounded-2xl w-fit mx-auto  font-bold text-2xl">Tools</div>
            <div className="flex flex-wrap justify-center gap-12 mt-4">
                <BiLogoVisualStudio size={80} color="#3178C6" className="hover:scale-130 transition-transform duration-400 mt-8" title="Visual Studio Cod"  />
                <SiVite size={80} color="#F7DF1E" className="hover:scale-130 transition-transform duration-400 mt-8" title="Vite" />
                <FaGitAlt size={80} color="#F05032" className="hover:scale-130 transition-transform duration-400 mt-8" title="Git" />
                <FaGithub size={80} color="#181717" className="hover:scale-130 transition-transform duration-400 mt-8" title="GitHub" />
                <FaNpm size={80} color="#CB3837" className="hover:scale-130 transition-transform duration-400 mt-8" title="npm" />
                <SiGnubash size={80} color="#4EAA25" className="hover:scale-130 transition-transform duration-400 mt-8" title="GNU Bash" />
                <VscCopilot size={80} color="#6CC644" className="hover:scale-130 transition-transform duration-400 mt-8" title="GitHub Copilot" />
            </div>
        </div>
    )
}