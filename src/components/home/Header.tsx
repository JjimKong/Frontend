import Logo from "@/assets/logo.svg";
import { Search } from "lucide-react";

export default function Header() {
    const category = ["전체", "식당", "카페", "숙소", "액티비티"];
    const select = "전체";

    return (
        <>
            <header className="z-1 sticky top-[-55px] w-full h-[169px] bg-white85 border-b border-gray300 backdrop-blur-[3px]">
                <div className="w-full h-[55px] flex justify-center items-end">
                    <img src={Logo} alt="logo" width={50} />
                </div>
                <div className="w-full h-[114px] flex flex-col justify-between">
                    <div className="px-5">
                        <input
                            className="peer mt-5 w-full h-[44px] bg-gray200 rounded-xl placeholder:pl-5 pl-5 text-sm text-gray1000 placeholder:text-gray600 focus:outline-none focus:placeholder:text-clear"
                            placeholder="가게 이름, 내용으로 검색해보세요!"
                        />
                        <Search
                            size={20}
                            strokeWidth={1.75}
                            className="mt-[-32px] ml-3 text-gray600 peer-focus:text-clear peer-[&:not(:placeholder-shown)]:text-clear"
                        />
                    </div>
                    <div className="px-2 w-full h-[50px] flex overflow-scroll">
                        {category.map((c) => (
                            <button key={c} className="px-3 whitespace-nowrap">
                                <div
                                    className={`h-full border-b-2 flex items-end pb-2.5 border-clear text-gray500 ${
                                        c === select &&
                                        "text-gray1000 border-gray1000"
                                    }`}
                                >
                                    {c}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}
