import styles from "../module.css/PeliCard.module.css"

export function PeliCard({ peli }) {
    const image = "https://image.tmdb.org/t/p/w300" + peli.poster_path;
    return (
    <li className={styles.peliCard}>
        <img widht={230} height={345} className={styles.peliImage} src={image} alt={peli.title}/>
        <div>{peli.title}</div>
    </li>
    )
}