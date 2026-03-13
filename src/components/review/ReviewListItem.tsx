import { Ellipsis } from "lucide-react";

export default function ReviewListItem() {
    return (
        <li className="mx-5 py-5 flex flex-col gap-2 border-b border-gray300">
            <div className="flex justify-between text-gray600">
                <p className="text-xs">2025.06.25</p>
                <Ellipsis size={16} />
            </div>
            <p className="-mt-1">
                웨이팅 한 30분 정도 한 거 같은데, 기다릴만 하네요!사장님 정말
                친절하세요👍 등심, 안심 다 튀김옷도 적당히 바삭하고, 고기 질이
                정말 부드러워요. 맛있게 잘 먹었네요
            </p>
            <div className="px-4 py-3 flex gap-2 bg-gray100 rounded-xl text-sm">
                <p>
                    맛 <span className="text-main500 font-bold">5</span>
                </p>
                |
                <p>
                    가격 <span className="text-main500 font-bold">5</span>
                </p>
                |
                <p>
                    분위기 <span className="text-main500 font-bold">5</span>
                </p>
                |
                <p>
                    서비스 <span className="text-main500 font-bold">5</span>
                </p>
            </div>
            <ul className="flex gap-2">
                <li className="w-20 h-20 bg-gray600 rounded-xl" />
                <li className="w-20 h-20 bg-gray600 rounded-xl" />
                <li className="w-20 h-20 bg-gray600 rounded-xl" />
            </ul>
        </li>
    );
}
