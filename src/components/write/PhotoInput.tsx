import { Camera, X } from "lucide-react";

export default function PhotoInput() {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray500 text-sm">사진</label>
            <div className="flex gap-1">
                <div className="w-14 h-14 flex flex-col justify-center items-center bg-gray1000 rounded-xl text-white">
                    <Camera strokeWidth={1.5} />
                    <p className="text-xs">
                        0<span className="text-gray700">/10</span>
                    </p>
                </div>
                <div className="w-14 h-14 rounded-xl flex justify-end items-start bg-gray200">
                    <button className="p-1">
                        <X
                            size={20}
                            className="bg-black/50 rounded-full text-white p-0.5"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
