<script>
    const scheduleAPI = "http://127.0.0.1:3010/";

    // async function upload() {
    //     const formData = new FormData();
    //     formData.append("userfile", document.getElementById("fileID").files[0]);

    //     const response = await fetch(scheduleAPI + `schedule`, {
    //         // headers: {
    //         //     Accept: "multipart/form-data",
    //         //     "Content-Type": "multipart/form-data",
    //         // },
    //         method: "POST",
    //         body: formData,
    //     });
    //     return response;
    // const request = new XMLHttpRequest();
    // request.open("POST", scheduleAPI + `schedule`);
    // request.send(formData);
    // }

    // async function convertExcel(event) {
    //     event.preventDefault();

    //     const file = document.getElementById('fileID').files[0];
    //     console.log(file.name)
    //     console.log(file.size)
    //     console.log(file.type)
    //     console.log(file)

    //     const response = await fetch(scheduleAPI + `schedule`, {
    //         headers: {
    //             Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    //             "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    //         },
    //         method: "POST",
    //         body: file,
    //     });
    //     return response;
    // }
</script>

<div class="container mx-auto">
    <h1 class="text-4xl">Drop</h1>
    <br />
    <form method="post" enctype="multipart/form-data">
        <div>
            <input type="file" id="fileID" name="filename" required />
        </div>
        <div class="mt-5">
            <button
                formaction="http://127.0.0.1:3010/schedule"
                id="submit"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >Submit</button
            >
        </div>
    </form>
</div>
