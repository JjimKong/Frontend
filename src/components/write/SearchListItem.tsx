import { Utensils } from "lucide-react";

export default function SearchListItem({
    id,
    setPlace,
    place,
}: {
    id: number;
    setPlace: (p: string) => void;
    place: string;
}) {
    return (
        <li
            className={`w-full flex gap-2 py-5 ${id > 0 && "border-t border-gray200"}`}
            onClick={() => {
                setPlace(place);
            }}
        >
            <div className="w-10 h-10 bg-gray100 rounded-full flex justify-center items-center">
                <Utensils strokeWidth={1.5} size={20} />
            </div>
            <div>
                <h3 className="font-normal">{place}</h3>
                <p className="text-sm text-gray600">
                    서울특별시 마포구 모시깽이로 123
                </p>
            </div>
        </li>
    );
}
