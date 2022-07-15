import { useNavigate } from "react-router-dom";
import styles from './Button.module.css';

const Button = ({label, images, review, summary}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/ShowSingleView");
    }
    return (
        <button 
            className={styles.button} onClick={handleClick}>{label}
        </button>
    )
}

export default Button;
