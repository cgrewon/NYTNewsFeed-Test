import { Article, Multimedia } from "../types";

const API_KEY = "dEcx7zShHcY1Kj5rUrrd1UZ2Tbi3KnHL";
const API_SECRET = "zlAwFJTQnJYHI5Vd";

const SECTIONS: string[] = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world"
];

class  Api {
    
    static getSections(): string[]{
        return SECTIONS;
    }

    static fetchStories (section: string): Promise<Article[]>{
        return new Promise((resolve, reject) => {

            const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    const articleList = json.results as Article[];
                    resolve(articleList);
                })
                .catch(ex => {
                    reject(ex);
                });

        });
    }


};


export default Api;