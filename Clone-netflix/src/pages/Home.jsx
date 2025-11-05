import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import styles from './Home.module.css'

const rows = [
    {
        id: 'recent',
        title: 'Últimas adições',
        items: Array.from({ length: 8 }).map((_, i) => ({
            id: i, title: `Título ${i + 1}`, subtitle: 'Gênero', image: `https://picsum.photos/400/300?random=${i + 1}`
        }))
    }
]

export default function Home() {
    return (
        <div className={styles.page}>
            <Header showShadow />
            <main className={styles.container}>
                <section className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>Título em destaque</h2>
                        <p className={styles.bannerText}>Descrição curta e chamativa para o destaque.</p>
                        <div className={styles.bannerActions}>
                            <button className={styles.play}>▶ Assistir</button>
                            <button className={styles.more}>+ Minha lista</button>
                        </div>
                    </div>
                </section>

                {rows.map(row => (
                    <section key={row.id} className={styles.row}>
                        <h3 className={styles.rowTitle}>{row.title}</h3>
                        <div className={styles.rowInner}>
                            {row.items.map(item => (
                                <Card key={item.id} title={item.title} subtitle={item.subtitle} image={item.image} />
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    )
}
