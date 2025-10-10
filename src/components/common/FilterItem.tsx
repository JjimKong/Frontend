export default function FilterItem({
    children,
    disabled,
    color,
    onClick,
}: {
    children: React.ReactNode;
    disabled?: boolean;
    color?: "gray" | "main";
    onClick?: () => void;
}) {
    return (
        <>
            <li>
                <button
                    className={`text-xs rounded-lg py-1 pl-2 pr-2.25 duration-100 ease-in text-nowrap ${
                        disabled && "active:bg-gray1000"
                    } ${
                        color === "main"
                            ? "bg-main500 text-white"
                            : color === "gray"
                            ? "bg-gray100 active:bg-gray300"
                            : "bg-gray1000 text-white active:bg-gray900"
                    }`}
                    onClick={onClick}
                >
                    {children}
                </button>
            </li>
        </>
    );
}
