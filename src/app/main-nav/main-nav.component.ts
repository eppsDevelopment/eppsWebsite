import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.HomeLogoClickHandler();
  }
  public OnHomePage:boolean;
  public OnAboutUsPage:boolean;
  public OnContactUsPage:boolean;

  public AboutUsClickHandler():void {
    this.router.navigate(['aboutus']);
    this.OnHomePage = false;
    this.OnContactUsPage = false;
    this.OnAboutUsPage = true;
  }
  public ContactUsClickHandler():void {
    this.router.navigate(['contactus']);
    this.OnHomePage = false;
    this.OnAboutUsPage = false;
    this.OnContactUsPage = true;
  }

  public HomeLogoClickHandler():void {
    this.router.navigate(['']);
    this.OnContactUsPage = false;
    this.OnAboutUsPage = false;
    this.OnHomePage = true;
  }
}
