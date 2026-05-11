import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";


export function Name() {
    return (
        <div className="w-125">

            <p className="text-[#A679CE] m-0 text-4xl font-bold">
                Hi there,my name is
            </p>
            <h1 className="animated-text text-8xl mt-4 p-0">Neriman</h1>
            <p className="text-[#A679CE] m-0 text-4xl font-bold">I am Frontend Developer </p>

            <ul className="flex space-x-8 mt-8">
                <li>
                    <a href="">
                        <FaLinkedin className="text-7xl text-[#0000EE]  hover:text-black hover:scale-121     transition-all duration-300  "  />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaGithub className="text-7xl text-[#0000EE]  hover:text-black hover:scale-121     transition-all duration-300  " />
                    </a>
                </li>
                <li>
                    <a href="">
                        <SiGmail className="text-7xl text-[#0000EE]  hover:text-black hover:scale-121     transition-all duration-300 " />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaDiscord className="text-7xl text-[#0000EE]  hover:text-black hover:scale-121 transition-all duration-300  " />
                    </a>
                </li>
            </ul>
        </div>
    )
}