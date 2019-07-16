import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  data;
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(param => {
      this.data = JSON.parse(param.data);
      console.log(this.data);
    })
  }

  ngOnInit() {
  }

}
