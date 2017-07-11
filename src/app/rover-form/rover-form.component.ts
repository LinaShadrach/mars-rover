import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MarsRoverAPIPhotos } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: [ './rover-form.component.css' ],
  providers: [ MarsRoverAPIPhotos ]
})

export class RoverFormComponent {
  photos=null;
  noPhotos=false;
  constructor(private router: Router, private marsRoverPhotos: MarsRoverAPIPhotos) { }
  getRoverImages(date: string, camera: string) {
    this.noPhotos = false;
    console.log(date);
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response =>{
      if(response.json().photos.length > 0)
      {
        this.photos = response.json();
      }
      else {
        this.noPhotos = true;
      }
    });
  }
}



// TODO: "We have added a `console.log(response.json())` inside of our `subscribe` block to make sure we are getting the data we want. However, when we click the `Get Photos` button, _nothing appears in the console!_ this is because we are trying to log an object that has no value.""
