import { useNavigate } from "react-router";
import Button from "../components/Button";
import MainInput from "../components/MainInput";
import Logo from "../assets/images/logo.png";

const MainPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/list");
  };

  return (
    <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-24 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
      <img src={Logo} alt="Logo" className="w-248" />

      <Button type="" onclick={handleClick}>
        질문하러 가기
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          className="text-brown-40 fill-current"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.6875 9C3.6875 8.68934 3.93934 8.4375 4.25 8.4375H14.75C15.0607 8.4375 15.3125 8.68934 15.3125 9C15.3125 9.31066 15.0607 9.5625 14.75 9.5625H4.25C3.93934 9.5625 3.6875 9.31066 3.6875 9Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.10225 3.35225C9.32192 3.13258 9.67808 3.13258 9.89775 3.35225L15.1477 8.60225C15.3674 8.82192 15.3674 9.17808 15.1477 9.39775L9.89775 14.6477C9.67808 14.8674 9.32192 14.8674 9.10225 14.6477C8.88258 14.4281 8.88258 14.0719 9.10225 13.8523L13.9545 9L9.10225 4.14775C8.88258 3.92808 8.88258 3.57192 9.10225 3.35225Z"
          />
        </svg>
      </Button>

      <MainInput />
    </div>
  );
};

export default MainPage;
