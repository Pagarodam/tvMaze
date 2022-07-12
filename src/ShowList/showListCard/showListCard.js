import styles from './showListCard.module.css';

const ShowListCard = ({children})=>{
    return (
        <ul className={styles.showListCard}>
            {children}
        </ul>
    )
}
export default ShowListCard;