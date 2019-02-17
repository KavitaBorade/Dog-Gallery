import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Car } from '../../models/car';
@Component({
	selector: 'app-car-list',
	templateUrl: './dog-list.component.html',
	styleUrls: [ './dog-list.component.scss' ]
})
export class DogListComponent implements OnInit {
  dogList:any;
  imgSource:string;
	constructor(private httpService: HttpService) {}

	ngOnInit() {
		this.httpService.getCarsList().subscribe((res) => {
      console.log(res);
      this.dogList = res["dogs"];
    });
  }
  public onClickMe(item:any) {
    console.log(item.image);
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById("img01");
    let captionLnk = document.getElementById("captionLnk");
    modal.style.display = "block";
    modalImg["src"] = item.image;
    this.imgSource = item.source;

  };
  public onClose(){
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById("img01");
    modal.style.display = "none";
    modalImg["src"] = "";
    this.imgSource = "";

  }
  public viewDogInfo(){
    window.open(this.imgSource);
  }
  
}
