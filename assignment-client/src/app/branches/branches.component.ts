import { Component ,OnInit  ,NgModule ,PipeTransform  ,Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BranchesService} from '../services/branches-service' ;
import { FormsModule } from '@angular/forms';
import { DistinctPipe } from '../pipe/distinct.pipe';
import { OrderByPipe } from '../pipe/order-by.pipe';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'] ,
  standalone:true,
  imports:[CommonModule ,FormsModule  ,DistinctPipe  ,OrderByPipe ]  ,
  
 
})
export class BranchesComponent implements OnInit{

  constructor(private branchesService:BranchesService){}

  branches: any[] = [];
  errorLoad :boolean = false ;
  selectArea: string = '';
  filterText: string = '';
  selectCity: string = '';
  ngOnInit(): void {
    this.getBranches();
  }


  getBranches(): void {
    this.branchesService.getBranchesDate().subscribe(
      (data) => {
        this.branches = data;
        if(this.branches !=null)
          this.selectArea = this.branches[0].store_region ;
       },
       (error) => {
        
        this.errorLoad = true; 
      }
     );
      }
      
     filterBranches(): any[] {
        return this.branches.filter((branch) =>
          (this.selectArea === '' || branch.store_region === this.selectArea) &&
          (this.selectCity === '' || branch.city === this.selectCity) &&
         this.textIncludedInObject(branch)) ;
        
      }   
       textIncludedInObject(obj: any): boolean {
        return Object.values(obj).some(value =>
          value && typeof value === 'string' &&
          value.trim().toLowerCase().includes(this.filterText.trim().toLowerCase())
        );
      }
      clear(){
        this.filterText = ''; 
        this.selectArea = '';
        this.selectCity = '';
       }
}
