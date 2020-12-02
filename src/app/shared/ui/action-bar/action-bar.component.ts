import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from '@nativescript/core/platform';
import { ActionBar, Page } from '@nativescript/core';
import { RouterEvent } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';


declare var android: any;


@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})


export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton = true;

  constructor(private page : Page, private router: RouterExtensions) { }

  ngOnInit(): void {
  }

  get canGoBack(){
    return this.router.canGoBack() && this.showBackButton;
  }


  onGoBack(){
    return this.router.backToPreviousPage();
  }


  onLoadedActionBar(){
    if(isAndroid){
        const androidToolbar = this.page.actionBar.nativeView;    //this.page.actionBar.nativeView;
        const backButton = androidToolbar.getNavigationIcon(); //.getNavigationIcon();

        if(backButton){
            backButton.setColorFilter(android.graphics.Color.parseColor('red') , (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
        }
    }
  }

}
