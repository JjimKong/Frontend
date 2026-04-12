import { Camera, X } from "lucide-react";

export default function PhotoInput({
    images,
    setImages,
}: {
    images: string[];
    setImages: (i: string[]) => void;
}) {
    const imageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        const newImages = files.map((file) => URL.createObjectURL(file));
        const totalImages = [...images, ...newImages].slice(0, 10);
        setImages(totalImages);
    };

    const imageDeleteHandler = (image: number) => {
        setImages(images.filter((_, i) => i !== image));
    };

    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray500 text-sm">사진</label>
            <div className="relative flex gap-1 overflow-x-auto -mx-5 px-5">
                <div className="relative w-14 h-14 min-w-14 flex justify-center items-center bg-gray1000 rounded-xl text-white">
                    <input
                        type="file"
                        accept="image/*"
                        maxLength={10}
                        multiple
                        className="w-full h-full z-1 opacity-0"
                        onChange={imageSelectHandler}
                    />
                    <div className="absolute flex flex-col justify-center items-center">
                        <Camera strokeWidth={1.5} />
                        <p className="text-xs">
                            {images.length}
                            <span className="text-gray700">/10</span>
                        </p>
                    </div>
                </div>

                {images.map((imgUrl, index) => (
                    <div
                        key={index}
                        className="relative w-14 h-14 shrink-0 rounded-xl bg-gray200 overflow-hidden"
                    >
                        <img
                            src={imgUrl}
                            alt={`preview-${index}`}
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={() => imageDeleteHandler(index)}
                            className="absolute top-0 right-0 p-0.5 z-2"
                        >
                            <X
                                size={20}
                                className="bg-black/50 rounded-full text-white p-0.5 duration-200"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
