import classes from './Title.module.css'

function Title(props) {
  return <h1 className={classes.title}>{props.text}</h1>
}

export default Title