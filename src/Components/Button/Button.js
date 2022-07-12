import styles from './Button.module.css';

const Button = ({label}) =>{
    const show = ()=>{console.log("cliky, clicky")}
    return (
        <button className={styles.button} onClick={show}>{label}

        </button>
    )
}

export default Button;