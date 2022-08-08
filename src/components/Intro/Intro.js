import s from './Intro.module.scss'
import introUser from '../../assest/images/introUser.svg'
import IntroLeft from "./IntroLeft/IntroLeft";

const Intro = () => {
  return (
      <div>
          <div className='container'>
              <div className={s.inner}>
                  <IntroLeft />
                  <div className={s.right}>
                      <img src={introUser} alt="" className={s.rightImg}/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Intro