import Sheet from "../common/Sheet";
import { useModalStore } from "@/stores/useModal";

export default function AuthSheet() {
    const { openModal } = useModalStore();

    return (
        <>
            <Sheet>
                <div className="w-full flex flex-col">
                    <button
                        className="w-full flex justify-between p-2 text-left rounded-lg active:bg-gray100"
                        onClick={() => openModal("logout")}
                    >
                        로그아웃
                    </button>
                    <button
                        className="w-full flex justify-between p-2 text-main600 text-left rounded-lg active:bg-gray100"
                        onClick={() => openModal("withdraw")}
                    >
                        회원탈퇴
                    </button>
                </div>
            </Sheet>
        </>
    );
}
