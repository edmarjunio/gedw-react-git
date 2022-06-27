import Head from 'next/head'

import Title from '../src/components/title/Title';
import Subtitle from '../src/components/subtitle/Subtitle';

function MengaoLandingPage () {
    return (
        <>
        <Head>
            <title>TÍTULO DA HOMEPAGE</title>
        </Head>
        <Title text="NOTICIÁRIO DO MENGÃO"/>
        <Subtitle text ="O seu site de notícias, do nosso Flamengo!"/>
        </>
    )
}

export default MengaoLandingPage