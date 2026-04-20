import { useEffect, useState } from "react";
import StarInput from "./StarInput";
import { STAR_INPUT } from "@/constants/write";
import PhotoInput from "./PhotoInput";
import TextArea from "./TextArea";
import Button from "../common/Button";

export default function Step3({ onClick }: { onClick: () => void }) {
    const [step, setStep] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [review, setReview] = useState("");
    const [stars, setStars] = useState<number[]>([0, 0, 0, 0]);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => setStep(1), 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="pt-25 px-5 flex flex-col gap-10 pb-24">
                <div>
                    <h1
                        className={`delay-200 duration-800 ${
                            !isMounted && "-translate-y-2 opacity-0"
                        }`}
                    >
                        9월 1일에 방문한
                    </h1>
                    <h1
                        className={`delay-400 duration-800 ${
                            !isMounted && "-translate-y-2 opacity-0"
                        }`}
                    >
                        카츠요에 대한 리뷰를 남겨주세요
                    </h1>
                </div>

                {!!stars[3] && (
                    <div className="flex flex-col -mb-10">
                        <div className="inline-animate">
                            <PhotoInput images={images} setImages={setImages} />
                        </div>
                        <div className="inline-animate2 -mt-4">
                            <TextArea
                                value={review}
                                maxLength={500}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                <div className="flex flex-col">
                    {STAR_INPUT[0].star.slice(0, step).map((star, index) => {
                        const isCurrent = index === step - 1;

                        return (
                            <div
                                key={star.name}
                                style={{ order: -index }}
                                className="inline-animate"
                            >
                                <StarInput
                                    label={star.label}
                                    star={stars[index]}
                                    setStar={(value: number) => {
                                        const newStars = [...stars];
                                        newStars[index] = value;
                                        setStars(newStars);
                                    }}
                                    onComplete={() => {
                                        if (isCurrent)
                                            setStep((prev) => prev + 1);
                                    }}
                                >
                                    {star.name}
                                </StarInput>
                            </div>
                        );
                    })}
                </div>
                <div className="fixed bottom-0 w-full max-w-md flex flex-col items-center gap-3 p-5 -ml-5">
                    <div className="absolute inset-0 pointer-events-none bg-white/50 backdrop-blur [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)]" />
                    {review ? (
                        <Button color="main" onClick={() => onClick()}>
                            리뷰 작성
                        </Button>
                    ) : (
                        <Button disabled>리뷰 작성</Button>
                    )}
                </div>
            </div>
        </>
    );
}
