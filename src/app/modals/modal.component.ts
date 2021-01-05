import { Component, OnInit, Inject, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../services/data.service';
import { IMovie } from '../shared/interfaces';

interface Types {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form: FormGroup;

  typesOfGenre: Types[] = [
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Romance', viewValue: 'Romance' },
    {value: 'SciFi', viewValue: 'SciFi' }
  ];

  Movies: IMovie[];
  title: String;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private service: DataService,
    public matForm: MatFormField,
    public matInput: MatInputModule 
  ) { }
  
  ngOnInit() {
    this.getAllMovies();

    this.form = new FormGroup({
      ID: new FormControl('', [
      ]),
      No: new FormControl('', [
        Validators.required,
      ]),
      Title: new FormControl('', [
        Validators.required,
      ]),
      Year: new FormControl('', [
        Validators.required,
      ]),
      Genre: new FormControl('', [
      ]),
      Actors: new FormControl('', [
      ]),
      Plot: new FormControl('', [
      ])
    });

  }
  
  getAllMovies(): void {
    this.service.getMoviesList()
    .subscribe((MoviesList: IMovie[]) => this.Movies = MoviesList);
  }
  
  actionFunction(movie: any) {
    this.closeModal();
  }
  
  
  closeModal() {
    this.dialogRef.close(this.form.value);
    
    this.service.movieAdded.next(this.form.value);
  }

}