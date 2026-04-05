import { useEffect, useState } from "react";
import Input from "../common/Input";
import { Calendar, ChevronDown } from "lucide-react";
import { useModalStore } from "@/stores/useModal";
import DateModal from "../common/DateModal";
import Button from "../common/Button";
import TimeSheet from "./TimeSheet";
import DelaySheet from "./DelaySheet";

export default function Step2({ onClick }: { onClick: (s: number) => void }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [delay, setDelay] = useState("");
    const openName = useModalStore((state) => state.openName);
    const { openModal } = useModalStore();

    useEffect(() => {
        if (date) setIsDateSelected(true);
    }, [date]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <div className="pt-25 px-5 flex flex-col gap-10">
                <h1
                    className={`text-2xl font-medium delay-200 duration-800 ${!isMounted && "-translate-y-2 opacity-0"}`}
                >
                    카츠요에 언제 방문하셨나요?
                </h1>
                <div
                    className={`duration-800 delay-400 flex flex-col gap-5 ${!isMounted && "-translate-y-2 opacity-0"}`}
                >
                    <Input
                        readOnly
                        value={date}
                        icon={
                            <Calendar
                                strokeWidth={1.5}
                                className="text-gray600"
                                size={20}
                            />
                        }
                        className={`border-gray1000`}
                        onClick={() => openModal("date")}
                    >
                        날짜
                    </Input>
                    <div
                        className={`duration-800 ${!isDateSelected && "-translate-y-2 opacity-0"}`}
                    >
                        <Input
                            readOnly
                            value={time}
                            icon={
                                <ChevronDown
                                    strokeWidth={1.5}
                                    className="text-gray600"
                                    size={20}
                                />
                            }
                            className={`border-gray1000`}
                            onClick={() => openModal("time")}
                        >
                            시간
                        </Input>
                    </div>
                    <div
                        className={`duration-800 delay-200 ${!isDateSelected && "-translate-y-2 opacity-0"}`}
                    >
                        <Input
                            readOnly
                            value={delay}
                            icon={
                                <ChevronDown
                                    strokeWidth={1.5}
                                    className="text-gray600"
                                    size={20}
                                />
                            }
                            className={`border-gray1000`}
                            onClick={() => openModal("delay")}
                        >
                            대기시간
                        </Input>
                    </div>
                </div>
                <div className="fixed bottom-0 w-full max-w-md flex flex-col items-center gap-3 pb-5 pl-0 pr-10">
                    {date && time && delay ? (
                        <Button onClick={() => onClick(3)}>다음</Button>
                    ) : (
                        <Button disabled>다음</Button>
                    )}
                </div>
            </div>

            {openName === "date" && <DateModal date={date} setDate={setDate} />}
            {openName === "time" && <TimeSheet time={time} setTime={setTime} />}
            {openName === "delay" && (
                <DelaySheet delay={delay} setDelay={setDelay} />
            )}
        </>
    );
}
