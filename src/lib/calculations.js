import { calculateMifflinStJeorBMR } from './formulae.js'

export function calculateBMR(userInput) {
  const { age, sex, height, weight } = userInput
  const mifflinStJeorBMR = calculateMifflinStJeorBMR(weight, height, age, sex === 'male')
  return mifflinStJeorBMR
}

// ⬇️TODO after research

export function calculateMacroSplit(userInput) {
  // start with 40/40/20 for typical user
  // as i refine my algo based on research extract functions
}

export function calculateMacroDominance(userInput) {
  // 
}

export function calculateActualMacros(userInput) {
  //
}