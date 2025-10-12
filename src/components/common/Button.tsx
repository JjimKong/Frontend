import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "main" | "gray";
    icon?: string;
    className?: string;
}

export default function Button({
    color,
    children,
    disabled,
    icon,
    className,
    ...props
}: ButtonProps) {
    return (
        <>
            <button
                className={twMerge(
                    `relative w-full h-[50px] rounded-xl duration-200 ease-in-out
                ${
                    disabled
                        ? "bg-gray200 dark:bg-gray900 text-gray500 dark:text-gray600 cursor-default"
                        : color === "main"
                        ? "bg-main500 text-white active:bg-main600"
                        : color === "gray"
                        ? "bg-gray200 text-gray1000 active:bg-gray300"
                        : "bg-gray1000 text-white active:bg-gray900"
                }`,
                    className
                )}
                {...props}
            >
                <div className="absolute pl-5 flex justify-center gap-2">
                    {icon && (
                        <span className="relative aspect-[1/1] w-[20px]">
                            <img src={icon} alt="아이콘" />
                        </span>
                    )}
                </div>
                {children}
            </button>
        </>
    );
}
