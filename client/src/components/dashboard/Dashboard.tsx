import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from "./Dashboard.module.css"
import {start,gameMatch} from "../game/gameSlice";

export function Dashboard() {
  const [player,setPlayer] = useState("Player A");
  const [player2,setPlayer2] = useState("Player B");
  const [xcol,setXcol] = useState(3);
 
  const setting = useAppSelector(gameMatch)

  const dispatch = useAppDispatch()
  const updatePlayer = (event) => {
    setPlayer(event.target.value);
  };

  const updatePlayer2 = (event) => {
    setPlayer2(event.target.value);
  };


  const updateXcol = (event) => {
    setXcol(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col className={styles.dbHeader}><h1>Welcome to XO GAME</h1></Col>
      </Row>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Player 1</Form.Label>
          <Form.Control name="full-name" value={player} placeholder="Player A" onChange={updatePlayer}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Player 2</Form.Label>
          <Form.Control name="full-name" value={player2} placeholder="Player B" onChange={updatePlayer2}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number Column</Form.Label>
          <Form.Control type="number" value={xcol} min="3" placeholder="3" onChange={updateXcol}/>
        </Form.Group>
        <Button variant="primary" onClick={() => dispatch(start({"player":player,"player2":player2,"xcol":xcol}))}>Start</Button>

      </Form>
    </Container>
  )
}
