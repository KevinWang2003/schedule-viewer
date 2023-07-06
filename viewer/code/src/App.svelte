<script>
  import Schedule from "./lib/Schedule.svelte";
  import "./app.css";
  import Filters from "./lib/Filters.svelte";
  import Nav from "./lib/components/Nav.svelte";
</script>

<Nav />
<main id="background" class="pt-12 unselectable">
  <div style="background-color: rgb(255,255,255,.2);">
    <div class="">
      <Filters />
    </div>
  
    <div class="">
      <Schedule />
    </div>
  </div>
</main>

<style>
  #background {
    background: #F4EEE7;
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