import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
   constructor(
      private readonly service: ProductService
   ){}


  ngOnInit(): void {
   this.service.getAllProductsWithLimit()
   .subscribe({
    next: (data): void => {
        console.log(data);
        
    }
   });
  }
}
