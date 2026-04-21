import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card';
import { MOCK_PRODUCTS, Product } from './mock-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Using Signals for reactive state
  searchTerm = signal('');
  products = signal<Product[]>(MOCK_PRODUCTS);

  // Computed signal for filtered products
  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.products();
    
    return this.products().filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.description.toLowerCase().includes(term)
    );
  });
}
