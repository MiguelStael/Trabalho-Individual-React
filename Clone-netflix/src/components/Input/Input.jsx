import styles from './Input.module.css'
export default function Input({ label, type = 'text', value, onChange, placeholder }) {
    return (
        <label className={styles.wrapper}>
            <span className={styles.label}>{label}</span>
            <input className={styles.input} type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
        </label>
    )
}
