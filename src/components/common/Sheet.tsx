import { useModalStore } from "@/stores/useModal";

export default function Sheet({ children }: { children: React.ReactNode }) {
    const { closeModal } = useModalStore();
    const isMounted = useModalStore((state) => state.isMounted);

    return (
        <>
            <div
                className={`fixed top-0 w-full max-w-md h-screen z-9 duration-300 ${
                    isMounted ? "bg-black/50" : "bg-clear"
                }`}
                onClick={closeModal}
            >
                <div
                    className={`z-10 fixed bottom-0 w-full inset-x-0 mx-auto max-w-md bg-white rounded-t-2xl px-5 pt-7.5 pb-15 ease-in-out duration-300
                        ${
                            isMounted
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>
    );
}
