import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private BASE_URL = 'http://localhost:3000'
  private CATEGORIES_URL = this.BASE_URL + '/categories'
  private LOGIN_URL = this.BASE_URL + '/login'
  private ADMIN_CATS = this.BASE_URL + '/api/admin/categories/all'
  private ADMIN_GALLERY = this.BASE_URL + '/api/admin/galleries/all'
  private IMAGE_UPLOAD = this.BASE_URL + '/image/upload'
  private CREATE_PRODUCT = this.BASE_URL + '/product/create'

  loggedIn = new Subject<boolean>()
  isLoggedIn = this.loggedIn.asObservable()

  cartChanged = new Subject<boolean>()
  cartChange = this.cartChanged.asObservable()

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

  changeAuthState(state: boolean) {
    this.loggedIn.next(state)
  }

  changeCart(state: boolean) {
    this.cartChanged.next(state)
  }

  getAllAdminCats() {
    return this.http.get(this.ADMIN_CATS).pipe(
      map(
        (response: any) => response
      )
    )
  }

  getAdminGalleries() {
    return this.http.get(this.ADMIN_GALLERY).pipe(
      map(
        (response: any) => response
      )
    )
  }

  uploadImage(file: FormData) {
    return this.http.post(this.IMAGE_UPLOAD, file).pipe(
      map(
        (response: any) => response
      )
    )
  }

  getPaginatePosts(start: number, end: number) {
    const link = `${this.BASE_URL}/products/paginate/${start}/${end}`
    return this.http.get(link).pipe(
      (response: any) => response
    )
  }

  createProduct(data: FormData) {
    return this.http.post(this.CREATE_PRODUCT, data).pipe(
      map(
        (res: any) => res
      )
    )
  }
}
