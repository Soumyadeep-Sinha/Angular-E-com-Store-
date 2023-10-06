import { Injectable } from '@angular/core';
import { User, UserLogin } from '../dataType';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataKey = 'userData';
  private isAuthorisedKey = "authKey"

  constructor(private http : HttpClient) { }

  registerUser(data: any) {
    return this.http.post("http://localhost:8080/api/v1/users/saveUser", data);
  }

  loginUser(data: UserLogin) {
    return this.http.post("http://localhost:8080/api/v1/users/validateUser", data);
  }

  isAllowed = false;

  setUser(user: any) {
    localStorage.setItem(this.userDataKey, JSON.stringify(user));
    localStorage.setItem(this.isAuthorisedKey, this.isAllowed.toString());

    if(user) this.isAllowed = true;

    console.log('User is set');
    console.log(user);
  }

  getUser(): User | null {
    const userData = localStorage.getItem(this.userDataKey);
    return userData ? JSON.parse(userData) : null;
  }

  getValidation():boolean{
    const auth = localStorage.getItem(this.isAuthorisedKey);
    return auth ? true : false;
  }

  clearUser() {
    localStorage.removeItem(this.userDataKey);
    localStorage.removeItem(this.isAuthorisedKey);
    this.isAllowed = false;
    console.log('User data cleared');
  }

  updateUser(data: User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/api/v1/users/updateUser", data)
  }
}
