import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AWSFeaturesSample';

  signedIn: boolean;
  user: any;
  greeting: string;

  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = 'Hello ' + this.user.username;
        }
      });
  }

  onAlbumImageSelected(event) {
    window.open(event, '_blank');
  }
}
