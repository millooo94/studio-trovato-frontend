import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-dots.component.html',
  styleUrl: './scroll-dots.component.scss',
})
export class ScrollDotsComponent {
  @Input() sections = 0;
  @Input() currentSection = 0;
}
