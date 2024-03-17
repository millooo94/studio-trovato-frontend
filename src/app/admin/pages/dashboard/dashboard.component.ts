import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  user: any;

  async ngOnInit(): Promise<void> {
    this.user = await this.authService.getLoggedUser();
  }

  logout() {
    this.authService.logout().subscribe((response) => {
      if (response) this.router.navigate(['/login']);
    });
  }
}
