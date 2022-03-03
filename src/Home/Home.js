import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import image from '../Leauge Logo/image 1.png';
import './Home.css'



const Home = () => {
    return (
        <div className="container">
            <div className="footer-container">
                <h1>Helllo</h1>
            </div> 

            <div className="league-container">
                <Card className="single-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Premier League</Card.Title>
                    <Card.Text>
                        Sports Type : Football
                    </Card.Text>
                    <Button variant="primary">Explore</Button>
                </Card.Body>
                </Card>  

                <Card className="single-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Premier League</Card.Title>
                    <Card.Text>
                        Sports Type : Football
                    </Card.Text>
                    <Button variant="primary">Explore</Button>
                </Card.Body>
                </Card>  
            </div>
        </div>
    );
};

export default Home;