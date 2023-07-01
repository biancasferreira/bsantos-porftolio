import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  abrirURL(url: string) {
    window.open(url, '_blank');
  }

  onCardMouseOver(event: MouseEvent) {
    // Aumentar o tamanho do card
    const card = event.target as HTMLElement;
    card.style.transform = 'scale(1.05)';
  }
  
  onCardMouseOut(event: MouseEvent) {
    // Restaurar o tamanho original do card
    const card = event.target as HTMLElement;
    card.style.transform = 'scale(1)';
  }
  
}
