import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { HeaderComponent } from "./pages/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-case-management-system';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
