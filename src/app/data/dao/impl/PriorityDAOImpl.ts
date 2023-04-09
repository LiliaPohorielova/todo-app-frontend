import {PriorityDAO} from "../interfaces/PriorityDAO";
import {Priority} from "../../../model/Priority";
import { Observable } from "rxjs/internal/Observable";
import {of} from "rxjs";
import {TestData} from "../../TestData";

export class PriorityDAOImpl implements PriorityDAO {

  create(T: Priority): Observable<Priority> {
    return undefined;
  }

  delete(id: number): Observable<Priority> {
    return undefined;
  }

  findAll(): Observable<Priority[]> {
    return of(TestData.priorities);
  }

  findById(id: number): Observable<Priority> {
    return undefined;
  }

  update(T: Priority): Observable<Priority> {
    return undefined;
  }

}