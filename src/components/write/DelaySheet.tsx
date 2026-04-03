import Sheet from "../common/Sheet";
import { useModalStore } from "@/stores/useModal";

export default function DelaySheet({
    delay,
    setDelay,
}: {
    delay: string;
    setDelay: (d: string) => void;
}) {
    const { closeModal } = useModalStore();

    const selectDelayHandler = (d: string) => {
        setDelay(d);
        closeModal();
    };

    return (
        <Sheet>
            <div className="flex flex-col gap-2">
                <button
                    className={`border p-3 rounded-xl ${delay === "바로 입장" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectDelayHandler("바로 입장")}
                >
                    바로 입장
                </button>
                <button
                    className={`border p-3 rounded-xl ${delay === "10분 - 30분" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectDelayHandler("10분 - 30분")}
                >
                    10분 - 30분
                </button>
                <button
                    className={`border p-3 rounded-xl ${delay === "30분 - 1시간" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectDelayHandler("30분 - 1시간")}
                >
                    30분 - 1시간
                </button>
                <button
                    className={`border p-3 rounded-xl ${delay === "1시간 - 2시간" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectDelayHandler("1시간 - 2시간")}
                >
                    1시간 - 2시간
                </button>
                <button
                    className={`border p-3 rounded-xl ${delay === "2시간 이상" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectDelayHandler("2시간 이상")}
                >
                    2시간 이상
                </button>
            </div>
        </Sheet>
    );
}
