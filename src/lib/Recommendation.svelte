<script>
  import { calculateBMR, calculateMacroSplit, calculateMacroDominance, calculateActualMacros } from './calculations.js'

  export let userInput

  let BMR
  let macroSplit
  let macroDominance
  let actualMacros

  $: {
    BMR = calculateBMR(userInput)
    // macroSplit = calculateMacroSplit()
    // macroDominance = calculateMacroDominance()
    // actualMacros = calculateActualMacros()
  }
</script>

<div>
  <h2>Your Recommendations</h2>
  <p>Basal Metabolic Rate (BMR): {BMR} calories</p>
</div>