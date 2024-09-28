import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { ElCinePerrudoComponent } from './formularios/el-cine-perrudo/el-cine-perrudo.component';
import { DurabilidadComponent } from './formularios/Calculadora de Resistencias/calculadora';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    Ejemplo1Component,
    ElCinePerrudoComponent,
    DurabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }