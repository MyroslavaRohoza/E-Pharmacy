import css from "./loginPage.module.css";
import Image from "../../components/Image/Image.tsx";
import pill from "../../assets/img/white-round-pill.png";

function LoginPage(): JSX.Element {
  return (
    <div>
      <div className={css.titleContainer}>
        <h1 className={css.title}>
          Your medication,
          <Image imagePath={pill} imageAlt="pill" width={95} height={93} addClass={css.pillImg} />
          delivered Say goodbye to all
          <span className={css.accent}> your healthcare</span> worries with us
        </h1>
      </div>
    </div>
  );
}

export default LoginPage;
