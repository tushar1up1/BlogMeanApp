import { Component, Input } from '@angular/core';

import { Blog } from '../blog.model';

@Component({
    selector:'blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
    /*blogs = [
        {title:'First Blog', content: 'This is my first blog'},
        {title:'Second Blog', content: 'This is my second blog'},
        {title:'Third Blog', content: 'This is my third blog'}
    ]*/
    @Input() blogs : Blog[] = [];
}