import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent  implements OnInit {

  priority = ["Hight", "Medium", "Low"];
  constructor(private modalCrtl:ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCrtl.dismiss();
  }
}
