import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Input from '../Input/Input'
import Button from '../Button/Button'
import styles from './Login.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (!email || !password) { setError('Preencha email e senha'); return }
        // fake auth
        navigate('/home')
    }

    return (
        <div className={styles.page}>
            <Header showShadow />
            <div className={styles.hero}>
                <div className={styles.overlay} />
                <div className={styles.centerBox}>
                    <h1 className={styles.title}>Filmes, séries e muito mais.</h1>
                    <p className={styles.subtitle}>Assista onde quiser. Cancele quando quiser.</p>
                </div>

                <div className={styles.loginBox}>
                    <h2>Entrar</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="seu@email.com" />
                        <Input label="Senha" type="password" value={password} onChange={setPassword} placeholder="Senha" />
                        {error && <div className={styles.error}>{error}</div>}
                        <Button type="submit">Entrar</Button>
                        <div className={styles.remember}>Novo por aqui? <a href="#">Assine agora</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
