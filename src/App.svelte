<script>
  import UserInputManager from "./lib/UserInputManager.svelte"
</script>

<main>
  <div class="question-container">
    <UserInputManager />
  </div>
</main>

<style>
  .question-container {
    border: 1px solid red;
    width: 60vw;
    height: 60vh;
  }
</style>
