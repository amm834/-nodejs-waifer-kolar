import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private BASE_URL = 'http://localhost:3000'
  private CATEGORIES_URL = this.BASE_URL + '/categories'

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(this.CATEGORIES_URL).pipe(
      map(
        (response: any) => response
      )
    )
  }

  getProuctByCatId(id: number) {
    const productByCatIdUrl = `${this.CATEGORIES_URL}/${id}`
    return this.http.get(productByCatIdUrl).pipe(
      map(
        (value: any) => value
      )
    )
  }
}
