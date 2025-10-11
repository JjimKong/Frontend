import { House, Plus, User } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Gnb() {
    return (
        <>
            <nav className="z-1 fixed w-full max-w-md h-[72px] bottom-0 grid grid-cols-3 bg-white border-t border-gray300">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 active:text-gray600 ${
                            !isActive && "text-gray500"
                        }`
                    }
                >
                    <House strokeWidth={1.5} />홈
                </NavLink>
                <Link
                    to="/write"
                    className="mx-5 flex flex-col items-center justify-center"
                >
                    <div className="w-8 h-8 flex justify-center items-center border-2 border-main500 rounded-full">
                        <Plus size={24} strokeWidth={2} color="#FF3939" />
                    </div>
                </Link>
                <NavLink
                    to="/mypage"
                    className={({ isActive }) =>
                        `mx-5 flex flex-col items-center justify-center text-xs ease-in duration-100 active:text-gray600 ${
                            !isActive && "text-gray500"
                        }`
                    }
                >
                    <User strokeWidth={1.5} />
                    마이페이지
                </NavLink>
            </nav>
        </>
    );
}
