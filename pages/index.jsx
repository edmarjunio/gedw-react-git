import {useState} from 'react'

import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Button from '../src/components/button/Button'
import Header from '../src/components/header/Header'

function MengaoLandingPage () {

    const [subscribers, setSubscribers] = useState(0)
    
    const handleClick = () => {
        console.log("Handle Click")
        setSubscribers(subscribers + 1)
    }

    return (
        <>
        <Header />
        <Head>
            <title>Noticiário do MENGÃO</title>
        </Head>
        <Title>NOTICIÁRIO DO MENGÃO</Title>
        <Subtitle> O site de notícias, do nosso Flamengo!</Subtitle>
        <Button onClick={handleClick}>ASSINE AGORA!!!</Button>
        <Subtitle>Assinantes: {subscribers}</Subtitle>
        </>
    )
}

export default MengaoLandingPage