const fetchChuckNorrisJSON = () => {
    const chuckid = "'WP4sjjVtR3ODb11FPpdoew'";
    const url = `https://api.chucknorris.io/jokes/random/`;
    axios.get(url)
        .then(response => response.data)
        .then(ChuckNorris => {
            const ChuckNorrisHtml =
                `<p>${ChuckNorris.value}</p>
        <img src =${ChuckNorris.icon_url} />
        `;
            document.querySelector('#chuck-norris').innerHTML = ChuckNorrisHtml;
        });
}

document.getElementById("ChuckNorrisButton").addEventListener("click", fetchChuckNorrisJSON)

    fetchChuckNorrisJSON();