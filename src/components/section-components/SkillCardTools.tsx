import { icons } from "../../data/icons"

export default function SkillCardTools() {
    return (
        <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] w-300 mx-auto mt-8">
            <div className="bg-white py-2 px-8 rounded-2xl w-fit mx-auto  font-bold text-2xl">Tools</div>
            <div className="flex flex-wrap justify-center gap-12 mt-4">
                {icons.vscode && <icons.vscode.icon size={80} color={icons.vscode.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="Visual Studio Code" />}
                {icons.vite && <icons.vite.icon size={80} color={icons.vite.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="Vite" />}
                {icons.git && <icons.git.icon size={80} color={icons.git.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="Git" />}
                {icons.github && <icons.github.icon size={80} color={icons.github.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="GitHub" />}
                {icons.npm && <icons.npm.icon size={80} color={icons.npm.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="npm" />}
                {icons.bash && <icons.bash.icon size={80} color={icons.bash.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="GNU Bash" />}
                {icons.copilot && <icons.copilot.icon size={80} color={icons.copilot.color} className="hover:scale-130 transition-transform duration-400 mt-8" title="GitHub Copilot" />}
            </div>
        </div>
    )
}