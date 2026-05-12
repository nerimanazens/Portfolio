

export default function DynamicHeader({ header }: { header: string }) {
    return (
        <div className="relative w-full max-w-170 h-14 mx-auto flex items-center justify-center mb-4">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-2 border-gray-50 z-0"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="animate-slide py-1 px-3 bg-[#293545] text-white font-bold rounded-full">
                    <p className="animated-text text-2xl"><p>&lt;{header} /&gt;</p></p>
                </div>
            </div>
        </div>
    )
}