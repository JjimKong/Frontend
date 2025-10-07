import { SlidersHorizontal } from "lucide-react";

export default function FloatingButton() {
    return (
        <>
            <button className="fixed flex bottom-23 right-5 w-13 h-13 justify-center items-center rounded-full bg-gray1000">
                <SlidersHorizontal color="white" strokeWidth={1.5} />
            </button>
        </>
    );
}
