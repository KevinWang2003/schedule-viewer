<script>
  import Schedule from "./lib/Schedule.svelte";
  import "./app.css";
  import Filters from "./lib/Filters.svelte";
  import Nav from "./lib/components/Nav.svelte";
  import ChatBot from "./lib/ChatBot.svelte";
  export let props;
</script>

<Nav />
<main id="background" class="pt-12 unselectable">
  <div style="background-color: rgb(255,255,255,.2);">
    <div class="">
      <Filters />
    </div>

    <div class="">
      <!-- Pass the openai prop to the ChatBot component -->
      <ChatBot />
    </div>

    <div class="">
      <Schedule />
    </div>
  </div>
</main>

<style>
  #background {
    background-image: url("../src/assets/images/pier-lake-hallstatt-austria.jpg");
    /* background-image: url("../src/assets/images/drippert.png"); */

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
