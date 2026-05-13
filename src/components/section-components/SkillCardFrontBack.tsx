import { icons } from "../../data/icons"


export default function SkillCardFrontBack() {
    return (
        <div className="w-300 mx-auto  grid grid-cols-2 grid-rows-[fit-content] gap-4 ">
            <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] ">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto  font-bold text-2xl">Frontend</div>
                <div className="grid grid-cols-4 grid-rows-[fit-content] gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        {icons.html && <icons.html size={80} color="#E34F26" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">HTML</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.css && <icons.css size={80} color="#1572B6" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">CSS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.js && <icons.js size={80} color="#F7DF1E" className="hover:scale-130 transition-transform duration-400" />}  
                        <p className="text-white font-bold">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.typescript && <icons.typescript size={80} color="#3178C6" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.react && <icons.react size={80} color="#61DAFB" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">React</p>
                    </div>
                    <div className="flex flex-col items-center gap-2"   >
                        {icons.reactNative && <icons.reactNative size={80} color="#61DAFB" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">React Native</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.next && <icons.next size={80} color="#000000" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.tailwind && <icons.tailwind size={80} color="#06B6D4" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Tailwind CSS</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] ">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto  font-bold text-2xl">BackEnd</div>
                <div className="grid grid-cols-3 grid-rows-[fit-content] gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        {icons.node && <icons.node size={80} color="#339933" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Node.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.express && <icons.express size={80} color="#000000" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Express.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.next && <icons.next size={80} color="#000000" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Next.js(API Routes)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.sql && <icons.sql size={80} color="#4479A1" className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">SQL/SQLite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}