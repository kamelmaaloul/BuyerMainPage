import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  message: Array<string> = [];
  messageNew: Array<string> = [];
  messagePayment: Array<string> = [];
  imgProfile: string = 'assets/imges/logo.png';
  nameProfile: string = 'Ahmed Mohamed';
  url: string = '';
  imgURL: any;

  username: string = 'ahmed39mohamed';
  firstname: string = '';
  lastname: string = '';
  birthday: Date;
  codephone: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  confirmpassword: string = '';

  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message[0] = 'Only images are supported.';
      return;
    } else {
      this.message[0] = '';
    }
    var reader = new FileReader();
    this.url = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  submit(username, firstname, lastname, birthday, codephone, phone, email, password, confirmpassword) {
    if (username == '') {
      this.message[1] = 'Username must not be empty';
    } else {
      this.message[1] = '';
    }

    if (firstname == '') {
      this.message[2] = 'The first name must not be empty';
    } else {
      this.message[2] = '';
    }

    if (lastname == '') {
      this.message[3] = 'The last name must not be empty';
    } else {
      this.message[3] = '';
    }

    if (birthday == '') {
      this.message[4] = 'Birthdate must not be empty';
    } else {
      this.message[4] = '';
    }

    if (codephone == '' || phone == '') {
      this.message[5] = 'Phone must not be empty';
    } else if (isNaN(phone) || phone.length != 9)  {
      this.message[5] = 'Wrong phone number';
    } else if (!codephone.match("[+]{1}[0-9]{1,4}")) {
      this.message[5] = 'Wrong Code phone number';
    } else {
      this.message[5] = '';
    }

    if (email == '') {
      this.message[6] = 'Email must not be empty';
    } else if (!email.match("[a-zA-Z0-9_.]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}[.] {0,1}[a-zA-Z]+")) {
      this.message[6] = 'Incorrect email';
    } else if (email.toLowerCase().includes("@hotmail.")) {
      this.message[6] = 'The email used is rejected';
    } else {
      this.message[6] = '';
    }

    if (password == '') {
      this.message[7] = 'Password must not be empty';
    } else {
      this.message[7] = '';
    }

    if (confirmpassword == '') {
      this.message[8] = 'Confirm password must not be empty';
    } else if (confirmpassword != password) {
      this.message[8] = 'Password does not match';
    } else {
      this.message[8] = '';
    }

    for (let i = 0; i < this.message.length; i++) {
      this.message[i] != '';
      return;
    }

    //Code Here

  }

  sendMessageSubmit(subject, message) {
    if (subject == '') {
      this.messageNew[0] = 'Subject must not be empty';
    } else {
      this.messageNew[0] = '';
    }

    if (message == '') {
      this.messageNew[1] = 'Message must not be empty';
    } else {
      this.messageNew[1] = '';
    }

    for (let i = 0; i < this.messageNew.length; i++) {
      this.messageNew[i] != '';
      return;
    }


    //Code Here

  }

  savePaymentSubmit(firstnamePayment, lastnamePayment, phonePayment, codephonePayment, shiping_addressPayment, zip_codePayment, cityPayment, statePayment, codePayment, exp_datePayment, cvv_codePayment) {
    if (firstnamePayment == '') {
      this.messagePayment[0] = 'The first name must not be empty';
    } else {
      this.messagePayment[0] = '';
    }

    if (lastnamePayment == '') {
      this.messagePayment[1] = 'The last name must not be empty';
    } else {
      this.messagePayment[1] = '';
    }

    if (codephonePayment == '' || phonePayment == '') {
      this.messagePayment[2] = 'Phone must not be empty';
    } else if (isNaN(phonePayment) || phonePayment.length != 9)  {
      this.messagePayment[2] = 'Wrong phone number';
    } else if (!codephonePayment.match("[+]{1}[0-9]{1,4}")) {
      this.messagePayment[2] = 'Wrong Code phone number';
    } else {
      this.message[2] = '';
    }

    if (shiping_addressPayment == '') {
      this.messagePayment[3] = 'Shiping address must not be empty';
    } else {
      this.messagePayment[3] = '';
    }

    if (zip_codePayment == '') {
      this.messagePayment[4] = 'Zip code must not be empty';
    } else {
      this.messagePayment[4] = '';
    }

    if (cityPayment == '') {
      this.messagePayment[5] = 'City must not be empty';
    } else {
      this.messagePayment[5] = '';
    }

    if (statePayment == '') {
      this.messagePayment[6] = 'State must not be empty';
    } else {
      this.messagePayment[6] = '';
    }

    for (let i = 0; i < this.messagePayment.length; i++) {
      this.messagePayment[i] != '';
      return;
    }


    //Code Here 
  }

  constructor() { }

  ngOnInit(): void {

    $('.btn').click(function() {
      $('.btn').toggleClass("click");
     $('.sidebar').toggleClass("show");
  }); 

  $('.feat-btn').click(function() {
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
  });

  $('nav ul li').click(function(e) {
      $(e.currentTarget).addClass("active").siblings().removeClass("active");
  });

  $('#btn_profile').click(function() {
    $('#profile_info').show();
    $('#messages').hide();
    $('#payments').hide();
    $('#new_message').hide();
});

  $('#btn_messages').click(function() {
    $('#profile_info').hide();
    $('#new_message').hide();
    $('#payments').hide();
    $('#messages').show();
});

  $('#btn_new_message').click(function() {
    $('#profile_info').hide();
    $('#messages').hide();
    $('#payments').hide();
    $('#new_message').show();
});

  $('#btn_payment').click(function() {
    $('#profile_info').hide();
    $('#messages').hide();
    $('#new_message').hide();
    $('#payments').show();
});
  
  }

}
