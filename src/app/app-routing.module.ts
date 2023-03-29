import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { LoginCommponent } from "./auth/login/login.component";
import { SignupCommponent } from "./auth/signup/signup.component";


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'login', component: LoginCommponent },
  { path: 'signup', component: SignupCommponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}


