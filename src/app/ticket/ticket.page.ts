import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {
  public ticket: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ticket = this.activatedRoute.snapshot.paramMap.get('id');
  }


}
