import style from './Heading.module.css';

export const Heading = (props) => {
  return (
    <div className={style.heading}>{props.text}</div>
  )
}