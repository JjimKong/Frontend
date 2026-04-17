import Header from "@/components/common/Header";
import Step1 from "@/components/write/Step1";
import Step2 from "@/components/write/Step2";
import Step3 from "@/components/write/Step3";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Write() {
    const [step, setStep] = useState(3);
    const navigation = useNavigate();

    const goToStepHandler = (s: number) => {
        setStep(s);
    };
    const completeHandler = () => {
        navigation("/review/placeId");
    };

    return (
        <>
            <Header noLine />
            {step === 1 ? (
                <Step1 onClick={goToStepHandler} />
            ) : step === 2 ? (
                <Step2 onClick={goToStepHandler} />
            ) : (
                <Step3 onClick={completeHandler} />
            )}
        </>
    );
}
