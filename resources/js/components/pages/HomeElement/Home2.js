import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import gambarPertama from './../../../assets/home2-section1.webp';
import gambarKedua from './../../../assets/home2-section2.webp';


function Home2() {


    const handleClick = event => {
        // 👇️ toggle class on click
        event.currentTarget.classList.toggle('gambar');
    }

    return (
        <Container className="Home2 mt-2">
            <h1>
                <span style={{ color: "white" }}>In-Game</span>
                <span style={{ color: "#dd7c35" }}> Preview</span>
            </h1>
            <p>
            CrossFire Legacy is making its game more enjoyable for players. Integrated with a variety of old and new maps to make it easier for players to play and have fun.
            </p>
            <section className="mt-3">
                <img onClick={handleClick} src={gambarPertama} height={500}/>
                <img onClick={handleClick} src={gambarKedua} height={500}/>
            </section>

        </Container>
    )
}

export default Home2;