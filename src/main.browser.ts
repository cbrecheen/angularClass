import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { Store } from './shared/store.service';

@NgModule({
  bootstrap: [AppComponent],
  providers: [
    Store
  ],
  imports: [
    BrowserModule,
    AppModule
  ],
})
class MainModule {}

var platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule);