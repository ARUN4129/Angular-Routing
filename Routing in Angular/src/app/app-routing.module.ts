import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

/*   Here, Routing is Done By Hardcoded   */
/*  {
      Ha Khalcha Array Aapan swatha lihava lagto.
      hyat 2 field lihave lagtat 1) path and 2) component    
      pathe manje string aste ki ji aapan url chya end madhe takto.
      e.g. localhost:4200 generaly aapan as takto.
      pn aata hya situation madhe bga ks hoil
      e.g. localhost:4200/First  ase hoil.....
      mg aata First navachya path chi ji component aahe ti display honar.
      manje "FirstComponent"  display honar
    }.      
*/
/*
const routes: Routes = [
                          {path : "First",component : FirstComponent},
                          {path : "Second",component : SecondComponent},
                          {path : "Third",component : ThirdComponent},
                          {path : "Fourth",component : FourthComponent}
                       ];

*/
/*
      ******************* Routing With Nevigation Wih WhileCard ********************
      {
        khalcha array bgha, ha array vrchya array sarkhach aahe.
        fkt hyat whilecard nanun '**' (double star) aala aahe.
        jra nit observe kel tr ha swtch case sarkha aahe bgha.
        path jithe match hoto tithe jato aani tya path cha component display krto.
        second-last cha path bgha ks aahe jra observe kra....
        "" aahe manje jri aapn fkt localhost:4200 takl tri kay tri dakvayla pahije na,
        manun ha extra ghetla......nahitr PageNotFound manun dakhvel,
        karan ka ki, aapn ts nahi kel tr whilecard excecute honar nehmi.
      }
*/

const routes: Routes = [
                            {path : '' ,redirectTo:AppComponent,pathMatch:'full'},
                            {path : "First",component : FirstComponent},
                            {path : "Second",component : SecondComponent},
                            {path : "Third",component : ThirdComponent},
                            {path : "Fourth",component : FourthComponent},
                            {path : "**" , component : PageNotFoundComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
