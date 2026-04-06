import { Star } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function StarInput({
    children,
    label,
    className,
    onComplete,
}: {
    children: React.ReactNode;
    label: string[];
    className?: string;
    onComplete?: (s: number) => void;
}) {
    const [star, setStar] = useState(0);
    const [hoverStar, setHoverStar] = useState(0);

    const selectStar = (s: number) => {
        setStar(s);
        onComplete?.(s);
    };

    const displayStar = hoverStar || star;

    return (
        <div className={twMerge("flex items-center", className)}>
            <span className="w-15">{children}</span>

            <div className="flex relative" onMouseLeave={() => setHoverStar(0)}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <button
                        key={index}
                        className="p-0.5"
                        onClick={() => selectStar(index)}
                        onMouseEnter={() => setHoverStar(index)}
                    >
                        <Star
                            strokeWidth={1.5}
                            size={26}
                            fill="currentColor"
                            className={`duration-100 ${
                                displayStar >= index
                                    ? "text-main500"
                                    : "text-gray400"
                            }`}
                        />
                    </button>
                ))}

                <label className="absolute -bottom-5 text-sm text-main500 whitespace-nowrap">
                    {!displayStar
                        ? "별점을 선택해주세요"
                        : label[displayStar - 1]}
                </label>
            </div>
        </div>
    );
}
