const API_KEY = 'XJmxyXnU5J7CurUE2XLRYdZQVT037L4u'

export const getRandomGif = async () => {
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


  const response = await fetch(url, {
    "method": "GET",
    "headers": {}
  });
  const { data, meta } = await response.json();

  if (meta.status !== 200) {
    throw {
      msj: 'WTF!!! como se cayo esto ?'
    };
  }

  return data.images.fixed_height.url;
}

