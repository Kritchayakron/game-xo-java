import React from 'react'
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import Item from './Item';
import { v4 as uuid } from 'uuid';
import { gameMatch } from './gameSlice';
const CreateTable = () => {
  const setting = useAppSelector(gameMatch)
  let unique_id = uuid();
  return (
    <div key={unique_id} className='board'> 
    {setting.table.map((row, rowIndex) => (
            <Item key={unique_id+rowIndex} row={rowIndex}/>
      ))}
    </div>
  )
}

export default CreateTable
