import styles from './Subtitle.module.css'

function Subtitle ({children}) {
    return (

        <h3 className={styles.subtitle}>
            {children}
        </h3>
    )
}

export default Subtitle