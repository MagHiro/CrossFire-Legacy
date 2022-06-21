import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

function News() {
    return (
        <>
            <Container className="section-header" style={{ height: "20vh" }}>
                <h1> NEWS PAGE </h1>
            </Container>
            <div className="container" style={{ height: "800px" }}>
                <div className="row justify-content-center mt-3">
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px160"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default News;
