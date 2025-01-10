import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  dropdownOpen = false;
  
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
