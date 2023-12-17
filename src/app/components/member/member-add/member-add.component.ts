import { Component,NgModule } from '@angular/core';
import {MemberClass} from "../../../models/member";
import {MemberService} from "../../../services/member/member.service";
import {CommonModule} from "@angular/common";
import {FormBuilder, NgForm} from '@angular/forms';
import {Observable} from "rxjs";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent {
  documentTypes = ['IDENTITY_CARD', 'PASSPORT', 'DRIVING_LICENSE'];
  selectedDocumentType: string | undefined;

  public addMember = new MemberClass();

  constructor(private memberService: MemberService,
              private fb: FormBuilder,
              private router: Router) {}
  onSubmit() {

    console.log(this.addMember);

    this.addMember.identityDocumentType = this.selectedDocumentType ;
      this.memberService.addMember(this.addMember).subscribe(
        (member) => {
        console.log("Member added by success !", member);
        this.router.navigate(['/member/list']);
      },
        (error) => {
          alert("error occured")
        }
        )

  }

}
