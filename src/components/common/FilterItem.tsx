export default function FilterItem({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="bg-gray1000 text-white text-xs rounded-lg pt-1 pb-1.25 pl-2 pr-2.25 p-[1,2.25,1.25,2]">
                {children}
            </div>
        </>
    );
}
