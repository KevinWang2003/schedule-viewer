<script>
  let question = '';
  let response = '';
  let result = '';
  let first = '';
  let second = '';

  function handleSubmit(question) {
    result = question.split(" ", 2)
    first = result[0]
    second = result[1]
    if (first == "plan") {
      response = "Helaas, er is dan al een meeting gepland. U bent wel beschikbaar tussen 12-13 uur en na 16 uur"
    } else if (first == "Plan") {
      response = "Ik zal het voor u in het rooster noteren."
    } else {
      response = "Helaas dit is niet mogelijk. Zoek naar een andere optie."
    }
  }

  function openMenu() {
    const element = document.getElementById("icon")
    if (element.classList.contains('open')) {
      element.classList.replace('open', 'closed')
      element.style.right = "0vw";
    } else if (element.classList.contains('closed')) {
      element.classList.replace('closed', 'open')
      element.style.right = "-18vw";
      question = '';
      response = '';
    }
  }
</script>

<div id="icon" class="chatbotForm closed" style="right: -18vw;">
  <div class="icon" on:click={openMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
  </div>
  <form on:submit|preventDefault={() => handleSubmit(question)}>
    <div class="form-container">
      <label>
        Plan new meeting: <br>
        <input type="text" bind:value={question} />
      </label>

      <button type="submit">Submit</button>
    </div>
  </form>

  {#if response}
    <div class="response-container">
      Response: {response}
    </div>
  {/if}
</div>

<style>
  .chatbotForm {
    position: fixed;
    top: 20vh;

    border: .1em solid black;
    background-color: lime;
    padding: 1% 2% 1% 3%;
    border-radius: 20%;
    width: 20vw;
    height: auto;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container label {
    margin-bottom: 10px;
  }

  .response-container {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  .icon {
    position: relative;
    top: 6vh;
    left: -5vw;
    padding: 1%;
    border: .1em solid black;
    width: 3vw;
    border-radius: 10vh;
    background-color: rgb(33, 130, 33);
  }

  .open {
    
  }

  .closed {
    
  }
</style>
