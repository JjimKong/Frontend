import Header from "@/components/common/Header";
import Step1 from "@/components/write/Step1";

export default function Write() {
    return (
        <>
            <Header noLine />
            <div className="pt-25 px-5 flex flex-col gap-10">
                <Step1 />
            </div>
        </>
    );
}
