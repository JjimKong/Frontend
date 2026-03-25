import SearchListItem from "./SearchListItem";

export default function SearchList({
    setPlace,
    list,
}: {
    setPlace: (p: Place) => void;
    list: Place[];
}) {
    return (
        <ul className="w-full max-h-70 overflow-scroll rounded-2xl flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.1)] -mt-8 px-5">
            {list.map((p, i) => (
                <SearchListItem key={i} id={i} setPlace={setPlace} place={p} />
            ))}
        </ul>
    );
}
