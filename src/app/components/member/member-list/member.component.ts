import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../services/member/member.service';
import {IMember, MemberClass} from "../../../models/member";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  public members: IMember[] = [];
  public filterMembers: IMember[] = [];


  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.getMembers();
  }

  public getMembers(): void {
    this.memberService.getMembers().subscribe(
      (response: IMember[]) => {
        this.members = response;
        //console.log(response);
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }

}
