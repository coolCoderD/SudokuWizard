import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sudokuGridState } from '../store/atom';
import useValid from '../hooks/valid';
import Alert from './Alert';
import AlertGreen from './AlertGreen';

const InputField = ({ handleSolve, isSolving }) => {
    const [grid,setGrid] = useRecoilState(sudokuGridState);
    const { valid, validate,resetValid } = useValid();
    const [showAlert, setShowAlert] = useState(false);

    const defaultGrid = Array(9).fill(Array(9).fill(0));

    const resetGrid = () => {
        setGrid(defaultGrid);
        resetValid(); // Reset validation state
        setShowAlert(false); // Hide any alerts
      };

    const handleClick = () => {
        validate();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // Show alert for 2 seconds
    };

    return (
        <>
            <div className='flex items-center gap-5 mt-4'>
                <button
                    onClick={handleClick}
                    className={`inline-flex items-center text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg shadow-lg transform transition-transform duration-300 ${valid === false
                            ? 'bg-gradient-to-r from-red-500 to-red-700'
                            : 'bg-gradient-to-r from-shakespeare-500 to-shakespeare-700'
                        }`}
                >
                    {valid === false ? (
                        <>
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                            Invalid
                        </>
                    ) : (
                        'Validate'
                    )}
                </button>
                <button
                    onClick={handleSolve}
                    disabled={!valid}
                    className={`inline-flex items-center text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg shadow-lg transform transition-transform duration-300 ${valid
                            ? 'bg-gradient-to-r from-shakespeare-500 to-shakespeare-700 cursor-pointer'
                            : 'bg-gradient-to-r text-shakespeare-500 cursor-not-allowed from-shakespeare-200 to-shakespeare-300'
                        }`}
                >
                    {isSolving ? 'Solving...' : 'Solve'}
                </button>
                <button
                    onClick={resetGrid}
                    className="inline-flex items-center text-white bg-gradient-to-r from-red-500 to-red-700 border-0 py-2 px-6 focus:outline-none rounded-full text-lg shadow-lg transform transition-transform duration-300"
                >
                    Reset
                </button>
            </div>
            {showAlert && (
                valid === false ? <Alert text={'grid is invalid'} /> : <AlertGreen text={'grid is valid'} />
            )}
        </>
    );
};

export default InputField;
