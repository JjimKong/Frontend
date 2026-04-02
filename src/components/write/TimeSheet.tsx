import Sheet from "../common/Sheet";
import { useModalStore } from "@/stores/useModal";

export default function TimeSheet({
    time,
    setTime,
}: {
    time: string;
    setTime: (t: string) => void;
}) {
    const { closeModal } = useModalStore();

    const selectTimeHandler = (t: string) => {
        setTime(t);
        closeModal();
    };

    return (
        <Sheet>
            <div className="flex flex-col gap-2">
                <button
                    className={`border p-3 rounded-xl ${time === "아침" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectTimeHandler("아침")}
                >
                    아침
                </button>
                <button
                    className={`border p-3 rounded-xl ${time === "점심" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectTimeHandler("점심")}
                >
                    점심
                </button>
                <button
                    className={`border p-3 rounded-xl ${time === "저녁" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectTimeHandler("저녁")}
                >
                    저녁
                </button>
            </div>
        </Sheet>
    );
}
