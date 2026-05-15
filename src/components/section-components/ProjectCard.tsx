import { icons } from "../../data/icons"

export default function ProjectCard({ name, description, techStack, image, link  }: {
    name: string,
    description: string,
    techStack: string[],
    image?: string,
    link: string
}) {
    return (
        <div className="bg-[#0C1018] border-[#0F99A1] border drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] p-0.5 rounded-lg text-white relative overflow-hidden">
            <img src={image} alt={name} className="w-full h-auto relative z-0 rounded-t-lg transition-all duration-300 hover:scale-110" />
            <h3 className="text-3xl m-4 font-bold text-[#00FFFF]">{name}</h3>
            <p className="mx-4 text-lg">{description}</p>

            <div className="flex gap-2 mx-4 my-4">
                {techStack.map((tech) => {
                    const item = icons[tech as keyof typeof icons]
                    if (!item) return null
                    const Icon = item.icon
                    return <Icon key={tech} color={item.color} size={44} className="hover:scale-125 transition-transform duration-300"/>
                })}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#3D4046] text-[#e4e9f1] border font-bold  w-fit py-1 px-4 m-4 rounded-lg hover:bg-[#0F99A1] transition-colors duration-300">
               < icons.github.icon className="mr-2" />
               GitHub
            </a>
        </div>
    )
}