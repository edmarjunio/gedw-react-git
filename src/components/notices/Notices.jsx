import styles from './Notices.module.css'

import Button from '../button/Button'

function Notices () {
    return (
        <>
        <div className={styles.noticesContent}>
        <div className={styles.itemFlex50}>
            <div className={styles.noticesImage}>
                <img src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2016/07/FLAMENGO1.png"/>
            </div>
        </div>
        <div className={styles.itemFlex50}>
            <div className={styles.noticesText}>
                <div className={styles.noticesTextContent}><h2>ÚLTIMAS NOTÍCIAS</h2></div>
                <div className={styles.noticesTextContent}><p>&bull; Fla é multado em R$ 20 mil por cantos homofóbicos e vai recorrer.</p></div>
                <div className={styles.noticesTextContent}><p>&bull; Redução de penhora, vitórias no TRF e 1 x 0 no STJ: entenda a confiança do Flamengo em ação do Banco Central</p></div>
                <div className={styles.noticesTextContent}><p>&bull; Flamengo vende 50 mil ingressos antecipados para volta ao Maracanã no jogo contra o Bangu</p></div>
                <div className={styles.noticesTextContent}><Button>VER MAIS DETALHES</Button></div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Notices