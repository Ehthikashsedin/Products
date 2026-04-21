import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../mock-data';
import { StarRatingComponent } from '../star-rating/star-rating';
import { CurrencyFormatterPipe } from '../currency-formatter-pipe';
import { TimeAgoPipe } from '../time-ago-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, CurrencyFormatterPipe, TimeAgoPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  onRatingChange(newRating: number) {
    console.log(`Product ${this.product.name} rating updated to:`, newRating);
    this.product.rating = newRating;
  }
}
