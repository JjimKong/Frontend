import { Moon, Sun } from "lucide-react";
import Sheet from "../common/Sheet";

export default function ThemeSheet() {
    return (
        <Sheet>
            <div className="flex flex-col gap-5 items-start">
                <button className="flex gap-3 items-center justify-center">
                    <Sun />
                    라이트 모드
                </button>
                <button className="flex gap-3 items-center justify-center">
                    <Moon />
                    다크 모드
                </button>
            </div>
        </Sheet>
    );
}
