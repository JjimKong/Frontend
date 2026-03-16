import { useEffect, useState } from "react";

export default function ProgressBar({
    totalStep,
    step,
}: {
    totalStep: number;
    step: number;
}) {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        setProgressWidth(step * (100 / totalStep));
    }, [step, totalStep]);

    return (
        <div className="w-full bg-gray100 fixed top-15 h-0.5 max-w-md">
            <div
                className="bg-main500 absolute top-0 left-0 h-full duration-1500 ease-out"
                style={{
                    width: `${progressWidth}%`,
                }}
            />

            {[...Array(totalStep - 1)].map((_, i) => (
                <div
                    key={i}
                    className="dark:bg-dark-bg absolute top-0 h-full w-1 bg-white duration-200 ease-in"
                    style={{
                        left: `calc(${((i + 1) * 100) / totalStep}% - 2px)`,
                    }}
                />
            ))}
        </div>
    );
}
