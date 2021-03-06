import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteVoteComponent } from './quote-vote/quote-vote.component';
import { PopularQuoteDirective } from './popular-quote.directive';
import { QuoteBodyComponent } from './quote-body/quote-body.component';
import { QuoteDeleteComponent } from './quote-delete/quote-delete.component';
import { TimelinePipe } from './timeline.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteVoteComponent,
    PopularQuoteDirective,
    QuoteBodyComponent,
    QuoteDeleteComponent,
    TimelinePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
