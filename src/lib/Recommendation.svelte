<script>
  import { calculateBMR, extractActivityLevelMultiplier, totalDailyEnergyExpenditure, calculateMacroSplit, 
  calculateActualMacros } from './calculations.js'

  export let userInput

  let BMR = calculateBMR(userInput)
  let activityMultiple = extractActivityLevelMultiplier(userInput)
  let TDEE = totalDailyEnergyExpenditure(BMR, activityMultiple)
  let macronutrientSplit = calculateMacroSplit(userInput)
  let macroSplitPercentages = macronutrientSplit.macroSplit 
  let macroBreakdown = calculateActualMacros(macroSplitPercentages, TDEE)
</script>

<div>
  <h2>Your Recommendations</h2>
  <p>Basal Metabolic Rate (BMR): {BMR} calories</p>
  <p>Your TDEE is: {TDEE}</p>
  <p>Your optimal Macro split is: {macronutrientSplit.macroSplitStr}</p>
  <p>Actual Macros: {macroBreakdown[0].toFixed(2)}g protein, {macroBreakdown[1].toFixed(2)}g carbs, {macroBreakdown[2].toFixed(2)}g fats</p>
  <!-- <p>Macro Dominance: {macroDominance}</p> -->
</div>