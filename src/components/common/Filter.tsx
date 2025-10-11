import { ChevronDown } from "lucide-react";
import FilterItem from "./FilterItem";
import { useModalStore } from "@/stores/useModal";

export default function Filter({
    sort,
    region,
}: {
    sort: string;
    region: string[];
}) {
    const { openModal } = useModalStore();

    return (
        <>
            <div className="relative w-full h-[40px] flex justify-between items-center">
                <ul className="w-[calc(100%-110px)] flex gap-1 overflow-scroll whitespace-nowrap pr-3">
                    <div className="min-w-4 h-full" />
                    {region.map((r) => (
                        <FilterItem disabled>{r}</FilterItem>
                    ))}
                </ul>
                <div className="absolute right-27.25 w-3 h-full bg-[linear-gradient(90deg,#F7F7F700,#F7F7F7)]" />
                <button
                    className="flex p-3 mr-2 whitespace-nowrap"
                    onClick={() => openModal("sort")}
                >
                    <span className="h-full text-gray700 text-xs">{sort}</span>
                    <ChevronDown size={16} strokeWidth={1} />
                </button>
            </div>
        </>
    );
}
