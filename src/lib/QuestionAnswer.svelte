<script>
  let questionIndex = 0
  let inputType = ''

const questions = [
    { label: "Age:", inputType: "text" },
    { label: "Sex:", inputType: "radio" },
    { label: "Height (in cm):", inputType: "range" },
    { label: "Weight (in kg):", inputType: "range" },
    { label: "Activity Level:", inputType: "radio" },
    { label: "Goals:", inputType: "radio" }
  ]


  function getQuestion() {
    const currentQuestion = questions[questionIndex].label
    console.log(currentQuestion)
    console.log(questionIndex)
    questionIndex += 1
  }
  
</script>

<h1>{questions[questionIndex].label}</h1>

<input type={inputType} id="user-input">

<button on:click={getQuestion}>
  Next Question
</button>

<style>

</style>