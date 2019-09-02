import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from '@app/aaa/aaa.component';
import { ApiResolver } from '@app/aaa/api.resolver';


const routes: Routes = [
  { path: '', component: AaaComponent, resolve: { user: ApiResolver },  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
