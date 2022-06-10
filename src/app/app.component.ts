import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text: string = '';
  public showSubscribeButton = true;

  public toggleSubscribe() {
    this.showSubscribeButton = !this.showSubscribeButton;
  }

}
