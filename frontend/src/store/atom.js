
import { atom, selector } from 'recoil';

export const sudokuGridState = atom({
  key: 'sudokuGridState',
  default: Array.from({ length: 9 }, () => Array(9).fill(0)), // Initialize as 9x9 grid filled with 0s
});

export const alertState=atom({
    key:"alertState",
    default:false
})


