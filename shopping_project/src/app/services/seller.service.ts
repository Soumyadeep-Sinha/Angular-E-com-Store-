import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category, Login, Product, Seller, SignUp } from '../dataType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private sellerDataKey = "sellerData";
  private isSellerAuthorisedKey = "authKey2"

  constructor(private http: HttpClient) { 

  }
  isSellerAuthorised:boolean = false;

  userSignup(data:SignUp){
    return this.http.post('http://localhost:8080/api/v1/seller/saveSellerData', data);

  }

  userLogin(data:Login){
    return this.http.post("http://localhost:8080/api/v1/seller/SellerValidate", data);
  }

  isAllowed = false;

  setSeller(seller: any){
    localStorage.setItem(this.sellerDataKey, JSON.stringify(seller));
    localStorage.setItem(this.isSellerAuthorisedKey, this.isAllowed.toString());

    if(seller) this.isAllowed = true;

    console.log('Seller is set');
    console.log(seller);
  }

  getSeller(): Seller | null {
    const sellerData = localStorage.getItem(this.sellerDataKey);
    return sellerData ? JSON.parse(sellerData) : null;
  }

  getValidation(): boolean{
    const auth = localStorage.getItem(this.isSellerAuthorisedKey);
    return auth ? true:false;
  }

  clearSeller(){
    localStorage.removeItem(this.sellerDataKey);
    localStorage.removeItem(this.isSellerAuthorisedKey);
    this.isAllowed = false;
    console.log('user data cleared');
  }

  addCategory(data:Category){
    return this.http.post("http://localhost:8080/api/v1/seller/addCategory", data);
  }

  // renderSellerHome(){
  //   return this.http.get<Seller>('http://localhost:8080/api/v1/seller/GetSeller');
  // }

  // logoutSeller(){
  //   return this.http.get<String>("http://localhost:8080/api/v1/seller/sellerLogout");
  // }

  saveProduct(data:Product){
    return this.http.post("http://localhost:8080/api/v1/seller/addProduct", data)
  }

  findAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:8080/api/v1/seller/getAllCategories")
  }
  
}
