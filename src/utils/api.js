const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=ad6baf64ad75ee341315fda666f2d48e";

const GET = async(type, specific, ext="") => {
  const res = await fetch(BASE_URL + type + '/' + specific + API_KEY + ext);
  return await res.json();
}

const GETSEARCH = async(type, specific, ext) => {
  const res = await fetch(BASE_URL + type + '/&language=en-US' + specific + API_KEY + ext);
  return await res.json();
}

const GETSERIES = async(type, section, ext) => {
  const res = await fetch(`${BASE_URL}${type}/${section}${API_KEY}${ext}`);
  return res.json();
}


export { GET, GETSEARCH, GETSERIES };