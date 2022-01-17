import { TOTAL_GRIDS, SIZE, WIN_CONDITIONS, GAME_RESULT } from './constants'

export const getSymbol = ({grids, position}) => {
  if (grids.length !== TOTAL_GRIDS) {
    return ''
  }
  return grids[position]
}

export const getGrids = ({steps = []}) => {
  const grids = new Array(TOTAL_GRIDS).fill('')
  for (const step of steps) {
    grids[step.position] = step.symbol
  }

  return grids
}

export const getTurn = ({steps = []}) => {
  return steps.length % 2 === 0 ? 'X' : 'O'
}

export const getGameResult = ({steps = []}) => {
  const xPositions = []
  const oPositions = []
  for (const step of steps) {
    if (step.symbol === 'X') {
      xPositions.push(step.position)
    } else {
      oPositions.push(step.position)
    }
  }

  // taking the intersection of each win condtion and current X/O Positions
  // if results lenght is 3, then win
  for (const condition of WIN_CONDITIONS) {
    if (
      xPositions.filter((value) => condition.includes(value)).length === SIZE
    ) {
      return GAME_RESULT.xWin
    } else if (
      oPositions.filter((value) => condition.includes(value)).length === SIZE
    ) {
      return GAME_RESULT.oWin
    }
  }

  // reaching this point means neither X or O has won
  return steps.length === TOTAL_GRIDS ? GAME_RESULT.tie : GAME_RESULT.ongoing
}
