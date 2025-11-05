import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({ showShadow = false }) {
    return (
        <header className={`${styles.header} ${showShadow ? styles.shadow : ''}`}>
            <div className={styles.brand}><Link to="/home">Netflix</Link></div>
            <nav className={styles.nav}>
                <Link to="/login">Entrar</Link>
            </nav>
        </header>
    )
}
