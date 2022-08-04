import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  ticketForm = new FormGroup(
    {name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      description: new FormControl('',[Validators.required,Validators.minLength(5)]),
      select: new FormControl('',[Validators.required])

    }
  )

  getInput(input:string){
    return this.ticketForm.get(input);
  }

  isValid(input:string,error:string){
    return this.ticketForm.get(input)?.errors?.[error];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
