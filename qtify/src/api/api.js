import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        console.log(response.data)
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchFaqs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/faq`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}