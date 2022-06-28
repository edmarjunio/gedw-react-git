import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Header from '../src/components/header/Header'
import Button from '../src/components/button/Button'
import Notices from '../src/components/notices/Notices'

function Subscribers () {
    return (
        <>
        <Head>
            <title>PÁGINA DE ASSINANTES</title>
        </Head>
        <Header />       
        <Title>NOTICIÁRIO DO MENGÃO</Title>
        <Subtitle>Obrigado por fazer parte!</Subtitle>
        <Button>IR PARA LOJA</Button>
        <Notices></Notices>
               
        </>
    )
}

export default Subscribers