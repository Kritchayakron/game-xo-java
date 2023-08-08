import React ,{useEffect, useState}  from 'react'
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { v4 as uuid } from 'uuid';
import { reset,updateData,gameMatch} from "./gameSlice"
import axios from 'axios';
import { domainBackend } from '../../config/config';

const Item = (props) => {
  const data = useAppSelector(gameMatch)
  const dispatch = useAppDispatch()
  let unique_id = uuid();
  const xcol = data.xcol; 
  
  const selectBox = (dataNow,itemID) => () => {
    if(data.dataGame[itemID-1] > 0 || data.isWin != "") {
      return false;
    }

    let newData = data.dataGame.map((value,index) => {
      if(value == 0){
        return index == (itemID-1) ? data.lastPick : value;
      } else {
        return value;
      }
      
    });
    dispatch(updateData({dataGame:newData,lastPick : data.lastPick}));
    
    let PlayerSelected = getPlayerSelected(newData,1);
    let BotSelected = getPlayerSelected(newData,2);
  
    getScore(PlayerSelected,data.player);
    getScore(BotSelected,data.player2);

    const d = new Date();
    let time = d.getTime();

    axios.post(domainBackend, {
      reference: data.reference,
      name: data.lastPick == 1 ? data.player : data.player2,
      box : itemID,
      createdAt: time

    })
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
     // console.log(error);
    });
  }

  const getPlayerSelected = (newData,isPlayer = 1) => {
    let playerSelected = [];
    newData.map((value,index) => {
      if(value == isPlayer) {
        playerSelected.push((index+1));
      }
    })
    return playerSelected;
  }

  const getScore = (PlayerSelected,type) => {
   
    data.pattern.map((pattern,index) => {
      let score = 0;
      pattern.map(val =>{
        const found = PlayerSelected.find(element => element == val);
        if(found) {
          score++;
          if(score == data.xcol){
            //alert('win')
            dispatch(updateData({'isWin':'player'}))
            alert(type+ ' win!')
          }
        }
      })
    })
    
  }
  
  useEffect(()=>{
    //console.log('useEffect');
  },[]);
  //console.log(data.dataGame);
  return (
    <div key={unique_id} className='table-xo-row'>
    {data.table.map((col, colIndex) => (
        <div key={unique_id+colIndex} className="xo-list" onClick={selectBox(data.dataGame[(xcol*props.row) + colIndex], ((xcol*props.row) + colIndex+1))}> 
            {data.dataGame[(xcol*props.row) + colIndex] == 1 ? 
            "x" : 
            data.dataGame[(xcol*props.row) + colIndex] == 2 ? "0" : 
            ""}     
        </div>
   ))}
   </div>
  )
}

export default Item
