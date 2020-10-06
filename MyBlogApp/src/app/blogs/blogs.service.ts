import { Blog } from './blog.model';
import { Subject } from 'rxjs';

export class BlogService{
    private blogs: Blog[] = [];
    private blogsAdded = new Subject<Blog[]>();
    
    getBlogs(){
        //use of spread operator, this will create new array out of old array object, good practice
        return [...this.blogs];
    }

    getBlogAddedListener() {
        return this.blogsAdded.asObservable();
    }

    addBlog(title: string, content: string){
        const blog : Blog = { title: title, content: content};
        this.blogs.push(blog);
        this.blogsAdded.next([...this.blogs]);
    }
}