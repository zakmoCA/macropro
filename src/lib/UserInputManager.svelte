<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let age = ''
  let sex = ''
  let height = ''
  let weight = ''
  let activityLevel = ''
  let goals = ''

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary' },
    { value: 'lightly_active', label: 'Lightly Active' },
    { value: 'moderately_active', label: 'Moderately Active' },
    { value: 'very_active', label: 'Very Active' },
  ]

  // add exerciseLevels and description differentiating activity-level and exercise-level

  // add exerciseDominance (endurance, strength-training, hybrid etc)

  const goalOptions = [
    { value: 'lose_weight', label: 'Lose Weight' },
    { value: 'maintain_weight', label: 'Maintain Weight' },
    { value: 'gain_muscle', label: 'Gain Muscle' },
  ]

  function handleSubmit() {
    const userInput = {
      age: parseInt(age),
      sex,
      height: parseFloat(height),
      weight: parseFloat(weight),
      activityLevel,
      goals,
    }

    dispatch('userInputSubmitted', userInput)
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