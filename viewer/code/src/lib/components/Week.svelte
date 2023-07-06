<script>
    import Lesson from "./Lesson.svelte";

    const handleClick = (event) => {
        var target = event.target;
        var parent = target.parentElement;
        // var grandparent = parent.parentElement;
        const sibling = target.nextElementSibling;
        sibling.classList.remove("hidden");
        // console.log(sibling);
    };

    export let week;

    function handleMouseWheel(event) {
        const container = document.querySelector(".scrollable-container");
        const delta = Math.sign(event.deltaY);
        let scrollAmount = 0;
        if (delta > 0) {
            scrollAmount = window.innerWidth + 1; // Adjust the scroll amount as needed
        } else if (delta < 0) {
            scrollAmount = window.innerWidth; // Adjust the scroll amount as needed
        }

        container.scrollLeft += delta * scrollAmount;
    }

    function handleOnClick(direction) {
        const container = document.querySelector(".scrollable-container");
        let scrollAmount = 0;
        if (direction > 0) {
            scrollAmount = window.innerWidth + 1; // Adjust the scroll amount as needed
        } else if (direction < 0) {
            scrollAmount = -window.innerWidth; // Adjust the scroll amount as needed
        }

        container.scrollLeft += scrollAmount;
    }
</script>

<div class="week">
    <div
        class="text-center mb-10 scrollable-container"
        style="padding: 1%"
        on:wheel|preventDefault={handleMouseWheel}
    >
        <p class="text-2xl text-center">Week</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block"  style="position: relative; top: -2vh;" on:click={() => handleOnClick(-1)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        {#if week.weeknr != 36 && week.weeknr != 2}
            <p
                class="inline-block p-6 rounded-xl text-center bg-gray-200"
                style="opacity: 50%; position: relative; top: -2vh;"
            >
                {week.weeknr - 1}
            </p>
        {:else if week.weeknr == 2}
            <p
                class="inline-block p-6 rounded-xl text-center bg-gray-200"
                style="opacity: 50%; position: relative; top: -2vh;"
            >
                51
            </p>
        {:else}
            <p
                class="inline-block p-6 rounded-xl text-center bg-gray-200"
                style="opacity: 0%;position: relative; top: -2vh;"
            >
                {week.weeknr - 1}
            </p>
        {/if}
        <h3
            class="text-6xl inline-block p-6 rounded-xl text-center text-cyan-400 bg-gray-200"
            id={week.weeknr}
        >
            {week.weeknr}
        </h3>
        {#if week.weeknr != 5 && week.weeknr != 51}
            <p
                class="inline-block p-6 rounded-xl text-center bg-gray-200"
                style="opacity: 50%; position: relative; top: -2vh;"
            >
                {week.weeknr + 1}
            </p>
        {:else if week.weeknr == 51}
            <p
                class="inline-block p-6 rounded-xl text-center bg-gray-200"
                style="opacity: 50%; position: relative; top: -2vh;"
            >
                2
            </p>
        {:else}
            <p
                class="inline-block p-6 rounded-xl text-center bg-gray-200"
                style="opacity: 0%; position: relative; top: -2vh;"
            >
                {week.weeknr - 1}
            </p>
        {/if}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block" style="position: relative; top: -2vh;" on:click={() => handleOnClick(1)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div class="mo">
            <h3 class="text-center text-2xl">Monday</h3>
            {#each week.mo as mo}
                <Lesson lesson={mo} on:mousedown={handleClick} />
            {/each}
        </div>
        <div class="tu">
            <h3 class="text-center text-2xl">Tuesday</h3>
            {#each week.tu as tu}
                <Lesson lesson={tu} on:mousedown={handleClick} />
            {/each}
        </div>
        <div class="we">
            <h3 class="text-center text-2xl">Wednesday</h3>
            {#each week.we as we}
                <Lesson lesson={we} on:mousedown={handleClick} />
            {/each}
        </div>
        <div class="th">
            <h3 class="text-center text-2xl">Thursday</h3>
            {#each week.th as th}
                <Lesson lesson={th} on:mousedown={handleClick} />
            {/each}
        </div>
        <div class="fr">
            <h3 class="text-center text-2xl">Friday</h3>
            {#each week.fr as fr}
                <Lesson lesson={fr} on:mousedown={handleClick} />
            {/each}
        </div>
    </div>
</div>

<style>
    .scrollable-container {
        overflow-y: hidden;
        scroll-behavior: auto;
        max-height: 60vh;
    }

    .week {
        display: inline-block;
        width: 100vw; /* Adjust as needed */
        white-space: normal;
    }
</style>
