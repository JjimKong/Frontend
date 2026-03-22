import SearchListItem from "./SearchListItem";

export default function SearchList({
    setPlace,
}: {
    setPlace: (p: string) => void;
}) {
    const list = [
        "카츠요",
        "카츠요이요이",
        "카츠요이요이",
        "카츠요이요이",
        "카츠요이요이",
        "카츠요이요이",
        "카츠요이요이",
    ];

    return (
        <ul className="w-full max-h-100 overflow-scroll rounded-2xl flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.1)] -mt-8 px-5">
            {list.map((p, i) => (
                <SearchListItem key={i} id={i} setPlace={setPlace} place={p} />
            ))}
        </ul>
    );
}
