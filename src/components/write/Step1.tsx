import { ChevronDown, Search } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import SearchList from "./SearchList";

export default function Step1({ onClick }: { onClick: (s: number) => void }) {
    const [isMounted, setIsMounted] = useState(false);
    const [placeName, setPlaceName] = useState<string>("");
    const [placeAddress, setPlaceAddress] = useState<string>("");
    const [placeCategory, setPlaceCategory] = useState<string>("");
    const [isSelect, setIsSelect] = useState(false);

    const test: Place[] = [
        {
            name: "카츠요",
            address: "서울특별시 마포구 모시깽이로 123",
            category: "식당",
        },
        {
            name: "카츠요이요이",
            address: "서울특별시 마포구 모시깽이로 14",
            category: "식당",
        },
        {
            name: "카츠요이요이요이",
            address: "서울특별시 마포구 모시깽이로 12",
            category: "식당",
        },
        {
            name: "카츠파는줄알았던 카페집",
            address: "서울특별시 마포구 모시깽이로 2",
            category: "카페",
        },
    ];

    const setPlace = (place: Place) => {
        setPlaceName(place.name);
        setPlaceAddress(place.address);
        setPlaceCategory(place.category);
        setIsSelect(true);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <h1
                className={`text-2xl font-medium duration-800 ${!isMounted && "-translate-y-2 opacity-0"}`}
            >
                방문하신 곳을 알려주세요
            </h1>

            <div
                className={`duration-800 delay-200 flex flex-col gap-5 ${!isMounted && "-translate-y-2 opacity-0"}`}
            >
                <Input
                    value={placeName}
                    onChange={(e) => {
                        setPlaceName(e.target.value);
                        setIsSelect(false);
                    }}
                    icon={
                        <Search
                            strokeWidth={1.5}
                            className="text-gray600"
                            size={20}
                        />
                    }
                    className={`border-gray1000`}
                >
                    이름
                </Input>

                {isSelect && (
                    <Input
                        readOnly
                        value={placeAddress}
                        onChange={(e) => {
                            setPlaceAddress(e.target.value);
                            setIsSelect(false);
                        }}
                        className={`border-gray400 text-gray600`}
                    >
                        주소
                    </Input>
                )}
                {isSelect && (
                    <Input
                        readOnly
                        value={placeCategory}
                        onChange={(e) => {
                            setPlaceCategory(e.target.value);
                            setIsSelect(false);
                        }}
                        icon={
                            <ChevronDown
                                strokeWidth={1.5}
                                className="text-gray400"
                                size={20}
                            />
                        }
                        className={`border-gray400 text-gray600`}
                    >
                        카테고리
                    </Input>
                )}
            </div>

            {placeName && !isSelect && (
                <SearchList setPlace={setPlace} list={test} />
            )}

            <div className="fixed bottom-0 w-full max-w-md pb-5 pl-0 pr-10">
                {isSelect ? (
                    <Button onClick={() => onClick(2)}>확인</Button>
                ) : (
                    <Button disabled>확인</Button>
                )}
            </div>
        </>
    );
}
