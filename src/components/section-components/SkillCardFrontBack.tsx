import { icons } from "../../data/icons"


export default function SkillCardFrontBack() {
    return (
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-[#151D29] p-4 sm:p-6 rounded-lg border-[#0F99A1] border drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto font-bold text-lg sm:text-2xl">Frontend</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        {icons.html && <icons.html.icon size={56} color={icons.html.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">HTML</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.css && <icons.css.icon size={56} color={icons.css.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">CSS</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.js && <icons.js.icon size={56} color={icons.js.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.typescript && <icons.typescript.icon size={56} color={icons.typescript.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.react && <icons.react.icon size={56} color={icons.react.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">React</p>
                    </div>
                    <div className="flex flex-col items-center gap-2"   >
                        {icons.reactNative && <icons.reactNative.icon size={56} color={icons.reactNative.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">React Native</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.next && <icons.next.icon size={56} color={icons.next.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.tailwind && <icons.tailwind.icon size={56} color={icons.tailwind.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base">Tailwind CSS</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#151D29] p-4 sm:p-6 rounded-lg border-[#0F99A1] border drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                <div className="bg-white py-2 px-6 rounded-2xl w-fit mx-auto font-bold text-lg sm:text-2xl">BackEnd</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                    <div className="flex flex-col items-center gap-2">
                        {icons.node && <icons.node.icon size={56} color={icons.node.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base text-center">Node.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.express && <icons.express.icon size={56} color={icons.express.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base text-center">Express.js(Basic)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.next && <icons.next.icon size={56} color={icons.next.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base text-center">Next.js(API Routes)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        {icons.sql && <icons.sql.icon size={56} color={icons.sql.color} className="hover:scale-130 transition-transform duration-400" />}
                        <p className="text-white font-bold text-sm sm:text-base text-center">SQL/SQLite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}