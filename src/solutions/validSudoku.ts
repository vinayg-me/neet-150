/**
 * 36. Valid Sudoku
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Example:
 *
 * Input: board =
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 *
 * Output: true
 *
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 */

const isValidSudoku = (board: string[][]) => {
  const validateRowwise = () => {
    for (let i = 0; i < board.length; i++) {
      const rowSet = new Set<string>();
      for (let j = 0; j < board[0].length; j++) {
        const curValue = board[i][j];
        if (curValue && curValue !== ".") {
          if (rowSet.has(curValue)) {
            return false;
          }
          rowSet.add(curValue);
        }
      }
    }
    return true;
  };
  const validateColWise = () => {
    for (let i = 0; i < board.length; i++) {
      const colSet = new Set<string>();
      for (let j = 0; j < board[0].length; j++) {
        const curValue = board[j][i];
        if (curValue && curValue !== ".") {
          if (colSet.has(curValue)) {
            return false;
          }
          colSet.add(curValue);
        }
      }
    }
    return true;
  };
  const validateBoxWise = () => {
    // Check each 3x3 box
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            const boxSet = new Set<string>();
            
            // Check each cell within the current 3x3 box
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const curValue = board[boxRow + i][boxCol + j];
                    if (curValue && curValue !== ".") {
                        if (boxSet.has(curValue)) {
                            return false;
                        }
                        boxSet.add(curValue);
                    }
                }
            }
        }
    }
    return true;
  };
  return validateRowwise() && validateColWise() && validateBoxWise();
};

export {
    isValidSudoku
}