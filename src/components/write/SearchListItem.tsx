import { Utensils } from "lucide-react";

export default function SearchListItem({
    id,
    setPlace,
    place,
}: {
    id: number;
    setPlace: (p: Place) => void;
    place: Place;
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
                <h3 className="font-normal">{place.name}</h3>
                <p className="text-sm text-gray600">{place.address}</p>
            </div>
        </li>
    );
}
