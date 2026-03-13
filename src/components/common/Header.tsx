import useScroll from "@/hooks/useScroll";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header({
    children,
    isDelete,
    onDelete,
    isScrollHeader,
}: {
    children?: React.ReactNode;
    isDelete?: boolean;
    onDelete?: () => void;
    isScrollHeader?: boolean;
}) {
    const navigation = useNavigate();
    const scroll = useScroll();

    return (
        <>
            <div
                className={`fixed z-10 flex justify-center items-center w-full max-w-md h-15 bg-white/85 border-b border-gray300 backdrop-blur-xs duration-300
                ${isScrollHeader && (scroll > 100 ? "translate-y-0" : "-translate-y-15")}`}
            >
                {children}
                <button
                    className="absolute flex top-0 left-0 w-16 h-15 items-center pl-5 duration-200 active:text-gray700"
                    onClick={() => navigation(-1)}
                >
                    <ChevronLeft strokeWidth={1.5} />
                </button>
                {isDelete && (
                    <button
                        className="absolute flex top-0 right-0 w-16 h-15 items-center pl-5 text-sm text-main600"
                        onClick={onDelete}
                    >
                        삭제
                    </button>
                )}
            </div>
        </>
    );
}
