<script>
  import UserInputManager from "./lib/UserInputManager.svelte";
  import Recommendation from "./lib/Recommendation.svelte";

  let userInput;

  function handleUserInputSubmitted(event) {
    userInput = event.detail;
  }
</script>

<main>
  <div class="question-container">
    <UserInputManager on:userInputSubmitted={handleUserInputSubmitted} />
    {#if userInput}
      <Recommendation {userInput} />
    {/if}
  </div>
</main>

<style>
    .question-container {
      border: 1px solid red;
      width: 60vw;
      height: 60vh;
    }
</style>
