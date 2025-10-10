import { Star } from "lucide-react";

export default function Card() {
    return (
        <>
            <li className="card-wrapper">
                <div className="w-full pt-5 pb-2 border-b flex gap-5 justify-between border-gray200">
                    <div className="min-w-0 flex flex-col">
                        <h1 className="w-full truncate">가게 이름</h1>
                        <h2 className="w-full text-gray500 text-xs truncate">
                            카테고리 | 주소
                        </h2>
                    </div>
                    <div className="h-full flex items-center">
                        <Star
                            size={16}
                            strokeWidth={1}
                            color="#ff3939"
                            fill="#ff3939"
                        />
                        <label className="text-main500 pl-1 pb-0.25">
                            4.68
                        </label>
                    </div>
                </div>
                <div className="w-full h-[96px] flex justify-between gap-2 pt-2 pb-5">
                    <p className="w-[calc(100%-76px)] h-full text-gray700 text-xs line-clamp-4">
                        내용
                    </p>
                    <div className="w-[68px] h-[68px] rounded-lg bg-gray500"></div>
                </div>
            </li>
        </>
    );
}
