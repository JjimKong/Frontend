import FloatingButton from "@/components/common/FloatingButton";
import Header from "@/components/common/Header";
import TopButton from "@/components/common/TopButton";
import ReviewListItem from "@/components/review/ReviewListItem";
import Stars from "@/components/review/Stars";
import { ChevronLeft, Heart, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Review() {
    const navigate = useNavigate();
    const [isLike, setIsLike] = useState(false);

    return (
        <>
            <Header isScrollHeader>카츠요</Header>

            <div className="w-full aspect-video bg-gray600 text-white">
                <div className="h-full p-5 flex flex-col justify-between">
                    <div className="flex flex-row justify-between">
                        <ChevronLeft size={28} onClick={() => navigate(-1)} />
                        <Heart
                            fill={isLike ? "currentColor" : "none"}
                            onClick={() => setIsLike(!isLike)}
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl">카츠요</h1>
                        <h2>식당 | 서울특별시 마포구</h2>
                    </div>
                </div>
            </div>

            <div className="flex justify-around border-b py-3 border-gray300 text-sm">
                <div className="w-full p-1 flex flex-col items-center">
                    <h3>평점</h3>
                    <p className="text-2xl font-bold mt-4 text-main500">4.67</p>
                </div>
                <div className="w-full p-1 flex flex-col gap-1 items-center border-x border-gray300">
                    <h3>세부 항목</h3>
                    <div className="w-full flex justify-center gap-2">
                        <div className="flex flex-col items-center text-xs">
                            <p>맛</p>
                            <p>가격</p>
                            <p>분위기</p>
                            <p>서비스</p>
                        </div>
                        <div className="flex flex-col gap-1 text-gray1000">
                            <Stars score={4.2} />
                            <Stars score={5} />
                            <Stars score={3.5} />
                            <Stars score={5} />
                        </div>
                    </div>
                </div>
                <div className="w-full p-1 flex flex-col items-center">
                    <h3>방문 횟수</h3>
                    <p className="text-2xl font-bold mt-4">6</p>
                </div>
            </div>

            <ul>
                <ReviewListItem />
                <ReviewListItem />
                <ReviewListItem />
            </ul>

            <FloatingButton
                onClick={() => navigate("/write")}
                className="bottom-20"
            >
                <Plus className="text-white" />
            </FloatingButton>
            <TopButton className="bottom-20" />
        </>
    );
}
