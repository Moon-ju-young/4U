import MainPageButton from "../components/MainPageButton";
import MainInput from "../components/MainInput";
import Logo from "../assets/images/logo-img.svg";

const MainPage = () => {
  return (
    <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-24 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
      <img src={Logo} alt="Logo" className="w-248" />
      <MainPageButton />
      <MainInput />
    </div>
  );
};

export default MainPage;
