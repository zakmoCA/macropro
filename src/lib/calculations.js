import { calculateMifflinStJeorBMR } from './formulae.js'

/**
 * calculates the basal metabolic rate (bmr) for a user based on the mifflin st jeor equation.
 * @param {object} userInput - an object containing the user's age, sex, height, and weight.
 * @returns {number} the calculated bmr value.
 */
export function calculateBMR(userInput) {
  const { age, sex, height, weight } = userInput
  const mifflinStJeorBMR = calculateMifflinStJeorBMR(weight, height, age, sex === 'male')
  return mifflinStJeorBMR
}

/**
 * extracts the activity level multiplier from the user input.
 * @param {object} userInput - object which contains users selected activity level.
 * @returns {number} multiplier associated with users activity level, or 1 as a default.
 */
export function extractActivityLevelMultiplier(userInput) {
  if(userInput.activityLevel && userInput.activityLevel.multiplier) {
    return userInput.activityLevel.multiplier
  } else {
    console.log("select activity level")
    return 1
  }
}

/**
 * calculates the total daily energy expenditure (TDEE) based on the users BMR and activity level.
 * considers guideline multipliers for various levels of physical activity.
 * @param {number} BMR - users basal metabolic rate.
 * @param {number} activityMultiplier - multiplier corresponding to users physical activity level.
 * @returns {number} the calculated TDEE.
*/
export function totalDailyEnergyExpenditure(BMR, activityMultiplier) {
  const TDEE = BMR * activityMultiplier
  return TDEE
}

// ⬇️TODO after research

// -------------------------------------------------------------------
// below params are normie guidelines --> dive further into literature for extremes
// BMR x Katch-McArdle multipliers
// thermicEffectOfFood TEF ~ 10% total (20-30%P, 5-10!C, 0-3%F)
// exerciseActivityThermogenesis EAT ~ 5% for most
// nonExerciseActivityThermogenesis NEAT ~ 15% for most
// ---------------------------------------------------------------
export function calculateMacroSplit(userInput) {
  // start with 40/40/20 for typical user
  // as i refine my algo based on research extract functions

  // macro logic will involve combinations like below, flesh out
  // this is for relatively normal training/training-type/training goals --> 40/40/20
  if(userInput.exerciseLevel !== 'heavy' && userInput.exerciseDominance !== 'hybrid' 
    && userInput.goals !== 'gain_muscle' ) {
      const macroSplitStr = "40% Protein, 40% Carbs, 40% Fats."
      const macroSplit = [0.4, 0.4, 0.2]
      return { macroSplitStr, macroSplit }
  } else {
    console.log('error')
    return 1
  }
}

export function totalDailyIntake() {
  // 
}

export function calculateMacroDominance(userInput) {
  // 
}

export function calculateActualMacros(macroSplit, dailyIntake) {
  const proteinCalories = (macroSplit[0] * dailyIntake)
  const carbsCalories = (macroSplit[1] * dailyIntake)
  const fatsCalories = (macroSplit[2] * dailyIntake)

  const proteinGrams = proteinCalories / 4
  const carbsGrams = carbsCalories / 4
  const fatsGrams = fatsCalories / 9

  return [proteinGrams, carbsGrams, fatsGrams]
}