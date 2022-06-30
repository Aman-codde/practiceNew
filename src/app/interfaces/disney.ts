

    export interface Datum {
        films: string[];
        shortFilms: string[];
        tvShows: string[];
        videoGames: string[];
        parkAttractions: string[];
        allies: any[];
        enemies: any[];
        _id: number;
        name: string;
        imageUrl: string;
        url: string;
    }

    export interface RootObject {
        data: Datum[];
        count: number;
        totalPages: number;
        nextPage: string;
    }



