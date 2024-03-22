<script>
  import { calculateBMR, calculateMacroSplit, calculateMacroDominance, calculateActualMacros } from './calculations.js'

  export let userInput

  let BMR
  let macroSplit
  let macroDominance
  let actualMacros

  $: {
    BMR = calculateBMR(userInput)
    // macroSplit = calculateMacroSplit(userInput)
    // macroDominance = calculateMacroDominance(userInput)
    // actualMacros = calculateActualMacros(userInput)
  }
</script>

<div>
  <h2>Your Recommendations</h2>
  <p>Basal Metabolic Rate (BMR): {BMR} calories</p>
  <!-- <p>Macro Split: {macroSplit}</p>
  <p>Macro Dominance: {macroDominance}</p>
  <p>Actual Macros: {actualMacros.protein}g protein, {actualMacros.carbs}g carbs, {actualMacros.fat}g fat</p> -->
</div>