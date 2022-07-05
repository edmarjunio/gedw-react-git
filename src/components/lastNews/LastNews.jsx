import styles from './LastNews.module.css'
import Title from '../title/Title'

function LastNews () {
    

    return (
        <>
        <Title>ÚLTIMAS NOTÍCIAS</Title>
        <div className={styles.lastNews}>
            <div className={styles.cardImage}>
                <img src="https://s2.glbimg.com/mZsCYm_oUJYto1sZKL9_V3vl10c=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/v/Y/551jRgR6uhPfWRYAr6hA/dsc-9030.jpg" height="500px" width="350px" />
            </div>
            <div className={styles.cardImage}>
                <img src="https://s2.glbimg.com/mZsCYm_oUJYto1sZKL9_V3vl10c=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/v/Y/551jRgR6uhPfWRYAr6hA/dsc-9030.jpg" height="500px" width="350px" />
            </div>
            <div className={styles.cardImage}>
                <img src="https://s2.glbimg.com/mZsCYm_oUJYto1sZKL9_V3vl10c=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/v/Y/551jRgR6uhPfWRYAr6hA/dsc-9030.jpg" height="500px" width="350px" />
            </div>
        </div>
        </>
    )
}

export default LastNews