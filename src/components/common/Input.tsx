import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: boolean;
    errorMsg?: string;
    label?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function Input({
    error,
    errorMsg,
    className = "",
    label,
    icon,
    children,
    value,
    ...props
}: InputProps) {
    return (
        <>
            <div className="relative flex flex-col gap-1">
                {label && (
                    <label className="h6 text-gray1000 duration-200 ease-in dark:text-white">
                        {label}
                    </label>
                )}
                <input
                    value={value}
                    className={twMerge(
                        `peer text-gray1000 placeholder-gray500 h-13 w-full border-b border-gray-300 duration-200 ease-in-out focus:outline-none ${error && "border-red-600"} ${icon && "pr-10"}`,
                        className,
                    )}
                    {...props}
                />

                <label
                    className={`h6 pl-2 text-red-600 transition-all duration-200 ease-in-out ${
                        error
                            ? "max-h-[40px] translate-y-0 opacity-100"
                            : "max-h-0 -translate-y-2 opacity-0"
                    }`}
                >
                    {errorMsg}
                </label>

                <label
                    className={`text-gray500 absolute left-0 -translate-y-1/2 duration-200 peer-focus:top-0 peer-focus:text-xs ${value ? "top-0 text-xs" : "top-1/2"}`}
                >
                    {children}
                </label>

                {icon && (
                    <div className="text-gray500 absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer duration-200">
                        {icon}
                    </div>
                )}
            </div>
        </>
    );
}
