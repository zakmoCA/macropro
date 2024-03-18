import { calculateMifflinStJeorBMR } from './formulae.js'

export function calculateBMR(userInput) {
  const { age, sex, height, weight } = userInput
  const mifflinStJeorBMR = calculateMifflinStJeorBMR(weight, height, age, sex === 'male')
  return mifflinStJeorBMR
}

export function calculateMacroSplit(...args) {
  //
}

export function calculateMacroDominance(...args) {
  // 
}

export function calculateActualMacros(...args) {
  // 
}