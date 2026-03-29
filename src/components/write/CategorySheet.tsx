import Sheet from "../common/Sheet";
import { useModalStore } from "@/stores/useModal";

export default function CategorySheet({
    category,
    setCategory,
}: {
    category: string;
    setCategory: (c: string) => void;
}) {
    const { closeModal } = useModalStore();

    const selectCategory = (c: string) => {
        setCategory(c);
        closeModal();
    };

    return (
        <Sheet>
            <div className="grid grid-cols-2 gap-2">
                <button
                    className={`border p-3 rounded-xl ${category === "식당" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectCategory("식당")}
                >
                    식당
                </button>
                <button
                    className={`border p-3 rounded-xl ${category === "카페" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectCategory("카페")}
                >
                    카페
                </button>
                <button
                    className={`border p-3 rounded-xl ${category === "숙소" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectCategory("숙소")}
                >
                    숙소
                </button>
                <button
                    className={`border p-3 rounded-xl ${category === "액티비티" ? "border-main500 bg-main100" : "border-gray300"}`}
                    onClick={() => selectCategory("액티비티")}
                >
                    액티비티
                </button>
            </div>
        </Sheet>
    );
}
