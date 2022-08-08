import s from './MyButton.module.scss'

const MyButton = (props) => {
  return (
      <button className={`${s.button} ${props.className}`}>
          {props.children}
      </button>
  )
}

export default MyButton