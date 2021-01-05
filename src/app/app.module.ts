// DECLARATIONS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListingComponent } from './moviesListing/moviesListing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalComponent } from './modals/modal.component';

// IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './shared/filter';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// PROVIDERS
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContainer, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { DataService } from './services/data.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MovieDetailsComponent,
    MoviesListingComponent,
    NotFoundComponent,
    ModalComponent,
    FilterPipe,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [
    DataService,
    NgbModalConfig,
    NgbModal,
      {
        provide: FilterPipe,
        useValue: []
      },    
      { 
        provide: MatTableModule,
        useValue: []
      }, 
      { 
        provide: MatListModule,
        useValue: []
      }, 
      { 
        provide: MatSelectModule,
        useValue: []
      }, 
      {
        provide: MAT_DIALOG_DATA,
        useValue: {hasBackdrop: false}
      },
      {
        provide: MatDialogContainer,
      },
      {
        provide: MatFormField,
        useValue: []
      }
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
