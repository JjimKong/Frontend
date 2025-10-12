export default function Card() {
    return (
        <>
            <div className="w-full h-21 flex flex-col justify-between bg-white rounded-2xl p-5">
                <div className="flex items-center gap-2">
                    <h1 className="whitespace-nowrap">장소 이름</h1>
                    <h2 className="text-gray500 truncate">카테고리 | 주소</h2>
                </div>
                <div className="flex justify-between gap-2 text-xs text-gray700">
                    <p>이름or별점</p>
                    <p>2025.09.28</p>
                </div>
            </div>
        </>
    );
}
