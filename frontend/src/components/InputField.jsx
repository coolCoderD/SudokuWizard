import React from 'react';

const InputField = ({ handleSolve, isSolving }) => {
  const cells = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <>
      {/* <div className="grid grid-cols-3 grid-rows-3 gap-1 h-40 w-96 lg:w-96 lg:h-96 mx-auto">
        {cells.map((cell, index) => (
          <div key={index} className="text-2xl font-bold flex justify-center items-center rounded-md bg-blue-100 hover:bg-blue-200">
            <button className="w-full h-full">{cell}</button>
          </div>
        ))}
        <button onClick={handleSolve} className="inline-flex col-span-1 font-bold bg-blue-400 text-white lg:py-6 lg:text-2xl py-2 px-6 rounded-lg focus:outline-none hover:bg-blue-500">
          Solve
        </button>
        <button onClick={() => window.location.reload()} className="inline-flex col-span-1 col-start-3 font-bold bg-red-500 text-white lg:py-6 lg:text-2xl py-2 px-6 rounded-lg focus:outline-none hover:bg-red-700">
          Reset
        </button>
      </div> */}
          <div>
      <button
        onClick={handleSolve}
        disabled={isSolving}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        {isSolving ? 'Solving...' : 'Solve Sudoku'}
      </button>
    </div>
    </>
  );
};

export default InputField;
