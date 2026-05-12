import { Name } from "../section-components/Name";
import MyPicture from "../section-components/MyPicture";

export default function HeroSection() {
    return (
        <div className="flex justify-between h-[80vh] px-20 w-300 mx-auto items-center">
            <MyPicture />
            <Name />
        </div>
    )
}