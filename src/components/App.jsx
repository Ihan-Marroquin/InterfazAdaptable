import { PelisGrid } from "./PelisGrid";
import styles from '../module.css/App.module.css'

export function App(){
    return (
        <div>
            <header>
                <h1 className={styles.title}>Peliculas</h1>
            </header>
            <main>
                <PelisGrid />
            </main>
        </div>
    )
}

