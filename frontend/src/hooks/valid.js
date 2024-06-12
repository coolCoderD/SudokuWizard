import { useCallback, useState } from "react";
import { sudokuGridState } from "../store/atom";
import { useRecoilValue } from "recoil";

const useValid = () => {
    const grid = useRecoilValue(sudokuGridState);
    const [valid, setValid] = useState(null);

    const isValid = useCallback((grid, row, col, num) => {
        for (let x = 0; x < 9; x++) {
            if (grid[row][x] === num || grid[x][col] === num || grid[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
                return false;
            }
        }
        return true;
    }, []);

    const validate = useCallback(() => {
        const gridCopy = grid.map(row => [...row]); // Create a copy to avoid direct mutation
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (gridCopy[r][c] !== 0) {
                    let num = gridCopy[r][c];
                    gridCopy[r][c] = 0;
                    if (!isValid(gridCopy, r, c, num)) {
                        setValid(false);
                        return;
                    }
                    gridCopy[r][c] = num;
                }
            }
        }
        setValid(true);
    }, [grid, isValid]);

    const resetValid = useCallback(() => {
        setValid(null);
    }, []);

    return { valid, validate, resetValid };
};

export default useValid;
