import { Component, EventEmitter, Output } from '@angular/core';

import {  Blog } from '../blog.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'blog-create',
    templateUrl: './blog-create.component.html',
    styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent {
    enteredContent  = '' ;
    enteredTitle = ''; 
    @Output() blogCreated  = new EventEmitter<Blog>();

    addBlog(form: NgForm){
        if(form.invalid){
            return;
        }
        const blog : Blog = {
            title: form.value.title, 
            content: form.value.content
        }
        this.blogCreated.emit(blog);
    }
}
