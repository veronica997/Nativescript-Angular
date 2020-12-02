import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    activeChallenges = '';

    onChallengeInput(challengeDescription: string){
       this.activeChallenges = challengeDescription;
       console.log('onchallengeInput:', challengeDescription);
    }

}
