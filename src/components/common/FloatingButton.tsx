import { SlidersHorizontal } from "lucide-react";
import useScroll from "@/hooks/useScroll";
import { useModalStore } from "@/stores/useModal";

export default function FloatingButton({ filter }: { filter: string[] }) {
    const { openModal } = useModalStore();
    const scroll = useScroll();

    return (
        <>
            <div className="fixed w-full bottom-36">
                <div className="relative z-2 w-full max-w-md">
                    <button
                        className={`floating-btn bg-gray1000 ${
                            scroll > 100 && "translate-y-[-60px]"
                        }`}
                        onClick={() => openModal("filter")}
                    >
                        <SlidersHorizontal
                            color={filter.length > 0 ? "#FF3939" : "white"}
                            strokeWidth={1.5}
                        />
                    </button>
                </div>
            </div>
        </>
    );
}
