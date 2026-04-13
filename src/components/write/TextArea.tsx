interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export default function TextArea({ className, ...props }: InputProps) {
    const currentLength = String(props.value ?? "").length;

    return (
        <div className="relative flex flex-col gap-1">
            <label className="text-gray500 text-sm">상세 리뷰</label>
            <div
                className={`bg-gray100 rounded-lg px-5 pt-4 pb-3 flex flex-col duration-200 ${currentLength > props.maxLength! && "bg-main100"}`}
            >
                <textarea
                    className={`bg-transparent focus:outline-none resize-none [field-sizing:content] min-h-[24px] text-sm w-full ${className || ""}`}
                    {...props}
                />

                {props.maxLength && (
                    <div
                        className={`text-xs text-gray400 duration-200 text-right mt-2 select-none pointer-events-none ${currentLength > props.maxLength && "text-main500"}`}
                    >
                        {currentLength}/{props.maxLength}
                    </div>
                )}
            </div>
        </div>
    );
}
