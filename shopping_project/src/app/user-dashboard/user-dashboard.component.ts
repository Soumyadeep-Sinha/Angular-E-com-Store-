import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
import { User } from '../dataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  constructor(private userService: UserService, private orderService: OrderService, private router:Router){}
  data:any = {}
  orders:any = []
  notification:string = 'NO NEW NOTIFICATIONS';
  style:string = "success"


  ngOnInit(): void {
    this.data = this.userService.getUser();
    this.orderService.getOrdersByuserId(this.data.id).subscribe((result) => {
      this.orders = result;

      console.log(this.orders);
    })    
  }


  Update(data: User){
    console.log(data);
    this.userService.updateUser(data).subscribe((result) => {
      if(result){
        console.log(result);
        this.notification = "USER DETAILS UPDATED Login again to see the changes";
        this.style = "danger"
      }else{
        console.log("nothing")
      }
    })
  }
}
