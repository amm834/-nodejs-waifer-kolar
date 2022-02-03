import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private BASE_URL = 'http://localhost:3000'
  private CATEGORIES_URL = this.BASE_URL + '/categories'
  private LOGIN_URL = this.BASE_URL + '/login'

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

  loginNow(data: FormData) {
    return this.http.post(this.LOGIN_URL, data).pipe(
      map(
        (value: any) => value
      )
    )
  }
}
