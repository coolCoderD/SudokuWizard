import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { alertState } from '../store/atom';
import Cell from './Cell';
import Alert from './Alert';
import InputField from './InputField';
import useSudokuSolver from '../hooks/solver';


const Grid3 = () => {
  const { handleSolve, isSolving, showAlert } = useSudokuSolver();
  const cells = useMemo(() => Array.from({ length: 81 }), []);


  return (
    <>
      {showAlert && <Alert text={"Enter a valid input"} />}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-5 animate-fade-down mt-14'>
        <div className='grid grid-cols-9 grid-rows-9 w-[50vw] h-[50vh] md:w-[50vw] md:h-[75vh]'>
          {cells.map((_, i) => (
            <div key={i} className='text-2xl font-bold flex justify-center items-center'>
              <Cell key={i} row={Math.floor(i / 9)} col={i % 9} />
            </div>
          ))}
        </div>
        <div>
          <InputField handleSolve={handleSolve} isSolving={isSolving} />
        </div>
      </div>
    </>
  );
}

export default React.memo(Grid3);
