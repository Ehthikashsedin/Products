import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-star-rating',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './star-rating.html',
    styleUrl: './star-rating.css'
})
export class StarRatingComponent {
    @Input() rating: number = 0;
    @Output() ratingChange = new EventEmitter<number>();

    selectRating(newRating: number) {
        this.rating = newRating;
        this.ratingChange.emit(newRating);
    }
}
