interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "main" | "gray";
}

export default function Button({
    color,
    children,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <>
            <button
                className={`w-full h-[50px] rounded-xl duration-200 ease-in-out
                ${
                    disabled
                        ? "bg-gray200 dark:bg-gray900 text-gray500 dark:text-gray600 cursor-default"
                        : color === "main"
                        ? "bg-main500 text-white active:bg-main600"
                        : color === "gray"
                        ? "bg-gray200 text-gray1000 active:bg-gray300"
                        : "bg-gray1000 text-white active:bg-gray900"
                }`}
                {...props}
            >
                {children}
            </button>
        </>
    );
}
