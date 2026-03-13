import useScroll from "@/hooks/useScroll";
import { twMerge } from "tailwind-merge";

export default function FloatingButton({
    onClick,
    children,
    className,
}: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}) {
    const scroll = useScroll();

    return (
        <>
            <div className={twMerge("fixed w-full bottom-36", className)}>
                <div className="relative z-2 w-full max-w-md">
                    <button
                        className={`floating-btn bg-gray1000 ${
                            scroll > 100 && "translate-y-[-60px]"
                        }`}
                        onClick={onClick}
                    >
                        {children}
                    </button>
                </div>
            </div>
        </>
    );
}
