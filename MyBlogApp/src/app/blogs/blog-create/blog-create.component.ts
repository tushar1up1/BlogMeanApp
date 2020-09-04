import { Component, EventEmitter, Output } from '@angular/core';

import {  Blog } from '../blog.model';

@Component({
    selector: 'blog-create',
    templateUrl: './blog-create.component.html',
    styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent {
    enteredContent  = '' ;
    enteredTitle = ''; 
    @Output() blogCreated  = new EventEmitter<Blog>();

    addBlog(){
        const blog : Blog = {
            title: this.enteredTitle, 
            content: this.enteredContent
        }
        this.blogCreated.emit(blog);
    }
}
