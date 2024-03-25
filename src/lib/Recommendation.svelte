<script>
  import { calculateBMR, extractActivityLevelMultiplier, totalDailyEnergyExpenditure, calculateMacroSplit } from './calculations.js'

  export let userInput

  let BMR
  let activityMultiple
  let TDEE
  let macroSplit

  BMR = calculateBMR(userInput)
  activityMultiple = extractActivityLevelMultiplier(userInput)
  TDEE = totalDailyEnergyExpenditure(BMR, activityMultiple)
  macroSplit = calculateMacroSplit(userInput)
</script>

<div>
  <h2>Your Recommendations</h2>
  <p>Basal Metabolic Rate (BMR): {BMR} calories</p>
  <p>Your TDEE is: {TDEE}</p>
  <p>Your optimal Macro split is: {macroSplit}</p>
  <!-- <p>Macro Dominance: {macroDominance}</p>
  <p>Actual Macros: {actualMacros.protein}g protein, {actualMacros.carbs}g carbs, {actualMacros.fat}g fat</p>  -->
</div>