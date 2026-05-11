import { Name } from "../section-components/Name";
import MyPicture from "../section-components/MyPicture";

export default function HeroSection() {
    return (
        <div className="flex justify-between h-screen px-20 w-[1200px] mx-auto items-center">
            <MyPicture />
            <Name />
        </div>
    )
}