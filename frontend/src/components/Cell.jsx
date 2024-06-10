import React, { useEffect, useCallback, memo } from 'react';
import { useRecoilState } from 'recoil';
import { sudokuGridState, alertState } from '../store/atom';

const Cell = ({ row, col }) => {
  const [sudokuGrid, setSudokuGrid] = useRecoilState(sudokuGridState);
  const [showAlert, setShowAlert] = useRecoilState(alertState);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 2000); // Automatically hide alert after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [showAlert, setShowAlert]);

  const handleChange = useCallback((e) => {
    let newValue = parseInt(e.target.value, 10) || 0;
    if (newValue < 1 || newValue > 9) {
      setShowAlert(true);
      newValue = 0;
    }
    setSudokuGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[row] = [...newGrid[row]];
      newGrid[row][col] = newValue;
      return newGrid;
    });
  }, [row, col, setShowAlert, setSudokuGrid]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setSudokuGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[row] = [...newGrid[row]];
        newGrid[row][col] = 0;
        return newGrid;
      });
      setShowAlert(false);
    }
  }, [row, col, setShowAlert, setSudokuGrid]);

  return (
    <input
      className="border-2 border-blue-100 w-full h-full text-center outline-blue-300"
      type="text"
      value={sudokuGrid[row][col] === 0 ? '' : sudokuGrid[row][col]}
      onChange={handleChange}
      pattern="[1-9]"
      maxLength="1"
      onKeyDown={handleKeyDown}
    />
  );
};

export default memo(Cell);
