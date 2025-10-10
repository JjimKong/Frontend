import Sheet from "../common/Sheet";
import FilterItem from "./FilterItem";

export default function FilterSheet({
    sort,
    region,
    category,
    setSort,
    setRegion,
    setCategory,
}: {
    sort: string;
    region: string[];
    category?: string[];
    setSort: (s: string) => void;
    setRegion: (r: string[]) => void;
    setCategory?: (c: string[]) => void;
}) {
    const sort_list = ["최신순", "오래된순", "별점 높은 순", "별점 낮은 순"];
    const region_list = [
        "서울",
        "경기",
        "인천",
        "대전",
        "세종",
        "울산",
        "대구",
        "광주",
        "충북",
        "충남",
        "전북",
        "전남",
        "경북",
        "경남",
        "강원",
        "부산",
        "제주",
    ];
    const category_list = ["식당", "카페", "숙소", "액티비티"];

    return (
        <>
            <Sheet>
                <div className="flex flex-col gap-2.5 mb-5">
                    정렬
                    <ul className="flex gap-1.25">
                        {sort_list.map((s) =>
                            s === sort ? (
                                <FilterItem color="main">{s}</FilterItem>
                            ) : (
                                <FilterItem
                                    color="gray"
                                    onClick={() => setSort(s)}
                                >
                                    {s}
                                </FilterItem>
                            )
                        )}
                    </ul>
                </div>
                {category && (
                    <div>
                        카테고리
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                )}
                <div className="w-full flex flex-col gap-2.5 mb-5">
                    지역
                    <ul className="flex flex-wrap gap-1.25">
                        {region_list.map((r) =>
                            region.includes(r) ? (
                                <FilterItem
                                    onClick={() =>
                                        setRegion(
                                            region.filter(
                                                (before_r) => before_r !== r
                                            )
                                        )
                                    }
                                >
                                    {r}
                                </FilterItem>
                            ) : (
                                <FilterItem
                                    color="gray"
                                    onClick={() => setRegion([...region, r])}
                                >
                                    {r}
                                </FilterItem>
                            )
                        )}
                    </ul>
                </div>
            </Sheet>
        </>
    );
}
