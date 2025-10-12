import Alert from "@/components/common/Alert";
import AuthSheet from "@/components/mypage/AuthSheet";
import { useModalStore } from "@/stores/useModal";
import { ChevronRight, Heart, Share, Users } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function Mypage() {
    const openName = useModalStore((state) => state.openName);
    const navigation = useNavigate();
    const { openModal } = useModalStore();

    return (
        <>
            <div className="p-2.5">
                <div
                    className="w-full px-2.5 py-5 mt-5 flex items-center justify-between rounded-xl active:bg-gray100 ease-in-out duration-200"
                    onClick={() => openModal("auth")}
                >
                    <div>
                        <h1 className="text-2xl leading-[120%] mb-1">
                            안녕하세요
                            <br />
                            <span className="text-main500">문재경</span>님
                        </h1>
                        <h2 className="text-sm text-gray600">
                            bblbbl69@naver.com
                        </h2>
                    </div>
                    <ChevronRight color="#979797" strokeWidth={1.25} />
                </div>
                <div className="mx-2.5 grid grid-cols-3 text-sm border-b border-gray300">
                    <button
                        className="flex flex-col gap-2 items-center py-5 rounded-xl active:bg-gray100 ease-in-out duration-200"
                        onClick={() => navigation("collaborate")}
                    >
                        <Users strokeWidth={1.5} />
                        같이쓰기
                    </button>
                    <Link
                        to="share"
                        className="rounded-xl active:bg-gray100 flex items-center ease-in-out duration-200"
                    >
                        <div className="h-[calc(100%-20px)] w-full flex flex-col gap-2 items-center justify-center border-x border-gray200">
                            <Share strokeWidth={1.5} />
                            리스트 공유
                        </div>
                    </Link>
                    <Link
                        to="likes"
                        className="flex flex-col gap-2 items-center py-5 rounded-xl active:bg-gray100 ease-in-out duration-200"
                    >
                        <Heart strokeWidth={1.5} />
                        찜콩한 장소
                    </Link>
                </div>
                <div className="flex flex-col mt-5">
                    <Link
                        to="theme"
                        className="px-2.5 py-3 rounded-lg active:bg-gray100 ease-in-out duration-200 text-lg"
                    >
                        테마 설정
                    </Link>
                    <Link
                        to="http://pf.kakao.com/_QxbYxcn"
                        className="px-2.5 py-3 rounded-lg active:bg-gray100 ease-in-out duration-200 text-lg"
                    >
                        1:1 문의하기
                    </Link>
                    <Link
                        to="terms-of-service"
                        className="px-2.5 py-3 rounded-lg active:bg-gray100 ease-in-out duration-200 text-lg"
                    >
                        서비스 이용약관
                    </Link>
                    <Link
                        to="privacy-policy"
                        className="px-2.5 py-3 rounded-lg active:bg-gray100 ease-in-out duration-200 text-lg"
                    >
                        개인정보 처리방침
                    </Link>
                    <Link
                        to="information"
                        className="px-2.5 py-3 rounded-lg active:bg-gray100 ease-in-out duration-200 text-lg"
                    >
                        앱 정보
                    </Link>
                </div>
            </div>

            {openName === "auth" && <AuthSheet />}
            {openName === "logout" && (
                <Alert onClick={() => navigation("/login")}>
                    로그아웃 하시겠습니까?
                </Alert>
            )}
            {openName === "withdraw" && (
                <Alert onClick={() => openModal("recheck")}>
                    회원을 탈퇴 하시겠습니까?
                </Alert>
            )}
            {openName === "recheck" && (
                <Alert onClick={() => navigation("/login")}>
                    회원 탈퇴를 하면 데이터를 복구할 수 없어요.
                    <br />
                    정말 탈퇴 하시겠어요?
                </Alert>
            )}
        </>
    );
}
