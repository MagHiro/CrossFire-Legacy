import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import FirstParallax from "./../../assets/first-paralax.jpg";
import Download1 from "./DownloadElement/Download1";
import Download2 from "./DownloadElement/Download2";

function Download() {
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
            <Download1 />
            <Download2 />
            <Parallax
                blur={4}
                bgImage={FirstParallax}
                bgImageStyle={{ opacity: ".5" }}
            >
                    <div>
                        {isDesktop ? (
                            <div>
                                <Container style={{ height: 1100 }}>
                                <Row className="mt-5 justify-content-md-center">
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    PROCESSOR (CPU)
                                                </Card.Title>
                                                Minimum:<br></br>
                                                AMD Athlon™ 64 X2 Dual Core
                                                Processor 4600+ 2.4GHz<br></br>
                                                Intel® Core™2 Duo Processor
                                                T6400 2.0GHz
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                AMD Ryzen™ 3 1200 Processor @
                                                3.1GHz (4 Cores), ~3.4GHz
                                                <br></br>
                                                Intel® Core™ i5-3470 Processor @
                                                3.20GHz (4 Cores),~3.2GHz
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    MEMORY (RAM)
                                                </Card.Title>
                                                Minimum:<br></br>4 GB
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>8 GB
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    Video Card
                                                </Card.Title>
                                                Minimum:<br></br>
                                                NVIDIA® GeForce® 9500 GT
                                                <br></br>
                                                AMD Radeon™ HD 6450<br></br>
                                                Intel® HD Graphics 3000
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                NVIDIA® GeForce® GT 630<br></br>
                                                AMD Radeon™ HD 6570<br></br>
                                                Intel® HD Graphics 6000
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="mt-5 Row-Spec-1">
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    STORAGE (HDD)
                                                </Card.Title>
                                                Minimum:<br></br>
                                                15 GB of free space
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                25 GB of free space
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    OPERATING SYSTEM
                                                </Card.Title>
                                                Minimum:<br></br>Windows 7
                                                32-bit
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>Windows
                                                7/8/10 64-bit
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    DIRECTX©
                                                </Card.Title>
                                                Minimum:<br></br>
                                                DirectX© 9.0c
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                DirectX© 9.0c or higher
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="Spec-Section">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    INTERNET CONNECTION
                                                </Card.Title>
                                                Minimum:<br></br>
                                                Cable/DSL
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                Cable / DSL or better
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Container>
                            </div>
                        ) : (
                            <div>
                                <Container style={{ height: 2000 }}>
                                <Row className="mt-4">
                                    <Col>
                                        <Card className="download-head">
                                            <Card.Body className="download-header">
                                                <h2>
                                                    PLAY CROSSFIRE LEGACY ON
                                                    WINDOWS
                                                </h2>

                                                <Link
                                                    to={"#"}
                                                    className="btn btn-primary"
                                                >
                                                    Download For Windows{" "}
                                                    <img
                                                        className="ms-auto"
                                                        src={
                                                            require("./../../assets/download-icon.png")
                                                                .default
                                                        }
                                                        width={30}
                                                        height={30}
                                                    />
                                                </Link>
                                                <div className="download-footer">
                                                    <p>Version : v2.0.</p>
                                                    <p>Size : 11.8 GB.</p>
                                                    <p>
                                                        Hash
                                                        f3c7135a80ec9754986e3e55f229653184b3a82e957dd409ea36cde90290f835
                                                    </p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="mt-5 justify-content-md-center Spec-Section">
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    PROCESSOR (CPU)
                                                </Card.Title>
                                                Minimum:<br></br>
                                                AMD Athlon™ 64 X2 Dual Core
                                                Processor 4600+ 2.4GHz<br></br>
                                                Intel® Core™2 Duo Processor
                                                T6400 2.0GHz
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                AMD Ryzen™ 3 1200 Processor @
                                                3.1GHz (4 Cores), ~3.4GHz
                                                <br></br>
                                                Intel® Core™ i5-3470 Processor @
                                                3.20GHz (4 Cores),~3.2GHz
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    MEMORY (RAM)
                                                </Card.Title>
                                                Minimum:<br></br>4 GB
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>8 GB
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    Video Card
                                                </Card.Title>
                                                Minimum:<br></br>
                                                NVIDIA® GeForce® 9500 GT
                                                <br></br>
                                                AMD Radeon™ HD 6450<br></br>
                                                Intel® HD Graphics 3000
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                NVIDIA® GeForce® GT 630<br></br>
                                                AMD Radeon™ HD 6570<br></br>
                                                Intel® HD Graphics 6000
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    STORAGE (HDD)
                                                </Card.Title>
                                                Minimum:<br></br>
                                                15 GB of free space
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                25 GB of free space
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    OPERATING SYSTEM
                                                </Card.Title>
                                                Minimum:<br></br>Windows 7
                                                32-bit
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>Windows
                                                7/8/10 64-bit
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    DIRECTX©
                                                </Card.Title>
                                                Minimum:<br></br>
                                                DirectX© 9.0c
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                DirectX© 9.0c or higher
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title className="mb-3">
                                                    INTERNET CONNECTION
                                                </Card.Title>
                                                Minimum:<br></br>
                                                Cable/DSL
                                                <br></br>
                                                <br></br>
                                                Recommended:<br></br>
                                                Cable / DSL or better
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Container>
                            </div>
                        )}
                    </div>
            </Parallax>
        </>
    );
}

export default Download;
