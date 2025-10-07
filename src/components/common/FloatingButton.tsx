import { SlidersHorizontal } from "lucide-react";
import useScroll from "@/hooks/useScroll";

export default function FloatingButton() {
    const scroll = useScroll();

    return (
        <>
            <div className="fixed w-full bottom-36">
                <div className="relative z-2 w-full max-w-md">
                    <button
                        className={`floating-btn bg-gray1000 ${
                            scroll > 100 && "translate-y-[-60px]"
                        }`}
                    >
                        <SlidersHorizontal color="white" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </>
    );
}
