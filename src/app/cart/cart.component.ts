import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkOutForm = this.formBuilder.group({
    name:'',
    address:''
  })  
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(
    private cartService : CartService,
    private formBuilder:FormBuilder,
    private common :CommonService
  ){}

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
    
  }

    
  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter ++
  }
}
