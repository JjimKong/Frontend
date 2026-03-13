import { SlidersHorizontal } from "lucide-react";
import { useModalStore } from "@/stores/useModal";
import FloatingButton from "./FloatingButton";

export default function FilterButton({ filter }: { filter: string[] }) {
    const { openModal } = useModalStore();

    return (
        <FloatingButton onClick={() => openModal("filter")}>
            <SlidersHorizontal
                color={filter.length > 0 ? "#FF3939" : "white"}
                strokeWidth={1.5}
            />
        </FloatingButton>
    );
}
