<script>
    export let filter;
    export let name;
    const fetchData = (async () => {
        const response = await fetch(`http://localhost:3010/${filter}`);
        console.log("wait what?", response);
        const jsonResponse = await response.json();
        return jsonResponse;
    })();
</script>

<div class="flex flex-col">
    <div class="dropdown">
        <h3 id={name} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{name} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg></h3>
        <div class="dropdown-content">
            {#await fetchData}
                <p>...waiting</p>
            {:then data}
                <ul class="p-2">
                    <li
                        class="filter inline-block m-1 border-2 rounded-md p-1 bg-violet-400 text-sm"
                        data-filter="all"
                        data-filter-group={filter}
                        on:mousedown
                    >
                        all
                    </li>

                    <br>
                    {#each data as filterItem}
                        <li
                            class="filter inline-block m-1 border-2 rounded-md p-1 text-slate-500 bg-slate-50 border-slate-50 text-sm"
                            data-filter={filterItem}
                            data-filter-group={filter}
                            on:mousedown
                        >
                            {filterItem}
                        </li>
                    {/each}
                </ul>
            {:catch error}
                <p>An error occurred!</p>
            {/await}
        </div>
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        /* min-width: 160px; */
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
