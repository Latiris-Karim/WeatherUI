import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//needed for ngif

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkMode = false

  ngOnInit() {
    this.initializeColorPref()
  }
  initializeColorPref() {
    const colorPref = localStorage.getItem('darkMode')

    this.isDarkMode = colorPref === 'true';
  
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', this.isDarkMode.toString())
  }
}
