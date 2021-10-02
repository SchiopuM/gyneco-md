import React from 'react';
//import { Container ,Row, Col} from 'react-bootstrap/Container';
import YouTube from 'react-youtube'
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Container';
import  Col  from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap'

const EducatieSexuala = () => {
    const opts = {
        height: '547',
        width: '1220',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onReady =(event) =>{
        // access to player in all event handlers via event.target
        return event.target.pauseVideo()}
    return (
        <Container>
            <Row>
                <Col>
                <h1>Inregistrate Webinar</h1>
                <InputGroup className="mb-3">
               <Button variant="outline-secondary" id="button-addon1">
                Button
               </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
                </Col>
                <Col>
                <div style={{textAlign:"center"}}>
                <h1>Webinare Gyneco.md</h1>
                </div>
             <YouTube videoId="8uNQOPO27lw" opts={opts} onReady={onReady} />
             </Col>
            </Row> 
        </Container>
    );
}

export default EducatieSexuala;
