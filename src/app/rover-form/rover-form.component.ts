import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverAPIPhotos } from '../mars-rover-api-photos.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: [ './rover-form.component.css' ],
  providers: [ MarsRoverAPIPhotos, PhotoService ]
})

export class RoverFormComponent {
  photos: any[]=null;
  noPhotos: boolean=false;
  constructor(private marsRoverPhotos: MarsRoverAPIPhotos) { }
  saveRoverImages(date, camera){
    this.marsRoverPhotos.saveImages(date, camera);
    alert('The images from ' + date + ' taken by the ' + camera + ' camera have been saved to the database.')
  }

  getRoverImages(date: string, camera: string) {
    this.noPhotos = false;
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
