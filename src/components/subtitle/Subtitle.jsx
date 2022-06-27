import styles from './Subtitle.module.css'

function Subtitle ({text}) {
    return (

        <h3 className={styles.subtitle}>{text}</h3>
    )
}

export default Subtitle