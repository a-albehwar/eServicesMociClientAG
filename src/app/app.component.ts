import { Component } from '@angular/core';
import * as $ from 'jquery' 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eServicesMociClientAG';

  ngOnInit(){
    $(document).ready(function(){
              
      $(".menu-button").click(function(e:any){
        e.preventDefault();
        $(".menu-bar").toggleClass( "open" );
        })


            });
          }

}
