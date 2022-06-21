import React, { useState, useEffect } from "react";
import {
    Container,
    Button,
    Carousel,
    Row,
    Card,
    Col,
    Accordion,
} from "react-bootstrap";
import BannerLogo from "./../../assets/A9985.png";
import CrossfireLogo from "./../../assets/crossfire-logo.png";
import FirstParallax from "./../../assets/crossfire-2022-9610.webp";
import SecondParallax from "./../../assets/second-parallax.jpg";
import fototest from "./../../assets/BannerCrossfire1.jpg";
import discordlogo from "./../../assets/ds-logo.png";
import { Parallax } from "react-parallax";

function Home() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
    
    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    return (
        <>
            <Parallax
                blur={4}
                bgImage={FirstParallax}
                bgImageStyle={{ opacity: ".5" }}
            >
                <Container className="pageSize">
                    <div className="First-Parallax">
                        <div className="First-Parallax-leftside mt-5">
                            <img
                                src={CrossfireLogo}
                                height="150"
                                width="600"
                                style={{ margintop: "8px" }}
                            />

                            <p>
                                CrossFire is an online tactical first-person
                                shooter game developed by Smilegate
                                Entertainment for Microsoft Windows. It was
                                first released in South Korea on May 3, 2007.
                            </p>

                            <Button href="/download" variant="outline-light">
                                MAIN SEKARANG
                            </Button>
                        </div>

                        <div className="First-Parallax-rightside">
                            <img
                                src={BannerLogo}
                                style={{
                                    opacity: ".8",
                                    filter: "drop-shadow(2px 5px 30px #bd9e92)",
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </Parallax>
            <Container className="section-header">
                <h1> SIAPA DI BALIK KITA </h1>
            </Container>
            <Parallax
                blur={4}
                bgImage={SecondParallax}
                bgImageStyle={{ opacity: ".5"}}
                style={{height : '975px'}}
            >
                <Container className="Second-Parallax pageSize1">
                    <div>
                        {isDesktop ? (
                        <Carousel style={{ height: "350px" }}>
                        <Carousel.Item interval={10000}>
                            <Row className="gap-5">
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>balzpro [OWNER]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    {" "}
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>Anggi Marsya [AM DEV]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <Row className="gap-5">
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>Zippe [Owner / Admin]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    {" "}
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>Deph [Admin]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="gap-5">
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>@sugardaddy [Admin / Moderator]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    {" "}
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>Amarr [Community Assistant]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="gap-5">
                                <Col>
                                    {" "}
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={fototest}
                                            height="200"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h4>NickzJSA [Game Master]</h4>
                                                <a href="#">
                                                    <img
                                                        src={discordlogo}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </a>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                        ) : (
                            <Carousel style={{ height: "350px" }}>
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>balzpro [OWNER]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>Anggi Marsya [AM DEV]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>Deph [Admin]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>Zippe [Co-Owner / Moderator]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>@sugardaddy [Staff / Moderator]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>Ammar [Community Assistant]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                            <Carousel.Item interval={10000}>
                                <Row className="gap-5">
                                    <Col>
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={fototest}
                                                height="200"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>NickzJSA [Game Master]</h4>
                                                    <a href="#">
                                                        <img
                                                            src={discordlogo}
                                                            width="40"
                                                            height="40"
                                                        />
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Carousel.Item>      
                        </Carousel>
                        )}
                    </div>
                    
                    <div className="section-header ">
                        <h1> FREQUENTLY ASKED QUESTIONS </h1>
                    </div>
                    <Accordion className="FAQ">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                1. Apa itu Crossfire Legacy ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Crossfire Legacy adalah crossfire private server
                                yang di kembangkan oleh developer dari Indonesia
                                dan bisa dimainkan tanpa menggunakan VPN di
                                Indonesia dan sekitarnya.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                2. Client Versi berapa yang digunakan di
                                Crossfire Legacy ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Karena kerterbatasan jumlah Developer di
                                Crossfire Legacy, kami menggunakan Client Versi
                                2.0 untuk OBT yang akan datang dan kedepannya
                                nanti akan menggunakan Client Versi 3.0 setelah
                                game berjalan dengan normal.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                3. Kenapa Kalian harus Main Crossfire Legacy ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Crossfire Legacy memfokuskan visinya untuk
                                memberikan kesan nostalgia ketika bermain
                                Crossfire di masa kejayaanya. Tim Developer
                                mencoba untuk membangun kembali momen-momen emas
                                yang bisa kalian rasakan kembali dengan
                                konten-konten original dari Crossfire Lyto
                                layaknya seperti zaman dahulu. Kepuasan kalian
                                sebagai player menjadi prioritas kami dalam
                                pengembangkan game ini!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                4. Dimana Saya Bisa Mendownload Game Crossfire
                                Legacy Crossfire Legacy ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Crossfire Legacy bisa kalian download langsung
                                di <a href="#">https://cflegacy.net/download</a>{" "}
                                dan kalian bisa pilih beberapa opsi yang
                                tertampil terkait perangkat yang kalian ingin
                                gunakan Ketika bermain Crossfire.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                5. Apakah Crossfire Legacy Mempunyai Discord
                                Server ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Tentu saja! Crossfire Legacy memiliki Server
                                Discord publik untuk seluruh player. Komunitas
                                CFL bisa berkomunikasi dan mengobrol dengan satu
                                sama lainnya. Server Discord Crossfire Legacy
                                juga menjadi salah satu tempat para player bisa
                                berkomunikasi langsung dengan Moderator ataupun
                                Developer jikalau ada pertanyaan atau bantuan
                                yang ingin disampaikan. Kalian bisa langsung ke
                                Server Discord Crossfire Legacy melalui link
                                berikut{" "}
                                <a href="#"> https://discord.gg/cflegacy.</a>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                6. Bagaimana Cara Membeli Koin / Top Up Digame
                                Crossfire Legacy ?
                            </Accordion.Header>
                            <Accordion.Body>
                                Crossfire Legacy menyediakan layanan Top Up
                                menggunakan Payment Gateway yang terenskripsi
                                dan kalian bisa langsung membuka{" "}
                                <a href="#">https://cflegacy.net/topup</a>{" "}
                                setelah kalian login atau melalui menu dashboard
                                akun.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Parallax>
        </>
    );
}

export default Home;
