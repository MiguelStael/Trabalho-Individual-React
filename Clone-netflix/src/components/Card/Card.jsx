import styles from '../Card/Card.module.css'
export default function Card({ title, subtitle, image }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.img} />
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}
