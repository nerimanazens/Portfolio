import { icons } from "../../data/icons"


export default function SkillCardFrontBack() {
    return (
        <div className="w-300 mx-auto  grid grid-cols-2 grid-rows-[fit-content] gap-4 ">
            <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] ">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto  font-bold text-2xl">Frontend</div>
                <div className="grid grid-cols-4 grid-rows-[fit-content] gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        {icons.html && <icons.html.icon size={80} color={icons.html.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">HTML</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.css && <icons.css.icon size={80} color={icons.css.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">CSS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.js && <icons.js.icon size={80} color={icons.js.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.typescript && <icons.typescript.icon size={80} color={icons.typescript.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.react && <icons.react.icon size={80} color={icons.react.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">React</p>
                    </div>
                    <div className="flex flex-col items-center gap-2"   >
                        {icons.reactNative && <icons.reactNative.icon size={80} color={icons.reactNative.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">React Native</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.next && <icons.next.icon size={80} color={icons.next.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.tailwind && <icons.tailwind.icon size={80} color={icons.tailwind.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Tailwind CSS</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border   drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] ">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto  font-bold text-2xl">BackEnd</div>
                <div className="grid grid-cols-3 grid-rows-[fit-content] gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        {icons.node && <icons.node.icon size={80} color={icons.node.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Node.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.express && <icons.express.icon size={80} color={icons.express.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Express.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.next && <icons.next.icon size={80} color={icons.next.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">Next.js(API Routes)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.sql && <icons.sql.icon size={80} color={icons.sql.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold">SQL/SQLite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}