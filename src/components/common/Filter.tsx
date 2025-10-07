import { ChevronDown } from "lucide-react";
import FilterItem from "./FilterItem";

export default function Filter() {
    return (
        <>
            <div className="relative w-full h-[40px] flex justify-between items-center">
                <div className="w-[calc(100%-100px)] flex gap-1 overflow-scroll whitespace-nowrap">
                    <div className="min-w-4 h-full" />
                    <FilterItem>필터</FilterItem>
                </div>
                <div className="absolute right-24 w-2.5 h-full bg-[linear-gradient(90deg,#F7F7F700,#F7F7F7)]" />
                <div className="flex p-3 mr-5 whitespace-nowrap">
                    <span className="h-full text-gray700 text-xs">최신순</span>
                    <ChevronDown size={16} strokeWidth={1} />
                </div>
            </div>
        </>
    );
}
