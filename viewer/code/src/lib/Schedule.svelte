<script>
    import Week from "./components/Week.svelte";
    const fetchSchedule = (async () => {
        const response = await fetch("http://localhost:3010/schedule");
        console.log("wait what?", response);
        const jsonResponse = await response.json();
        //console.log(jsonResponse);
        return jsonResponse;
    })();
</script>

{#await fetchSchedule}
    <p>...waiting</p>
{:then data}
    <!-- The week -->
    <div class="scrollable-container">
        {#each data.data as week}
            <div class="week">
                <Week week={week} />
            </div>
        {/each}
    </div>
{:catch error}
    <p>An error occurred!</p>
{/await}

<style>
    .scrollable-container {
        overflow: hidden;
        white-space: nowrap;
        scroll-behavior: auto;
    }

    .week {
        display: inline-block;
        width: 100vw; /* Adjust as needed */
        white-space: normal;
    }
</style>