import Gnb from "@/components/common/Gnb";
import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <>
            <Outlet />
            <Gnb />
        </>
    );
}
