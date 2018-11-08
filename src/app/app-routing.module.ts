import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListViewComponent } from "./components/list-view/list-view.component";
import { EditCharacterComponent } from "./components/edit-character/edit-character.component";
import { NewCharacterComponent } from "./components/new-character/new-character.component";

const routes: Routes = [
  {
    path: "",
    component: ListViewComponent
  },
  {
    path: "edit-character",
    component: EditCharacterComponent
  },
  {
    path: "new-character",
    component: NewCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
