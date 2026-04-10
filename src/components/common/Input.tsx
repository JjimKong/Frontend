import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function Input({
    className = "",
    icon,
    children,
    value,
    ...props
}: InputProps) {
    return (
        <>
            <div className="relative flex flex-col gap-1">
                <input
                    value={value}
                    className={twMerge(
                        `peer text-gray1000 placeholder-gray500 h-12 w-full border-b border-gray-300 duration-200 ease-in-out focus:outline-none`,
                        className,
                    )}
                    {...props}
                />

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
