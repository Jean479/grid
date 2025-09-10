import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-prime-ng',
  imports: [ButtonModule, TableModule, CommonModule],
  templateUrl: './prime-ng.html',
  styleUrl: './prime-ng.scss'
})
export class PrimeNg {

  products: any[] = [
    {code: '1000', name: 'Bamboo Watch', description: 'Product Description', price: 65, category: 'Accessories', quantity: 24, inventoryStatus: 'INSTOCK', rating: 5, image: 'bamboo-watch.jpg'},
    {code: '1001', name: 'Black Watch', description: 'Product Description', price: 72, category: 'Accessories', quantity: 61, inventoryStatus: 'INSTOCK', rating: 4, image: 'black-watch.jpg'},
    {code: '1002', name: 'Blue Band', description: 'Product Description', price: 79, category: 'Fitness', quantity: 2, inventoryStatus: 'LOWSTOCK', rating: 3, image: 'blue-band.jpg'},
    {code: '1003', name: 'Blue T-Shirt', description: 'Product Description', price: 29, category: 'Clothing', quantity: 25, inventoryStatus: 'INSTOCK', rating: 5, image: 'blue-t-shirt.jpg'},
    {code: '1004', name: 'Bracelet', description: 'Product Description', price: 15, category: 'Accessories', quantity: 73, inventoryStatus: 'INSTOCK', rating: 4, image: 'bracelet.jpg'},
  ];

  // Add this property to your component class
  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ];

}
