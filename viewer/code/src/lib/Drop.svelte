<script>
    function convertExcel(event) {
      event.preventDefault();
      const file = document.getElementById('myFile')
      console.log('click');
      console.log(file.value)
    }
  </script>

<div class="container mx-auto">
    <h1 class="text-4xl">Drop</h1>
    <br>
    <form action="/action_page.php">
        <div>
            <input type="file" id="myFile" name="filename">
        </div>
        <div class="mt-5">
            <button on:click={convertExcel} id="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
    </form>
</div>
