import { Injectable, Inject,  } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient,
    @Inject('baseURL') private baseURL: string,
  
  ) { }



  getCall(): Observable<any> {
  return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getName(term) : Observable<any>{
    return this.http.get(`https://www.skymetweather.com/pollution/search?v=1&term=${term}`)
  }

  getStates(body): Observable<any> {
    return this.http.post(this.baseURL+'state/states',body).pipe(map(results => results));

  }

  getDistrictBystateId(body): Observable<any> {
    return this.http.post(this.baseURL+'district/districtByState',body).pipe(map(results => results));

  }

  getProducts(body): Observable<any> {
    return this.http.post(this.baseURL+'product/products',body).pipe(map(results => results));

  }

  getProductById(body): Observable<any> {
    return this.http.post(this.baseURL+'product/productById',body).pipe(map(results => results));

  }

  orderCreate(body): Observable<any> {

    
    return this.http.post(this.baseURL+'order/create',body).pipe(map(results => results));

  }

  orderByUserId(body) {
    return this.http.post(this.baseURL+'order/orderByUserId',body).pipe(map(results => results));

  }

  email(body): Observable<any>{
    return this.http.post(this.baseURL+'email/sendEmail',body).pipe(map(results => results));  }

}
