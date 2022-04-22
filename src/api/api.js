export const API_URL = "https://restcountries.com/v2/";

export function GET_ALL_COUNTRIES () {
    return {
        url: API_URL + "all?fields=name,population,region,capital,flags",
        options: {
            methos: "GET",
        }
    }
}