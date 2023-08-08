import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { reset,stop,gameMatch } from "./gameSlice";
import styles from "./Game.module.css"
import CreateTable from "./CreateTable";


export function Game() {
  const data = useAppSelector(gameMatch)
  const dispatch = useAppDispatch();
  return (
    <div>
      <Container>
       
      <Row>
        <Col className={styles.header}>
            <span className={styles.btnPlayer}>{data.player}</span>
            <span className={styles.btnPlayer}>{data.player2}</span>
      
            <Button className={styles.stopGame} variant="primary" onClick={() => dispatch(stop(0))}>Stop</Button>
        </Col>
      </Row>
      
      <div className="table-xo">
        <CreateTable></CreateTable>
      </div>
      </Container>
    </div>
  )
}
