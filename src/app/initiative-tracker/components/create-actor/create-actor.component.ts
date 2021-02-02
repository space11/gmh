import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateActorComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    initiative: [null, Validators.required],
    wounds: [0],
    advantages: [0],
    usedLuckPoints: [0]

  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    
  }

}
