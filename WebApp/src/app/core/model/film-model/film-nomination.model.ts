import { FilmNominationDetailModel } from "./film-nomination-detail.model";

export class FilmNominationModel {
    listFilmNominations: FilmNominationDetailModel[];
    numberFilmNominationCurrent: number;
    isLoadMore: boolean;

    constructor() {
        this.listFilmNominations = new Array(0);
        this.isLoadMore = true;
    }
}