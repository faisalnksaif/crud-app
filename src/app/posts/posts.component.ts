import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userInput = {
    name: "",
    id: null
  }

  posts: any[];
  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  // httpdata;
  ngOnInit() {
    this.http.get(this.url).
      subscribe((data) => {
        this.displaydata(data)
        // console.log(data)
      })
  }
  displaydata(data) { this.posts = data; }

  createPost() {
    this.http.get(this.url)
      .subscribe(response => {
        const post = { name: this.userInput.name, id: 100 };
        this.posts.splice(0, 0, post);
        this.userInput.name = '';
        this.userInput.id = null;
      })
  }

  updatePost(post) {
    this.userInput = post;
  }

  updatePostToDB() {
    this.http.get(this.url + '/' + this.userInput.id)
      .subscribe();
  }


  deletePost(post) {
    console.log('from delete', post.id)
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      })
  }

  goToPost(data) {
    this.router.navigateByUrl(`post?data=${JSON.stringify(data)}`)
  }

}
