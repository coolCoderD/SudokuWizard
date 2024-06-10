import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { sudokuGridState, alertState } from '../store/atom';

const useSudokuSolver = () => {
  const [grid, setGrid] = useRecoilState(sudokuGridState);
  const [showAlert, setShowAlert] = useRecoilState(alertState);
  const [isSolving, setIsSolving] = useState(false);
  console.log(grid);

  const isValid = useCallback((grid, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num || grid[x][col] === num || grid[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
        return false;
      }
    }
    return true;
  }, []);

  const solveSudoku = useCallback((grid) => {
    const findEmpty = (grid) => {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (grid[r][c] === 0) {
            return [r, c];
          }
        }
      }
      return null;
    };

    const emptySpot = findEmpty(grid);
    if (!emptySpot) return true; // No empty spots, puzzle solved
    const [row, col] = emptySpot;

    for (let num = 1; num <= 9; num++) {
      if (isValid(grid, row, col, num)) {
        grid[row][col] = num;
        if (solveSudoku(grid)) {
          return true;
        }
        grid[row][col] = 0;
      }
    }
    return false;
  }, [isValid]);

  const handleSolve = useCallback(() => {
    setIsSolving(true);
    const gridCopy = grid.map(row => [...row]);
    if (solveSudoku(gridCopy)) {
      setGrid(gridCopy);
    } else {
      setShowAlert(true);
      console.log("No solution exists");
    }
    setIsSolving(false);
  }, [grid, solveSudoku, setGrid, setShowAlert]);

  return { handleSolve, isSolving, showAlert };
};

export default useSudokuSolver;
