import styles from './Notices.module.css'

import Button from '../button/Button'

function Notices () {
    return (
        <div className="container">
            <div className={styles.noticesImage}>
                <img src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2016/07/FLAMENGO1.png" width="700px" />
            </div>
            <div className={styles.noticesText}>
                <h2>NOTÍCIAS</h2>
                <p>&bull; Fla é multado em R$ 20 mil por cantos homofóbicos e vai recorrer.</p>
                <p>&bull; Redução de penhora, vitórias no TRF e 1 x 0 no STJ: entenda a confiança do Flamengo em ação do Banco Central</p>
                <p>&bull; Flamengo vende 50 mil ingressos antecipados para volta ao Maracanã no jogo contra o Bangu</p>
                <Button>VER MAIS DETALHES</Button>
            </div>
        </div>
    )
}

export default Notices