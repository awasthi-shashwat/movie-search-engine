async function makeRequest() {
    try {
        document.getElementById("container").innerHTML = "";
        let name = document.getElementById("name").value.toLowerCase();
        let response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=aecb401&`);
        let data = await response.json();
        if (data.Response === "False") {
            var source = "https://i.gifer.com/yH.gif";
            var img = document.createElement("img");
            img.setAttribute("class", "na");
            img.src = source;
            var parent = document.getElementById("container");
            parent.appendChild(img);
        }
        else {
            var source = data.Poster;
            console.log("data:", data);
            var img = document.createElement("img");
            img.src = source;
            var parent = document.getElementById("container");
            parent.appendChild(img);

            var title = document.createElement("div");
            title.textContent = `Title: ${data.Title}`;
            parent.appendChild(title);

            var year = document.createElement("div");
            year.textContent = `Year: ${data.Year}`;
            parent.appendChild(year);

            var genre = document.createElement("div");
            genre.textContent = `Genre: ${data.Genre}`;
            parent.appendChild(genre);

            var imdb = document.createElement("div");
            imdb.textContent = `IMDb rating: ${data.imdbRating}`;
            parent.appendChild(imdb);

            var recom = document.createElement("div");
            recom.textContent = "Recommended";
            if(data.imdbRating>=8.5) parent.appendChild(recom);
        }
    }
    catch (err) {
        console.log('err:', err);
    }
}