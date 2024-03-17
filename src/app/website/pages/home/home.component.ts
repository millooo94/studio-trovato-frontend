import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { ValuePropositionComponent } from './sections/value-proposition/value-proposition.component';
import { PracticeAreasComponent } from './sections/practice-areas/practice-areas.component';
import { ConsultationComponent } from './sections/consultation/consultation.component';
import { PartnersComponent } from './sections/partners/partners.component';
import { AboutComponent } from './sections/about/about.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { ScrollDotsComponent } from '../../../shared/components/scroll-dots/scroll-dots.component';
import { ScrollDetectorDirective } from '../../../shared/directives/scroll-detector.directive';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layouts/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ValuePropositionComponent,
    PracticeAreasComponent,
    ConsultationComponent,
    PartnersComponent,
    AboutComponent,
    FooterComponent,
    ScrollDotsComponent,
    ScrollDetectorDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChildren('section') HTMLSections!: QueryList<ElementRef>;

  router = inject(Router);

  sections: any[] = [
    { id: 1, label: 'Value Proposition', value: 'value-proposition' },
    { id: 2, label: 'About', value: 'about' },
    { id: 3, label: 'Practice Areas', value: 'practice-areas' },
    { id: 4, label: 'Partners', value: 'partners' },
    { id: 5, label: 'Consultation', value: 'consultation' },
    { id: 6, label: 'Footer', value: 'footer' },
  ];

  currentSection: number = 0;
  lastScrollPosition = window.scrollY;
  isMenuOpened: boolean = false;

  ngOnInit(): void {
    this.router.navigate([], { fragment: this.sections[0].value });
  }

  onScroll() {
    const windowHeight = window.innerHeight;
    this.HTMLSections.forEach((item: any, index: number) => {
      const rect = item.nativeElement.getBoundingClientRect();
      const currentScrollPosition = window.scrollY;
      const scrollDirection =
        currentScrollPosition > this.lastScrollPosition ? 'down' : 'up';
      let isFullyVisible = null;
      if (scrollDirection === 'up') {
        isFullyVisible = rect.top === 0 && rect.top <= windowHeight;
      } else if (scrollDirection === 'down') {
        isFullyVisible = rect.top >= 0 && rect.top <= windowHeight;
      }
      if (isFullyVisible) {
        this.currentSection = index;
        this.router.navigate([], { fragment: item.nativeElement.id });
      }
    });
  }

  jumpToSection(section: string) {
    if (!!section === false) return;
    document.getElementById(section)!.scrollIntoView({ behavior: 'auto' });
  }

  onToggleMenu($event: any) {
    this.isMenuOpened = $event.home;
    this.jumpToSection($event.section);
  }
}
