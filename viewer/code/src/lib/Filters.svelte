<script>
    import Filter from "./components/filters/Filter.svelte";

    const selectedCardProperties = [];
    let selectedFilters = {
        teachers: [],
        groups: [],
    };

    const checkIfFilterIsAlreadyInArray = (filter, filterGroup) => {
        const properties = Object.keys(selectedFilters);
        let inArray = false;
        if (selectedFilters[filterGroup].includes(filter)) {
            inArray = true;
        }
        return inArray;
    };

    //find filters
    const addFilter = (filterGroup, filter) => {
        if (filterGroup in selectedFilters) {
            selectedFilters[filterGroup].push(filter);
        }
    };

    //remove filter
    const removeFilter = (filterGroup, filter) => {
        let index = selectedFilters[filterGroup].indexOf(filter);
        if (index !== -1) {
            selectedFilters[filterGroup].splice(index, 1);
        }
    };

    //change to colors of the filters
    const applyFilters = () => {
        const allLessons = document.querySelectorAll(".lesson");
        // find all filters (as property) in selectedFilters object
        const properties = Object.keys(selectedFilters);
        // find all filters in DOM
        const allFilters = [...document.querySelectorAll(".filter")];
        const refToAllFilter = [
            ...document.querySelectorAll('[data-filter="all"]'),
        ];
        // remove all selected filters
        allFilters.forEach((element) => {
            element.classList.remove("bg-cyan-200");
        });
        for (let i = 0; i < properties.length; i++) {
            if (selectedFilters[properties[i]].length === 0) {
                // find the specific filtergroup and the all filter.
                refToAllFilter.forEach((element) => {
                    // add the background to the element
                    const myEl = properties[i];
                    if (element.dataset.filterGroup === myEl) {
                        element.classList.add("bg-cyan-200");
                    }
                });
            } else {
                selectedFilters[properties[i]].forEach((filter) => {
                    const ref = [
                        ...document.querySelectorAll(
                            `[data-filter="${filter}"]`
                        ),
                    ];
                    ref.forEach((element) => {
                        element.classList.remove("bg-slate-50");
                        element.classList.add("bg-cyan-200");
                    });
                });
            }
        }
    };

    const teacherInTeacherGroup = (teacher, teacherGroup) => {
        let inArray = false;
        if (teacherGroup.includes(teacher)) {
            console.log(`${teacher} is in ${teacherGroup}`);
            inArray = true;
        }
        return inArray;
    };

    // apply the filters to the schedule
    const showLessonBasedOnFilter = () => {
        const allLessons = document.querySelectorAll(".lesson");
        // remove all filters
        [...allLessons].forEach((lesson) => {
            lesson.classList.remove("hidden");
        });
        // all available filters
        const properties = Object.keys(selectedFilters);

        // show only items in the filter
        for (let i = 0; i < properties.length; i++) {
            if (selectedFilters[properties[i]].length == 0) {
                // of the property with the length 0 show all elements
            } else {
                // show only the lessons containing the filter
                selectedFilters[properties[i]].forEach((filter) => {
                    for (let j = 0; j < allLessons.length; j++) {
                        // a node in the nodelist is an object with attributes to get the information
                        // based on a variable instead of the . notatation use the
                        // associative array notation
                        // allLessons[j].datasest.properties[i] to ...
                        const filtergroup =
                            allLessons[j]["dataset"][properties[i]];
                        const filtername = filter;

                        // alles is hidden tenzij all is geselecteerd
                        // kijk daarna welke filters er aan staan.
                        // als de filternaam in de data-set-filter voorkomt laat hem dan zien.
                        // als er twee filternamen staan kijk dan niet of de combinatie van die namen voorkomt maar of een van de twee voorkomt
                        if (!teacherInTeacherGroup(filtername, filtergroup)) {
                            allLessons[j].classList.add("hidden");
                        }
                    }
                });
            }
        }
    };

    const handleSelectedFilter = (event) => {
        const target = event.target;
        const chosenFilter = target.dataset.filter;
        const chosenFilterGoup = target.dataset.filterGroup;

        /**
         * If chosenfilter is all
         * - do not add it to the array
         * else
         */
        if (chosenFilter == "all") {
            selectedFilters = {
                teachers: [],
                groups: [],
            };
        } else {
            if (checkIfFilterIsAlreadyInArray(chosenFilter, chosenFilterGoup)) {
                removeFilter(chosenFilterGoup, chosenFilter);
            } else {
                addFilter(chosenFilterGoup, chosenFilter);
            }
        }
        //change colors
        applyFilters();
        //
        showLessonBasedOnFilter();
    };

    function hoverEffect() {
        const mainButton = document.getElementById("filterButton");
        const button1 = document.getElementById("generalFilterButton");

        if (!mainButton.classList.contains("moved")) {
            // Show the other buttons
            button1.classList.remove("hidden");

            // Move the main button to the right
            mainButton.classList.add("moved");
        } else {
            // Hide the other buttons
            button1.classList.add("hidden");

            // Move the main button to the left
            mainButton.classList.remove("moved");
        }
        console.log(mainButton.classList);
    }
</script>

<div class="p-5 grid grid-cols-2 md:grid-cols-12 gap-1">
    <h3
        id="filterButton"
        class="text-black bg-cyan-100 hover:bg-cyan-200 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        on:click={() => hoverEffect()}
    >
        Filters <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-5 -1 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
        </svg>
    </h3>
    <div
        id="generalFilterButton"
        class="grid grid-cols-2 md:grid-cols-2 gap-1 hidden"
        style="width: 17vw; margin-top: 1vh"
    >
        <Filter
            filter="teachers"
            name="Teachers"
            on:mousedown={handleSelectedFilter}
        />

        <Filter
            filter="groups"
            name="Groups"
            on:mousedown={handleSelectedFilter}
        />
    </div>
</div>

<style>
    .hidden {
        display: "none";
    }

    .moved {
        left: 50vw;
    }
</style>
