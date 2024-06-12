import React, { useMemo, useState } from 'react';
import Cell from './Cell';
import Alert from './Alert';
import InputField from './InputField';
import useSudokuSolver from '../hooks/solver';
import { useRecoilValue } from 'recoil';
import { homeState } from '../store/atom';
import './button.css'
import { Link } from 'react-router-dom';


const Grid3 = () => {
  const { handleSolve, isSolving, showAlert } = useSudokuSolver();
  const [selectedCell,setSelectedCell]=useState(null)
  const home=useRecoilValue(homeState);
  const cells = useMemo(() => Array.from({ length: 81 }), []);


  return (
    <>
    {
      home && <Link to='/' className='button z-50 rounded-full text-lg absolute top-4 left-9 animate-fade-up '>Home</Link>
    }
      <div className='flex flex-col justify-center items-center animate-fade-down mt-4 lg:mt-10'>
      {showAlert && <Alert text={"Enter a valid input"}  />}
        <div className='grid grid-cols-9 grid-rows-9 w-[50vw] h-[50vh] md:w-[50vw] md:h-[75vh] shadow-lg '>
          {cells.map((_, i) => (
            <div key={i} className='text-2xl font-light flex justify-center items-center'>
              <Cell key={i} row={Math.floor(i / 9)} col={i % 9} selectedCell={selectedCell} setSelectedCell={setSelectedCell} />
            </div>

          ))}
        </div>
        <div><InputField handleSolve={handleSolve} isSolving={isSolving} /></div>
        <div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Grid3);
