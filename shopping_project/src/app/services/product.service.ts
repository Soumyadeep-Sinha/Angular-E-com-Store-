import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, Product } from '../dataType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts(data:number): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8080/api/v1/products/getProductByCategoryId/${data}`)
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8080/api/v1/products/getAllProducts`)
  }
  
  getProductById(data:number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/api/v1/products/getProductById/${data}`)
  }

  addToCart(data:Cart):Observable<Cart>{
    return this.http.post<Cart>(`http://localhost:8080/api/v1/products/addToCart`, data)
  }

  getCartSize(data: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/api/v1/products/getCartSize/${data}`);
  }

  getCartItems(data: number): Observable<Cart[]>{
    return this.http.get<Cart[]>(`http://localhost:8080/api/v1/products/getCart/${data}`);
  }

  checkout(userId: number, shippingAddress: string, pinCode: string): Observable<any> {
    const checkoutRequest = {
      userId: userId,
      shippingAddress: shippingAddress,
      pinCode: pinCode,
    };

    return this.http.post<any>('http://localhost:8080/api/v1/products/checkout', checkoutRequest);
  }

  getProductsBySellerId(data:number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/api/v1/products/GetProductsBySellerId/${data}`)
  }

}
