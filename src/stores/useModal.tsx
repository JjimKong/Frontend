import { create } from "zustand";

interface ModalState {
    openName: string;
    isOpen: boolean;
    isMounted: boolean;
    openModal: (n: string) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    openName: "",
    isOpen: false,
    isMounted: false,
    openModal: (n) => {
        set({ openName: n, isOpen: true });
        setTimeout(() => set({ isMounted: true }), 1);
    },
    closeModal: () => {
        set({ isMounted: false });
        setTimeout(() => set({ isOpen: false, openName: "" }), 300);
    },
}));
