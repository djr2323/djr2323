import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-arlert',
  templateUrl: './products-arlert.component.html',
  styleUrls: ['./products-arlert.component.css']
})
export class ProductsArlertComponent {
  @Input() product: Product | undefined;
  @Output() notify= new EventEmitter();
}
