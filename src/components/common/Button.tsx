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
                    `relative w-full h-13 rounded-xl duration-200 ease-in-out
                ${
                    disabled
                        ? "bg-gray200 text-gray500 cursor-default"
                        : color === "main"
                          ? "bg-main500 text-white active:bg-main600"
                          : color === "gray"
                            ? "bg-gray200 text-gray1000 active:bg-gray300"
                            : "bg-gray1000 text-white active:bg-gray900"
                }`,
                    className,
                )}
                {...props}
            >
                <div className="relative pl-5 flex justify-center items-center gap-2">
                    {icon && (
                        <img
                            src={icon}
                            alt="아이콘"
                            className="absolute left-5 top-1/2 mt-px aspect-[1/1] w-5"
                        />
                    )}
                </div>
                {children}
            </button>
        </>
    );
}
