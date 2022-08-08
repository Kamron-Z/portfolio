import '../../App.scss';
import s from './Header.module.scss'
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className={s.headerInner}>
                    <HeaderLeft />
                    <HeaderRight/>
                </div>
            </div>
        </header>
    );
}

export default Header;