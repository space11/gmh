import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InitiativeTrackerFacadeService } from '../../initiative-tracker-facade.service';

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
  });

  constructor(private formBuilder: FormBuilder,
    private initiativeTrackerFacade: InitiativeTrackerFacadeService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.initiativeTrackerFacade.createActor(this.form.getRawValue());

    this.form.reset();
    // TODO: Fix validation error shown in UI    
  }
}
