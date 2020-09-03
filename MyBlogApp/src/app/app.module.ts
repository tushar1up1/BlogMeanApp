import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBlogCreateComponent } from './blogs/blog-create/blog-create.component'

@NgModule({
  declarations: [
    AppComponent,
    AppBlogCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
