import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day1app11';
  quote1 = "When action grows unprofitable, gather information;";
  quote2 = "When information grows unprofitable, sleep.";
  quote3 = "";
  
  getQuote() {
    this.quote3="Tzu-li and Tzu-ssu were boasting about the size of their latest programs. ‘Two-hundred thousand lines,’ said Tzu-li, ‘not counting comments!’ Tzu-ssu responded, ‘Pssh, mine is almost a million lines already.’ Master Yuan-Ma said, ‘My best program has five hundred lines.’ Hearing this, Tzu-li and Tzu-ssu were enlightened.Master Yuan-Ma, The Book of Programming"
    return this.quote3;
  }
}
