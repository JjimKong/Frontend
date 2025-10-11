import Header from "@/components/home/Header";
import Card from "@/components/common/Card";
import Filter from "@/components/common/Filter";
import FloatingButton from "@/components/common/FloatingButton";
import TopButton from "@/components/common/TopButton";
import SortSheet from "@/components/common/SortSheet";
import { useState } from "react";
import { useModalStore } from "@/stores/useModal";
import FilterSheet from "@/components/common/FilterSheet";

export default function Home() {
    const openName = useModalStore((state) => state.openName);
    const [category, setCategory] = useState("전체");
    const [sort, setSort] = useState("최신순");
    const [region, setRegion] = useState<string[]>([]);

    return (
        <>
            <Header setCategory={setCategory} category={category} />
            <div className="relative w-full min-h-[calc(100%-169px)] bg-gray100">
                <Filter sort={sort} region={region} />
                <ul className="p-5 pt-0 flex flex-col gap-2.5 pb-[82px]">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
            <FloatingButton filter={region} />
            <TopButton />

            {openName === "sort" && <SortSheet sort={sort} setSort={setSort} />}
            {openName === "filter" && (
                <FilterSheet
                    sort={sort}
                    region={region}
                    setSort={setSort}
                    setRegion={setRegion}
                />
            )}
        </>
    );
}
