import { calculateMifflinStJeorBMR } from './formulae.js'

export function calculateBMR(userInput) {
  const { age, sex, height, weight } = userInput
  const mifflinStJeorBMR = calculateMifflinStJeorBMR(weight, height, age, sex === 'male')
  return mifflinStJeorBMR
}

export function extractActivityLevelMultiplier(userInput) {
  if(userInput.activityLevel && userInput.activityLevel.multiplier) {
    console.log(userInput.activityLevel.multiplier)
    return userInput.activityLevel.multiplier
  } else {
    console.log("select activity level")
    return 1
  }
}


// below params are normie guidelines --> dive further into literature for extremes
// BMR x Katch-McArdle multipliers
// thermicEffectOfFood TEF ~ 10% total (20-30%P, 5-10!C, 0-3%F)
// exerciseActivityThermogenesis EAT ~ 5% for most
// nonExerciseActivityThermogenesis NEAT ~ 15% for most
export function totalDailyEnergyExpenditure(BMR, activityMultiplier) {
  const userBMR = BMR
  // const thermicEffectOfFood = ''
  // const exerciseActivityThermogenesis = ''
  // const nonExerciseActivityThermogenesis = ''

  const TDEE = BMR * activityMultiplier
  console.log(TDEE)
  return TDEE
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