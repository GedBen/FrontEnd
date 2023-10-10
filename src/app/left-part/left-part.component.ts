import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.scss']
})
export class LeftPartComponent implements OnInit{
  isMobile: boolean = false;
  menuOpen: boolean = false;
  isLeftSectionVisible: boolean = true; // Initialisez la visibilité à true

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        console.log('isLeftSectionVisible:', this.isLeftSectionVisible);
         if (!this.isMobile) {
          this.isLeftSectionVisible = false;
           this.menuOpen = false; // Fermer le menu sur les autres écrans
         }
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Inverse l'état du menu
    this.isLeftSectionVisible = !this.isLeftSectionVisible; // Inverse l'état de visibilité
    console.log('menuOpen:', this.menuOpen);
  }
  
}







