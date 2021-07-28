import { select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './model';
import { AuthorActions } from './store/actions/authors.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @select('authors') authors$: Observable<Author[]>;

  constructor(private authorsActions: AuthorActions) {}

  ngOnInit() {
    this.authorsActions.fetchAuthors();
  }
}
