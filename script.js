const firebaseConfig = {
    apiKey: "AIzaSyBNnZLekDXgeiEbh0y-0af0o_1Ji07OApY",
    authDomain: "wifi-17df6.firebaseapp.com",
    databaseURL: "https://wifi-17df6-default-rtdb.firebaseio.com",
    projectId: "wifi-17df6",
    storageBucket: "wifi-17df6.appspot.com",
    messagingSenderId: "92774576581",
    appId: "1:92774576581:web:b5ee1eb80a6c1908629bac"
  };
  firebase.initializeApp(firebaseConfig);


  var loginformDB = firebase.database().ref("loginform");

document.getElementById("loginform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  
  var emailid = getElementVal("emailid");
  var passwordid = getElementVal("passwordid");

  saveMessages(emailid, passwordid);

  //   enable alert
  

  //   reset the form
  alert("Funcionario(a) cadastrado(a)!");
  document.getElementById("loginform").reset();
}

const saveMessages = (emailid, passwordid) => {
  var newLoginform = loginformDB.push();

  newLoginform.set({
    emailid: emailid,
    passwordid: passwordid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};