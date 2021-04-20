import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector : 'app-servers',
  templateUrl: "./servers.component.html"
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName ="test server";

  constructor() {
    setTimeout(()=>{
      this.allowNewServer =true;
    },2000)
   }

  ngOnInit(): void {
  }
  onCreateServer(pen: Event){
    this.serverCreationStatus ="server was created! name of the server is $serverName";
    console.log(pen)
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
