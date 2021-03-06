import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { PlayerRefComponent } from './page/player-ref/player-ref.component';
import { CharScenarioComponent } from './page/char-scenario/char-scenario.component';
import { PartyComponent } from './page/party/party.component';
import { GooglePickerComponent } from './sub/google-picker/google-picker.component';
import { ManageFilesComponent } from './page/manage-files/manage-files.component';
import { CharacterComponent } from './page/character/character.component';

const routes: Routes = [
  // The root and /home are the same, both go to our homepage
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Each 'sub-app' (rd: page) gets it's own route
  { path: 'playerref', component: PlayerRefComponent },
  { path: 'player/scenario', component: CharScenarioComponent },
  { path: 'party', component: PartyComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'login/picker', component: GooglePickerComponent },
  { path: 'login/managefiles', component: ManageFilesComponent },
  // Unkown URLs go to out page not found component at /404
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
