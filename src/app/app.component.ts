import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Details Personnels', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Resumer', url: '/folder/heart-outline', icon: 'heart-outline' },
    { title: 'Langues et loisir', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Cursus Scolaire', url: '/folder/Archived', icon: 'archive' },
    { title: 'Experience', url: '/folder/Trash', icon: 'trash' },
    { title: 'Competences', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
