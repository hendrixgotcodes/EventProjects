//**********GETTING DOM ELEMENTS*************//

// Getting Tabs
let signUp = document.getElementById("signUp"),
  signIn = document.getElementById("signIn"),
  // Getting Form Containers
  mainForm = document.getElementById("form1"),
  container = document.getElementById("form-content"),
  container2 = document.createElement("div");
container2.className = "content";

// **********************************************************************************

// Main container of all Sign Up elements
const Logup = document.createElement("section");
Logup.className = "LogUp";

//Creating the heading "Sign Up"
let sHeading = document.createElement("h1");
sHeading.textContent = "SIGN UP";
sHeading.className = "heading";
Logup.appendChild(sHeading); //Appends the heading element to the DOM

//Creating full name container, contains the label; sFullName (Full Name) and the textBox "tbFullNam"
const sectionFullName = document.createElement("section");
sectionFullName.className = "sSections";

//Creating the label sFullName (Full Name)
const sFullName = document.createElement("label");
sFullName.textContent = "Full Name";
sFullName.className = "labels";
sFullName.setAttribute("for", "tbFullName");
sectionFullName.appendChild(sFullName);

// Creating the textbox tbFullName
const tbFullName = document.createElement("input");
tbFullName.className = "txtBox";
tbFullName.setAttribute("type", "text");
tbFullName.setAttribute("name", "tbFulltName");
tbFullName.setAttribute("placeholder", "eg. Samuel Asare");
sectionFullName.appendChild(tbFullName);

//Creating user name container, contains the label; sUserName (User Name) and the textBox "tbUserName"
const sSectionUserName = document.createElement("section");
sSectionUserName.className = "sSections";

//Creating the label sUserName (User Name)
const sUserName = document.createElement("label");
sUserName.textContent = "User Name";
sUserName.className = "labels";
sUserName.setAttribute("for", "tbUserName");
sSectionUserName.appendChild(sUserName);

// Creating the textbox tbUserName
const tbUserName = document.createElement("input");
tbUserName.className = "txtBox";
tbUserName.setAttribute("type", "text");
tbUserName.setAttribute("name", "tbUserName");
tbUserName.setAttribute("placeholder", "eg. Sam454");
sSectionUserName.appendChild(tbUserName);

//Creating password container, contains the label; sPassword (Password) and the textBox "tbPassword"
const sSectionPassword = document.createElement("section");
sSectionPassword.className = "sSections";

//Creating the label sPassword (Password)
const sPassword = document.createElement("label");
sPassword.textContent = "Password";
sPassword.className = "labels";
sPassword.setAttribute("for", "tbPassword");
sSectionPassword.appendChild(sPassword);

// Creating the textbox tbPassword
const tbPassword = document.createElement("input");
tbPassword.className = "txtBox";
tbPassword.setAttribute("type", "password");
tbPassword.setAttribute("name", "tbPassword");
tbPassword.setAttribute("placeholder", "choose one you can remember");
sSectionPassword.appendChild(tbPassword);

//Creating a Submit Button which will only appear in the sign up tab
const sBtn = document.createElement("button");
sBtn.className = "btn";
sBtn.textContent = "Submit";

// Appending all sections to the DOM
Logup.appendChild(sectionFullName);
Logup.appendChild(sSectionUserName);
Logup.appendChild(sSectionPassword);
Logup.appendChild(sBtn);
container.appendChild(Logup);

// PS.
// Form is grouped into three main parts,
// i.    The Full name section
// ii.   The username section
// iii.  The password section

// Elements are created and added to their respective sectionUserName,
// The sections are then added to the main Sign up section, added to the DOM
// when the user clicks sign in

// *******************************************************************************

// Main container of all Sign in elements
const login = document.createElement("section");
login.className = "login";

//Creating the heading "Sign In"
let heading = document.createElement("h1");
heading.textContent = "LOG IN";
heading.className = "heading";

