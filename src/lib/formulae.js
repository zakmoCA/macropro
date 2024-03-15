export function calculateMifflinStJeorBMR(weight, height, age, isMale) {
  const weightInKg = weight
  const heightInCm = height
  const ageInYears = age

  if (isMale) {
    return (10 * weightInKg) + (6.25 * heightInCm) - (5 * ageInYears) + 5
  } else {
    return (10 * weightInKg) + (6.25 * heightInCm) - (5 * ageInYears) - 161
  }
}