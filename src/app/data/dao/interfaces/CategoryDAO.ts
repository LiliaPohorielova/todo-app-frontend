import {BaseDAO} from "./BaseDAO";
import {Category} from "../../../model/Category";
import {Observable} from "rxjs/internal/Observable";

export interface CategoryDAO extends BaseDAO<Category> {

  search(title: string): Observable<Category[]>;
}
