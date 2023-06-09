import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sevice/auth.service';
declare var $ :any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})


// let drp = document.getElementsByClassName('drp')
//       drp.onclick = function (){
//       drp.classList.toggle('drping')
// }
export class NavComponent implements OnInit {



  constructor(private _AuthService: AuthService) {

    window.addEventListener('scroll', function(){
      if(window.scrollY > 0)
      {
        $('.head').css({'backdrop-filter':'blur(50px)'})
      }else{
        $('.head').css({'backdrop-filter':'blur(0px) '})
      }  
    }
    )

  }

  isLogin: boolean = false;

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });



    $('.hamburger').click( function(){
      $('.nav-bar').toggleClass('active')
      $('.hamburger .line').toggleClass('hamClr')
      $('.hamburger .l1').toggleClass('l1x')
      $('.hamburger .l2').toggleClass('l2x')
      $('.hamburger .l3').toggleClass('l3x')
    })




  }



  logoutBridge() {
    this._AuthService.logout();
  }

}
