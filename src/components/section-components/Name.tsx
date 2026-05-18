import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";


export function Name() {
    return (
        <div className="w-full max-w-xl text-center lg:text-left">

            <p className="text-[#A679CE] m-0 text-2xl sm:text-3xl lg:text-4xl font-bold">
                Hi there,my name is
            </p>
            <h1 className="animated-text text-5xl sm:text-6xl lg:text-8xl mt-4 p-0">Neriman</h1>
            <p className="text-[#A679CE] m-0 text-2xl sm:text-3xl lg:text-4xl font-bold">I am Frontend Developer </p>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-8">
                <li>
                    <a href="">
                        <FaLinkedin className="text-5xl sm:text-6xl lg:text-7xl text-[#0000EE] hover:text-black hover:scale-121 transition-all duration-300"  />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaGithub className="text-5xl sm:text-6xl lg:text-7xl text-[#0000EE] hover:text-black hover:scale-121 transition-all duration-300" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <SiGmail className="text-5xl sm:text-6xl lg:text-7xl text-[#0000EE] hover:text-black hover:scale-121 transition-all duration-300" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaDiscord className="text-5xl sm:text-6xl lg:text-7xl text-[#0000EE] hover:text-black hover:scale-121 transition-all duration-300" />
                    </a>
                </li>
            </ul>
        </div>
    )
}