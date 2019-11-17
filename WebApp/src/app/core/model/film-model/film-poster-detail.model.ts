export class FilmPosterDetailModel {
    imgUrl: string;
    title: string;
    description: string;
    time: string;
    date: string;
    type: string;
    categories: string;
    rates: number[];

    constructor() {
        this.rates = new Array(0);
    }
}