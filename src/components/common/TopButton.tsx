import useScroll from "@/hooks/useScroll";
import { ArrowUp } from "lucide-react";

export default function TopButton() {
    const scroll = useScroll();

    const scrollToTopHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="fixed w-full bottom-36">
                <div className="relative z-1 w-full max-w-md">
                    <button
                        className={`floating-btn bg-white border border-gray300 ${
                            scroll > 100
                                ? "translate-y-0 opacity-100"
                                : "translate-y-15 opacity-0 pointer-events-none"
                        }`}
                        onClick={scrollToTopHandler}
                    >
                        <ArrowUp color="#E4E4E4" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </>
    );
}
