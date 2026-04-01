import { useModalStore } from "@/stores/useModal";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { format, parse } from "date-fns";

export default function DateModal({
    date,
    setDate,
}: {
    date: string;
    setDate: (d: string) => void;
}) {
    const { closeModal } = useModalStore();
    const isMounted = useModalStore((state) => state.isMounted);

    const selectDate = (d: Date | null) => {
        if (!d) return;

        const formattedString = format(d, "yyyy년 MM월 dd일");
        setDate(formattedString);
        closeModal();
    };

    const parsedDate = date
        ? parse(date, "yyyy년 MM월 dd일", new Date())
        : new Date();

    return (
        <div
            className={`fixed top-0 w-full max-w-md h-screen z-11 duration-300 ${
                isMounted ? "bg-black/50" : "bg-clear"
            }`}
            onClick={closeModal}
        >
            <div
                className={`z-12 fixed top-1/2 translate-y-[-50%] w-[calc(100%-40px)] inset-x-0 mx-auto max-w-md bg-white rounded-2xl p-5 flex justify-center ease-in-out duration-300
                        ${
                            isMounted
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                        }`}
                onClick={(e) => e.stopPropagation()}
            >
                <DatePicker
                    inline
                    selected={parsedDate}
                    onChange={(d: Date | null) => selectDate(d)}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    minDate={new Date("2020-01-01")}
                    maxDate={new Date()}
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                />
            </div>
        </div>
    );
}
