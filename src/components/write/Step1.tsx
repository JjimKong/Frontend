import { Search } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import SearchList from "./SearchList";

export default function Step1() {
    const [isMounted, setIsMounted] = useState(false);
    const [placeName, setPlaceName] = useState<string>("");
    const [select, setSelect] = useState<string | null>(null);

    const setPlace = (place: string) => {
        setPlaceName(place);
        setSelect(place);
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
                className={`duration-800 delay-200 ${!isMounted && "-translate-y-2 opacity-0"}`}
            >
                <Input
                    value={placeName}
                    onChange={(e) => {
                        setPlaceName(e.target.value);
                        setSelect(null);
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
            </div>

            {placeName && <SearchList setPlace={setPlace} />}

            <div className="fixed bottom-0 w-full max-w-md pb-5 pl-0 pr-10">
                {select ? (
                    <Button>확인</Button>
                ) : (
                    <Button disabled>확인</Button>
                )}
            </div>
        </>
    );
}
