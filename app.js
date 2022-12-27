const form = document.querySelector('#searchForm');
const query = document.querySelector('#query');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImages(res.data);
    form.elements.query.value = "";
})


const makeImages = (shows) => {
    for (let showIndex of shows){
        if(showIndex.show.image){
        const newIMg = document.createElement('IMG');
        newIMg.src = showIndex.show.image.medium;
        document.body.append(newIMg);
        }
    }
}
