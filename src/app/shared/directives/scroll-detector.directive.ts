import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appScrollDetector]',
  standalone: true,
})
export class ScrollDetectorDirective {
  @Output() sectionChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = this.el.nativeElement.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section: any) => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.pageYOffset;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = sectionId;
      }
    });

    this.sectionChange.emit(currentSection);
  }
}
