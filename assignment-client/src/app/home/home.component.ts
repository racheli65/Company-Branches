import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BranchesComponent} from '../branches/branches.component' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports:[CommonModule ,BranchesComponent]
})

export class HomeComponent {

}
