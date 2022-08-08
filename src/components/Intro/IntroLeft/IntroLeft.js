import s from "../Intro.module.scss";
import telegram from "../../../assest/images/telegram.svg";
import instagram from "../../../assest/images/instagram.svg";
import MyButton from "../../../UI/MyButton/MyButton";

const IntroLeft = () => {
    return (
        <div className={s.left}>
            <p className={s.sup}>Hello, I’m</p>
            <h1 className={s.name}>Zokhidov Komron</h1>
            <p className={s.prof}>Frontend</p>

            <div className={s.social}>
                <a href='https://t.me/kama_6923' className={s.socialItem} target={'_blank'}>
                    <img src={telegram} alt=""/>
                </a>
                <a href='https://www.instagram.com/kama_z_i_k/?hl=ru' className={s.socialItem} target={'_blank'}>
                    <img src={instagram} alt=""/>
                </a>
            </div>

            <div className={s.btnBlock}>
                <MyButton className={s.btn}>HIRE ME</MyButton>
                <MyButton className={s.btn}>SEE MY RESUME</MyButton>
            </div>
        </div>
    )
}

export default IntroLeft