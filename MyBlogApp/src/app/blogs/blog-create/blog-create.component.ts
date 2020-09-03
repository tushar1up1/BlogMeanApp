import { Component } from '@angular/core';


@Component({
    selector: 'app-blog-create',
    templateUrl: './blog-create.component.html'
})
export class BlogCreateComponent {
    newBlog = '';
    enteredValue = '';   
    addBlog(){
        this.newBlog = this.enteredValue;
    }
}
