import s from "./HeaderRight.module.scss";
import MyButton from "../../../UI/MyButton/MyButton";
import MyModal from "../../../UI/MyModal/MyModal";
import {useState} from "react";

const HeaderRight = () => {

    let [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    return (
        <nav>
            <div className={s.navItem}>
                <a href="#" className={s.navLink}>Work</a>
            </div>
            <div className={s.navItem}>
                <a href="#" className={s.navLink}>About me</a>
            </div>
            <div className={s.navItem}>
                <a href="#" className={s.navLink}>Blog</a>
            </div>
            <div className={s.navItem}>
                <a href="#" className={s.navLink}>Contact</a>
            </div>
            <div className={s.navItem} onClick={openModal}>
                <MyButton>Hire me</MyButton>
            </div>
            <MyModal onClick={closeModal} modal={modal}>
                <div className={s.modalContainer} onClick={e => e.stopPropagation()}>

                </div>
            </MyModal>
        </nav>
    )
}

export default HeaderRight