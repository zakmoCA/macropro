<script>
  import { calculateBMR, extractActivityLevelMultiplier, totalDailyEnergyExpenditure } from './calculations.js'

  export let userInput

  let BMR
  let activityMultiple
  let TDEE

  BMR = calculateBMR(userInput)
  activityMultiple = extractActivityLevelMultiplier(userInput)
  TDEE = totalDailyEnergyExpenditure(BMR, activityMultiple)
</script>

<div>
  <h2>Your Recommendations</h2>
  <p>Basal Metabolic Rate (BMR): {BMR} calories</p>
  <p>Your TDEE is: {TDEE}</p>
  <!-- <p>Macro Split: {macroSplit}</p>
  <p>Macro Dominance: {macroDominance}</p>
  <p>Actual Macros: {actualMacros.protein}g protein, {actualMacros.carbs}g carbs, {actualMacros.fat}g fat</p> -->
</div>