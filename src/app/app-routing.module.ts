import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponent } from './components/dog-list/dog-list.component';
const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogListComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
