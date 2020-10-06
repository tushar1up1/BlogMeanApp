import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Blog } from '../blog.model';
import { BlogService } from '../blogs.service'; 

@Component({
    selector:'blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})
//use of angular's life cycle

export class BlogListComponent implements OnInit, OnDestroy{
    /*blogs = [
        {title:'First Blog', content: 'This is my first blog'},
        {title:'Second Blog', content: 'This is my second blog'},
        {title:'Third Blog', content: 'This is my third blog'}
    ]*/
    //after service I can remove @Input
   // @Input() blogs : Blog[] = [];
   blogs : Blog[] = [];
   private blogsSubscription : Subscription;

    //depedency injection 
    constructor(public blogsService: BlogService){}

    ngOnInit(){
        this.blogs = this.blogsService.getBlogs();
        this.blogsSubscription = this.blogsService.getBlogAddedListener()
        .subscribe((blogs: Blog[]) => {
            this.blogs = blogs;        
        });
    }

    ngOnDestroy(){
        this.blogsSubscription.unsubscribe();
    }
}