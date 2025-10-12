import Card from "@/components/mypage/Card";
import Header from "@/components/mypage/Header";
import { useState } from "react";
import Button from "@/components/common/Button";

export default function Collaborate() {
    const [isDelete, setIsDelete] = useState(false);

    return (
        <>
            <Header isDelete={!isDelete} onDelete={() => setIsDelete(true)}>
                {isDelete ? "같이 쓰기 삭제" : "같이 쓰기"}
            </Header>
            <div
                className={`w-full min-h-full p-5 pt-20 flex flex-col gap-2.5 bg-gray100 ${
                    isDelete && "pb-22.5"
                }`}
            >
                <Card />
                <Card />
            </div>
            <div
                className={`fixed bottom-0 w-full h-[90px] p-5 bg-[linear-gradient(#F7F7F700,#F7F7F7)] duration-200
                    ${
                        isDelete
                            ? "translate-y-0 opacity-100"
                            : "translate-y-full opacity-0"
                    }`}
            >
                <Button onClick={() => setIsDelete(false)}>취소</Button>
            </div>
        </>
    );
}
