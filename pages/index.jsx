import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Button from '../src/components/button/Button'

function MengaoLandingPage () {
    return (
        <>
        <Head>
            <title>TÍTULO DA HOMEPAGE</title>
        </Head>
        <Title text="NOTICIÁRIO DO MENGÃO"/>
        <Subtitle text ="O seu site de notícias, do nosso Flamengo!"/>
        <Button>ASSINE AGORA!!!</Button>
        </>
    )
}

export default MengaoLandingPage