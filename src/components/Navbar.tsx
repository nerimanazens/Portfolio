

export default function Navbar() {
    return (
        <nav className="bg-transparent backdrop-blur-lg border border-white/10 shadow h-16 flex items-center justify-between  w-300 mx-auto px-6 py-2.5 sticky top-2 rounded-4xl">
            <p className="font-bold text-white text-2xl">AZENS</p>
            <ul className="flex space-x-8 text-lg font-medium text-white bg-[#293545] px-4 py-2 rounded-full">
                <li >Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <p>resume</p>
        </nav>
    )
}