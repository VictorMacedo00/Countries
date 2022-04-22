export const API_URL = "https://restcountries.com/v2/";

export function GET_ALL_COUNTRIES() {
    return {
        url: API_URL + "all?fields=name,population,region,capital,flags",
        options: {
            methos: "GET",
        }
    }
}

export function GET_COUNTRIE(name) {
    return {
        url: API_URL + `name/${name}?fields=name,borders,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,flags`,
        options: {
            methos: "GET",
        }
    }
}

export function GET_COUNTRIE_AT_CIOC(cioc) {
    return {
        url: API_URL + `alpha/${cioc}?fields=name`,
        options: {
            methos: "GET",
        }
    }
}
