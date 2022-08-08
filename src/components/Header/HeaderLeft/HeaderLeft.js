import s from './HeaderLeft.module.scss'
import userLogo from '../../../assest/images/userLogo.JPG'

const HeaderLeft = (props) => {

    return (
        <a href='#' className={s.headerLeft}>
            <div className={s.headerLogo}>
                <img src={userLogo} alt=""/>
            </div>
            <div className={s.headerInfo}>
                <p className={s.userName}>Zokhidov Komron</p>
                <p className={s.userProf}>Frontend</p>
            </div>
        </a>
    );
}

export default HeaderLeft;