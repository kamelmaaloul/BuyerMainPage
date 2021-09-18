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

  username_data: string = 'ahmed39mohamed';
  firstname_data: string = 'ahmed';
  lastname_data: string = 'mohamed';
  birthday_data: Date;
  codephone_data: string = '';
  phone_data: string = '';
  email_data: string = '';
  password: string = '';
  confirmpassword: string = '';
  
  firstname_data_payment: string = 'ahmed';
  lastname_data_payment: string = 'mohamed';
  phone_data_payment: string = '';
  shiping_address_data_payment: Date;
  zip_code_data_payment: string = '';
  city_data_payment: string = '';
  state_data_payment: string = '';
  Code_data_payment: string = '';
  exp_date_data_payment: string = '';
  cvv_code_data_payment: string = '';

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

    console.log(this.message)
    for (let i = 1; i < this.message.length; i++) {
      if (this.message[i] != '') {
        return;
      }
    }

    this.username_data = username;
    this.firstname_data  = firstname;
    this.lastname_data = lastname;
    this.birthday_data = birthday;
    this.codephone_data  = codephone;
    this.phone_data = phone;
    this.email_data = email;

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
      this.messagePayment[2] = '';
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

    console.log(this.messagePayment)
    for (let i = 1; i < this.messagePayment.length; i++) {
      if (this.messagePayment[i] != '')
      return;
    }

    this.firstname_data_payment  = firstnamePayment;
    this.lastname_data_payment = lastnamePayment;
    this.phone_data_payment = phonePayment;
    this.shiping_address_data_payment = shiping_addressPayment;
    this.zip_code_data_payment = zip_codePayment;
    this.city_data_payment = cityPayment;
    this.state_data_payment = statePayment;
    this.Code_data_payment = codePayment;
    this.exp_date_data_payment = exp_datePayment;
    this.cvv_code_data_payment = cvv_codePayment;


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

  $('#btnsave_infoprofile').click(function() {
    $('#profile_info_detail').show();
    $('#profile_info').hide();
});
  $('#btn_profile_edit').click(function() {
    $('#profile_info_detail').hide();
    $('#profile_info').show();
});

  $('#btn_profile').click(function() {
    $('#profile_info_detail').show();
    $('#payments_detail').hide();
    $('#profile_info').hide();
    $('#messages').hide();
    $('#payments').hide();
    $('#new_message').hide();
});

  $('#btn_messages').click(function() {
    $('#payments_detail').hide();
    $('#profile_info_detail').hide();
    $('#profile_info').hide();
    $('#new_message').hide();
    $('#payments').hide();
    $('#messages').show();
});

  $('#btn_new_message').click(function() {
    $('#payments_detail').hide();
    $('#profile_info_detail').hide();
    $('#profile_info').hide();
    $('#messages').hide();
    $('#payments').hide();
    $('#new_message').show();
});

  $('#btn_payment').click(function() {
    $('#profile_info_detail').hide();
    $('#profile_info').hide();
    $('#messages').hide();
    $('#new_message').hide();
    $('#payments').hide();
    $('#payments_detail').show();
});

  $('#edit_payment').click(function() {
    $('#payments').show();
    $('#payments_detail').hide();
});

  $('#save_payment').click(function() {
    $('#payments').hide();
    $('#payments_detail').show();
});
  
  }

}
