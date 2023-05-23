import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit{


  constructor(private service:ContactService, private router:Router){

  }
  contacts:Contact[]=[]
 deletemsg:string=''

  ngOnInit():void{
    this.getcontact();
  }
  getcontact(){
    this.service.getContact().subscribe(Response=>{
      this.contacts=Response;
    })

  }

  editcontact(id:number){
    this.router.navigate(['/edit',id])
  }

  deletecontact(id:number){
    this.service.deleteContactById(id).subscribe(Response=>{
   this.deletemsg=Response
    })
    this.getcontact()
  }
}
