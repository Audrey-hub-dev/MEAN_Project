import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';


@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    //le premier post est le nom de l'objet que l'on donne
    //le deuxième Post après les deux points et avec une majuscule
    //est le type que l'on donne
    const post: Post = {title: title, content: content};
    //avec le this on va atteindre notre tableau de posts et y pousser le nouveau
    //post dans ce tableau
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);

  }
}


