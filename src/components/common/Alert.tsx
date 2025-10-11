import { useModalStore } from "@/stores/useModal";
import Button from "./Button";

export default function Alert({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: () => void;
}) {
    const { closeModal } = useModalStore();
    const isMounted = useModalStore((state) => state.isMounted);

    return (
        <>
            <div
                className={`fixed top-0 w-full max-w-md h-screen z-9 duration-300 ${
                    isMounted ? "bg-black/50" : "bg-clear"
                }`}
            >
                <div
                    className={`z-10 fixed w-[calc(100%-40px)] inset-x-0 top-1/2 translate-y-[-50%] m-auto max-w-md bg-white rounded-2xl p-5 ease-in-out duration-300
                            ${
                                isMounted
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-[1%] opacity-0"
                            }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <p>{children}</p>
                    <div className="w-full grid grid-cols-2 gap-2.5 mt-5">
                        <Button color="gray" onClick={closeModal}>
                            취소
                        </Button>
                        <Button color="main" onClick={onClick}>
                            확인
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
