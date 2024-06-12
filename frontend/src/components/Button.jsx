import React from 'react'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { homeState } from '../store/atom'

const Button = ({ text }) => {
    const setHome=useSetRecoilState(homeState);
    return (
        <div>
            <Link to={text} onClick={()=>setHome(true)} className='buttonS hover:bg-gradient-to-r hover:from-shakespeare-500 hover:to-shakespeare-700 hover:text-white hover:border-shakespeare-600'>
                <svg
                    height="36px"
                    width="36px"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect fill="#2e6d8c" y="0" x="0" height="36" width="36"></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="3"
                        x="3"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="3"
                        x="13"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="3"
                        x="23"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="13"
                        x="3"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="13"
                        x="13"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="13"
                        x="23"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="23"
                        x="3"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="23"
                        x="13"
                        height="10"
                        width="10"
                    ></rect>
                    <rect
                        stroke-width="1"
                        stroke="#000000"
                        fill="#ffffff"
                        y="23"
                        x="23"
                        height="10"
                        width="10"
                    ></rect>
                </svg>
                <span className="now">Now</span>
                <span className="play">{text} Sudoku</span>
            </Link>

        </div>
    )
}

export default Button