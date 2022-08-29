
export const getGifs = async (category, limit = 20) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QPOtI1oCSLYxiu9miY7XgyR0W2lwVEgJ&q=${category}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    console.log(gifs)
    return gifs;
};