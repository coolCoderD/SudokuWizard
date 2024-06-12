import React, { useEffect, useCallback, memo } from 'react';
import { useRecoilState } from 'recoil';
import { sudokuGridState, alertState } from '../store/atom';

const Cell = ({ row, col, selectedCell,setSelectedCell }) => {
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


    if(newValue!==0){

    }
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


  const handleClick = useCallback(() => {
    setSelectedCell({ row, col });
  }, [row, col, setSelectedCell]);

  const getClassNames = () => {
    let classNames = " cursor-pointer border border-shakespeare-500 w-full h-full text-center outline-shakespeare-500 transition-colors duration-200 ease-in-out";
  
    // Add thicker borders for every third row and column
    if (row % 3 === 0) classNames += " border-t-2 :border-shakespeare-500";
    if (col % 3 === 0) classNames += " border-l-2 :border-shakespeare-500";
    if (row === 8) classNames += " border-b-2 lg:border-shakespeare-500";
    if (col === 8) classNames += " border-r-2 border-shakespeare-500";
  
    // Highlight selected cells
    if (selectedCell) {
      const { row: selectedRow, col: selectedCol } = selectedCell;
      if (row === selectedRow || col === selectedCol ||
          Math.floor(row / 3) === Math.floor(selectedRow / 3) && Math.floor(col / 3) === Math.floor(selectedCol / 3)) {
        classNames += " bg-shakespeare-100";
      }
    }
  
    // Add hover effect
    classNames += " hover:bg-shakespeare-50";
  
    return classNames;
  };
  

  return (
    <input
      className={getClassNames()}
      type="text"
      value={sudokuGrid[row][col] === 0 ? '' : sudokuGrid[row][col]}
      onChange={handleChange}
      pattern="[1-9]"
      maxLength="1"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    />
  );
};

export default memo(Cell);
