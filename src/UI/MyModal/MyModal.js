import s from './MyModal.module.scss'

const MyModal = (props) => {
  return (
      <div {...props} className={props.modal ? [`${s.modal} ${s.active}`] : s.modal}>
          {props.children}
      </div>
  )
}

export default MyModal