import { AuthService } from 'src/app/services/auth/auth.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [MessageService],
})
export class IndexComponent implements OnInit, AfterViewInit {
  email: string;
  password: string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService
  ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  handleLogin() {
    this.auth.login(this.email, this.password).then((response) => {
      if (!!response) {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigateByUrl('/home');
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Unable to log in. Please try again.',
        });
      }
    });
  }
}
