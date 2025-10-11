import { Link } from "react-router";
import Sheet from "../common/Sheet";
import { useModalStore } from "@/stores/useModal";

export default function AuthSheet() {
    const { openModal } = useModalStore();

    return (
        <>
            <Sheet>
                <div className="w-full flex flex-col">
                    <Link
                        to="/login"
                        className="w-full flex justify-between p-2 text-left rounded-lg active:bg-gray100"
                    >
                        로그아웃
                    </Link>
                    <button
                        className="w-full flex justify-between p-2 text-main600 text-left rounded-lg active:bg-gray100"
                        onClick={() => openModal("alert")}
                    >
                        회원탈퇴
                    </button>
                </div>
            </Sheet>
        </>
    );
}
