import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() sections: any[] = [];
  @Output() toggleMenuAction: EventEmitter<boolean> = new EventEmitter();

  isMenuOpen: any = { header: 'false', home: false, section: undefined };

  onToggle() {
    switch (this.isMenuOpen.header) {
      case 'false':
        this.isMenuOpen.header = 'true';
        this.isMenuOpen.home = true;
        this.toggleMenuAction.emit(this.isMenuOpen);
        break;
      case 'true':
        this.isMenuOpen.header = 'false';
        this.isMenuOpen.home = false;
        this.toggleMenuAction.emit(this.isMenuOpen);
        break;
    }
  }

  onClickSection(section: any) {
    this.isMenuOpen.header = 'false';
    this.isMenuOpen.home = false;
    this.isMenuOpen.section = section.value;
    this.toggleMenuAction.emit(this.isMenuOpen);
    console.log(section);
  }
}
