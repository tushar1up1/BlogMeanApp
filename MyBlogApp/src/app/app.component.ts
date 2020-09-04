import { Component } from '@angular/core';

import {  Blog } from './blogs/blog.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedBlogs : Blog[] = [];
  onBlogAdded(blog : Blog) {
    this.storedBlogs.push(blog);
  }

  
}