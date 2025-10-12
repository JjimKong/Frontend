import Logo from "@/assets/images/logo.svg";
import Character from "@/assets/images/character.svg";
import Button from "@/components/common/Button";
import KakaoIcon from "@/assets/icons/kakaoIcon.png";
import NaverIcon from "@/assets/icons/naverIcon.png";
import GoogleIcon from "@/assets/icons/googleIcon.png";

export default function Login() {
    return (
        <>
            <div className="w-full h-full bg-[#F2E8DC]">
                <div className="fixed w-full max-w-md flex flex-col items-center bottom-0">
                    <img
                        src={Logo}
                        alt="logo"
                        className="z-1 w-[18%] mb-[-30px]"
                    />
                    <img src={Character} alt="character" className="w-[70%]" />
                    <div className="w-full px-5">
                        <h1 className="text-2xl mb-5">
                            리뷰 클렌징 없는
                            <br />
                            나만의 솔직 리뷰 저장소
                        </h1>
                        <h2>
                            내가 좋아하는 장소{" "}
                            <span className="text-main500">찜콩</span>해서
                            저장하고 공유해요
                        </h2>
                    </div>
                    <div className="w-full flex flex-col gap-2.5 px-5 py-12.5">
                        <Button
                            className="bg-[#FEE500] text-gray1000 active:bg-[#f1d900]"
                            icon={KakaoIcon}
                        >
                            카카오톡으로 시작하기
                        </Button>
                        <Button
                            className="bg-[#03c75a] text-white active:bg-[#00b953]"
                            icon={NaverIcon}
                        >
                            네이버로 시작하기
                        </Button>
                        <Button
                            className="bg-white text-gray1000 active:bg-gray100"
                            icon={GoogleIcon}
                        >
                            구글로 시작하기
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
