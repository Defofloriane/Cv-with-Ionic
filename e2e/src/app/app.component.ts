import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Details Personnels', url: '/folder/Detail personnel', icon: 'mail' },
    { title: 'Resumer', url: '/folder/Resumer', icon: 'heart-outline' },
    { title: 'Langues et loisir', url: '/folder/Langues et Loisirs', icon: 'heart' },
    { title: 'Cursus Scolaire', url: '/folder/Cursus ', icon: 'archive' },
    { title: 'Experience', url: '/folder/Experience', icon: 'trash' },
    { title: 'Competences', url: '/folder/Competences', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router, private root: ActivatedRoute) {

  }
  route(){
    this.router.navigate([this.root.snapshot.queryParams.redirect || 'folder/:id' ])
  }
}
