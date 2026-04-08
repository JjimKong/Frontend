import { useEffect, useState } from "react";
import StarInput from "./StarInput";
import { STAR_INPUT } from "@/constants/write";

export default function Step3() {
    const [step, setStep] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const visibleStars = STAR_INPUT[0].star.slice(0, step).reverse();

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setStep(1);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="pt-25 px-5 flex flex-col gap-10 pb-24">
                <div>
                    <h1
                        className={`text-2xl font-medium transition-all delay-200 duration-800 ${
                            !isMounted
                                ? "-translate-y-2 opacity-0"
                                : "translate-y-0 opacity-100"
                        }`}
                    >
                        9월 1일에 방문한
                    </h1>
                    <h1
                        className={`text-2xl font-medium transition-all delay-400 duration-800 ${
                            !isMounted
                                ? "-translate-y-2 opacity-0"
                                : "translate-y-0 opacity-100"
                        }`}
                    >
                        카츠요에 대한 리뷰를 남겨주세요
                    </h1>
                </div>

                <div className="flex flex-col">
                    {visibleStars.map((star, index) => {
                        const isCurrent = index === 0;

                        return (
                            <div
                                key={star.name}
                                className="inline-animate origin-top"
                            >
                                <StarInput
                                    label={star.label}
                                    onComplete={() => {
                                        if (
                                            isCurrent &&
                                            step < STAR_INPUT[0].star.length
                                        ) {
                                            setStep((prev) => prev + 1);
                                        }
                                    }}
                                >
                                    {star.name}
                                </StarInput>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
