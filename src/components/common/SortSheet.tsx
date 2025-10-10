import { Check } from "lucide-react";
import Sheet from "./Sheet";
import { useModalStore } from "@/stores/useModal";

export default function SortSheet({
    select,
    setSelect,
}: {
    select: string;
    setSelect: (s: string) => void;
}) {
    const { closeModal } = useModalStore();
    const sort = ["최신순", "오래된순", "별점 높은 순", "별점 낮은 순"];

    return (
        <>
            <Sheet>
                <div className="w-full flex flex-col gap-3">
                    {sort.map((s) => (
                        <button
                            className={`w-full flex justify-between p-2 text-left rounded-lg active:bg-gray100 
                        ${select === s ? "text-main500" : "text-gray1000"}`}
                            onClick={() => {
                                setSelect(s);
                                closeModal();
                            }}
                        >
                            {s}
                            {select === s && <Check color="#FF3939" />}
                        </button>
                    ))}
                </div>
            </Sheet>
        </>
    );
}
