/**
 * calculates the Basal Metabolic Rate (BMR) using the Mifflin St Jeor equation.
 * @param {number} weight - weight in kg
 * @param {number} height - height in cm
 * @param {number} age - age in years
 * @param {boolean} isMale - 🅱️ool indicating if user is male
 * @returns {number} calculated BMR
 */
export function calculateMifflinStJeorBMR(weight, height, age, isMale) {
  if (typeof weight !== 'number' || typeof height !== 'number' || 
    typeof age !== 'number' || typeof isMale !== 'boolean') {
    throw new Error('Invalid input parameters')
  }

  const weightInKg = weight
  const heightInCm = height
  const ageInYears = age

  if (isMale) {
    return (10 * weightInKg) + (6.25 * heightInCm) - (5 * ageInYears) + 5
  } else {
    return (10 * weightInKg) + (6.25 * heightInCm) - (5 * ageInYears) - 161
  }
}