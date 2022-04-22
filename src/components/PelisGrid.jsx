import { PeliCard } from './PeliCard';
import pelis from '../Pelis.json';
import styles from '../module.css/PelisGrid.module.css'

export function PelisGrid() {
    return (
        <ul className={styles.peliGrid}>
            {pelis.map((peli) => (
                <PeliCard key={peli.id} peli={peli}/>
            ))}
        </ul>
    )
}