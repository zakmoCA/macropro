<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let age = ''
  let sex = ''
  let height = ''
  let weight = ''
  let activityLevel = ''
  let exerciseLevel = ''
  let exerciseTypeDominance = ''
  let goals = ''

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary', multiplier: 1.2 },
    { value: 'lightly_active', label: 'Lightly Active', multiplier: 1.375 },
    { value: 'moderately_active', label: 'Moderately Active', multiplier: 1.55 },
    { value: 'very_active', label: 'Very Active', multiplier: 1.725 },
    { value: 'extremely_active', label: 'Extremely Active', multiplier: 1.9 },
  ]

  // UI will need descriptions of these
  const exerciseLevels = [
    { value: 'light', label: 'Light' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'heavy', label: 'Heavy' },
  ]
  // UI will need descriptions
  const exerciseDominance = [
    { value: 'strength_training_dominant', label: 'Mostly Strength Training' },
    { value: 'cardio_or_endurance_dominant', label: 'Mostly Cardio and/or Endurance Sports' },
    { value: 'hybrid', label: 'Cardio/Endurance and Strength Training heavy (hybrid)' },
  ]


  const goalOptions = [
    { value: 'lose_weight', label: 'Lose Weight' },
    { value: 'maintain_weight', label: 'Maintain Weight' },
    { value: 'gain_muscle', label: 'Gain Muscle' },
  ]

  function handleSubmit() {
  const selectedActivityLevel = activityLevels.find(level => level.value === activityLevel)

  const userInput = {
    age: parseInt(age),
    sex,
    height: parseFloat(height),
    weight: parseFloat(weight),
    activityLevel: selectedActivityLevel,
    exerciseLevel,
    exerciseTypeDominance,
    goals,
  }

  dispatch('userInputSubmitted', userInput)
  console.log(userInput)
}


</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Age:
    <input type="number" bind:value={age} required />
  </label>

  <label>
    Sex:
    <select bind:value={sex} required>
      <option value="">Select Sex</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </label>

  <label>
    Height (in cm):
    <input type="number" bind:value={height} required />
  </label>

  <label>
    Weight (in kg):
    <input type="number" bind:value={weight} required />
  </label>

  <label>
    Activity Level:
    <select bind:value={activityLevel} required>
      <option value="">Select Activity Level</option>
      {#each activityLevels as level}
        <option value={level.value}>{level.label}</option>
      {/each}
    </select>
  </label>

  <label>
    Exercise Level:
    <select bind:value={exerciseLevel} required>
      <option value="">Select Exercise Level</option>
      {#each exerciseLevels as level}
        <option value={level.value}>{level.label}</option>
      {/each}
    </select>
  </label>
  <label>
    Exercise Dominance:
    <select bind:value={exerciseTypeDominance} required>
      <option value="">Select Exercise Type</option>
      {#each exerciseDominance as dominance}
        <option value={dominance.value}>{dominance.label}</option>
      {/each}
    </select>
  </label>

  <label>
    Goals:
    <select bind:value={goals} required>
      <option value="">Select Goals</option>
      {#each goalOptions as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
  </label>

  <button type="submit">Submit</button>
</form>