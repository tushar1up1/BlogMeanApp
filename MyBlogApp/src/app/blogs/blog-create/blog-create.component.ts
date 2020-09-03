import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-create',
    templateUrl: './blog-create.component.html'
})
export class AppBlogCreateComponent {
    newBlog = '';   
    addBlog(InputBlog : HTMLTextAreaElement){
        console.log(InputBlog);
        console.dir(InputBlog);
        this.newBlog = InputBlog.value;

    }
}
