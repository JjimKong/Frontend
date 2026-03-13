import { Star } from "lucide-react";

export default function Stars({ score }: { score: number }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="relative">
                    <Star size={12} className="text-gray-400" />
                    <div
                        className="absolute top-0 overflow-hidden"
                        style={{
                            width: `${Math.min(Math.max(score - i, 0), 1) * 100}%`,
                        }}
                    >
                        <Star size={12} fill="currentColor" />
                    </div>
                </div>
            ))}
        </div>
    );
}