//Creating user name container, contains the label; UserName (User Name) and the textBox "txtUserName"
const sectionUserName = document.createElement("section");
sectionUserName.className = "sections";

// Creating the password container
const sectionPassword = document.createElement("section");
sectionPassword.className = "sections";
sectionPassword.setAttribute("id", "section2");

// Creating the label userName (User Name)
const userName = document.createElement("label");
userName.textContent = "User Name";
userName.className = "labels";
sectionUserName.appendChild(userName);

// Creating the textbox txtUserName
const txtUserName = document.createElement("input");
txtUserName.setAttribute("type", "text");
txtUserName.setAttribute("placeholder", "Your registered user name");
txtUserName.className = "txtBox";
sectionUserName.appendChild(txtUserName);

// Creating the label password
const password = document.createElement("label");
password.textContent = "Password";
password.className = "labels";

// Adding password label to the password container
sectionPassword.appendChild(password);

// Creating the password box
const txtPassword = document.createElement("input");
txtPassword.setAttribute("type", "password");
txtPassword.setAttribute("placeholder", "Your password here");
txtPassword.className = "txtBox";
sectionPassword.appendChild(txtPassword); //Appending the passwordbox to the password container

// Creating a keep me logged in checkbox
const checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
checkBox.style.marginRight = ".3rem";
sectionPassword.appendChild(checkBox);

// Creating a keep me logged in label next to the checkbox
const loggedIn = document.createElement("span");
loggedIn.textContent = "Keep me logged in";
loggedIn.style.fontSize = ".8rem";

sectionPassword.appendChild(loggedIn);

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Submit";

// Appending Sections Sign In Container
const box = document.createElement("section");
box.className = "box";

box.appendChild(sectionUserName);
box.appendChild(sectionPassword);
box.appendChild(btn);

login.appendChild(heading);
login.appendChild(box);
// login.appendChild(btn);

// ************************************************************************************

// SIGN UP TAB

signUp.addEventListener("click", () => {
  if (container2.parentElement == mainForm) {
    mainForm.removeChild(container2);
    mainForm.appendChild(container);
  }
  signIn.style.backgroundColor = "#7e33aa";
  signIn.style.color = "#fff";

  signUp.style.backgroundColor = "#fff";
  signUp.style.color = "#7e33aa";
});

// ***************************************************************************************

// ADDING EVENT HANDLERS THE SIGN IN AND SIGN UP BUTTONS

signIn.addEventListener("click", () => {
  container2.appendChild(login);
  if (container2.parentElement == null) {
    mainForm.replaceChild(container2, container);
  }
  signUp.style.backgroundColor = "#7e33aa";
  signUp.style.color = "#fff";

  signIn.style.backgroundColor = "#fff";
  signIn.style.color = "#7e33aa";
});

// ********************************************************************************************
let error = false;
let error2 = false;
let error3 = false;

sBtn.addEventListener("click", () => {
  if (isEmpty(tbFullName.value) & (error === false)) {
    const warn = document.createElement("span");
    warn.textContent = "*Field is empty*";
    warn.className = "warn";

    sectionFullName.appendChild(warn);
    error = true;
  }
  if (isEmpty(tbUserName.value) & (error2 === false)) {
    const warn2 = document.createElement("span");
    warn2.textContent = "*Field is empty*";
    warn2.className = "warn";
    sSectionUserName.appendChild(warn2);
    error2 = true;
  }
  if (isEmpty(tbPassword.value) & (error3 === false)) {
    const warn3 = document.createElement("span");
    warn3.textContent = "*Field is empty*";
    warn3.className = "warn";
    sSectionPassword.appendChild(warn3);
    error3 = true;
  }
  sBtn.style.top = "4rem";
  sSectionPassword.style.padding = "0";
  sSectionUserName.style.padding = "0";
  sectionFullName.style.padding = "0";
});
let isEmpty = function (aString) {
  if (aString == "") {
    console.log(true);
    return true;
  } else if (aString != "") {
    console.log(false);
    return false;
  } else {
    console.log("idk");
  }
};
