import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface GameState {
  player: String,
  player2: String,
  reference : String,
  col: Number,
  start : Boolean,
  pattern : [],
  table : [],
  dataGame:[],
  lastPick : Number,
  isWin : String
}

const initialState: GameState = {
 player: "Player A",
 player2: "Player B",
 reference : "",
 xcol : 0,
 start : false,
 pattern : [],
 table : [],
 dataGame:[],
 lastPick: 1,
 isWin : ""
}

const emptyData = (xcol) => {
  let Arr = [];
  for (let i = 0; i < (xcol*xcol); i++) {
    Arr[i] = 0;
  }
  return Arr;
}
const table = (xcol) => {

  let formath = [];
  for (let i = 0; i < xcol; i++) {
    let formathRow = [];
    for (let j = 1; j <= xcol; j++) {
      formathRow.push(((xcol*i) + j));
    }
    formath.push(formathRow);
  }
  return formath;
}
const patternWin = (xcol) => {
  let wins = [];
  let formath = table(xcol);
  let diagonalLeft = [];
  let diagonalRight = [];
  for (let i = 0; i < xcol; i++) {
    // horizontal
    wins.push(formath[i]);
    // vertical
    let vertical = [];
    for (let j = 0; j < xcol; j++) {
      vertical.push(formath[j][i])
    }
    wins.push(vertical);
    //diagonal - left
    diagonalLeft.push(formath[i][i]);
    //diagonal - right
    diagonalRight.push(formath[i][xcol-i-1]);
  }
  wins.push(diagonalLeft);
  wins.push(diagonalRight);
  return wins;
}

const makeid = (length) => {

  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    start: (state, action: PayloadAction) => {
        state.reference = makeid(10)
        state.player  = action.payload.player
        state.player2  = action.payload.player2
        state.xcol  = action.payload.xcol
      
        if(action.payload.player && action.payload.xcol){
            state.start = 1
        } else {
            state.start = 0
        }
     
        state.pattern = patternWin(action.payload.xcol)
        state.table = table(action.payload.xcol);
        state.dataGame = emptyData(action.payload.xcol);
    },
    stop: (state, action: PayloadAction) => {
      state.start = false
      state.pattern = []
      state.table = []
      state.dataGame = []
      state.lastPick=  1
      state.isWin = ""
      state.reference = ""
    },
    updateData: (state, action: PayloadAction) => {
      
      if(action.payload.dataGame) {
        state.dataGame = action.payload.dataGame;
        if(action.payload.lastPick == 1) {
          state.lastPick = 2;
         } else {
          state.lastPick = 1;
         }
      }
      
      if(action.payload.isWin) {
        state.isWin = action.payload.isWin
      }
      
      
    },

    reset: (state, action: PayloadAction) => {
      
    }
  },
  
})

export const { reset,updateData,nextPlay,start,stop } = gameSlice.actions
export const gameMatch = (state: RootState) => state.game

export default gameSlice.reducer
