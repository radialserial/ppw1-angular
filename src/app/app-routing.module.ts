import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './util/menu/menu.component';
import { ManualComponent } from './pages/manual/manual.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
