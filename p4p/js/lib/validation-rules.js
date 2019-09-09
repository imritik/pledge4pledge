//method to accept Capital letters and numbers only
jQuery.validator.addMethod("firstNameOrLastName", function(value, element) {
  return this.optional(element) || /^[A-Za-z][A-Za-z .\' ]{0,49}$/.test(value);
}, "Invalid Format");

jQuery.validator.addMethod("fullName", function(value, element) {
  return this.optional(element) || /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(value);
}, "Invalid Format");

jQuery.validator.addMethod("subject", function(value, element) {
  return this.optional(element) || /^[A-Za-z0-9+\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(value);
}, "Invalid Format");

//method to accept base64
jQuery.validator.addMethod("base64", function(value, element) {
  return this.optional(element) || /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}, "Invalid Format");

//method to accept Capital letters and numbers only
jQuery.validator.addMethod("companyName", function(value, element) {
  return this.optional(element) || /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 ,'.&~?!-]{2,}$/.test(value);
}, "Invalid Format");

//method to accept Capital letters and numbers only
jQuery.validator.addMethod("commaDot", function(value, element) {
  return this.optional(element) || /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 ,'.&~\-?!_]{2,}$/.test(value);
}, "Invalid Format");

//method to accept Capital letters and numbers only
jQuery.validator.addMethod("capLettersNumericOnly", function(value, element) {
  return this.optional(element) || /^[A-Z0-9]+$/.test(value);
}, "Invalid Format");

// method to accept letters and single (.) symbol only
jQuery.validator.addMethod("lettersdotonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z]+[.]{0,1}[a-zA-Z]*$/i.test(value);
}, "Invalid Format");

// method to accept letters and  (.) and (-)(_)(@)(&) and number and space symbol only
jQuery.validator.addMethod("lettersnumberdotunderscoreattherateandonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9-/./_/@/&/ ]*$/i.test(value);
}, "Invalid Format");

// method to accept letters and  (.) and (-)(_)(@)(&) and number and space symbol only
jQuery.validator.addMethod("lettersdotunderscoreattherateandonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z-/./_/@/&/ ]*$/i.test(value);
}, "Invalid Format");


// method to accept letters and  (.) and (-)(_) and number and space symbol only
jQuery.validator.addMethod("lettersdotunderscoreonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9-/./_/]*$/i.test(value);
}, "Invalid Format");

// method to accept letters and  (.) and (,) and number and space symbol only
jQuery.validator.addMethod("lettersdotcommaspacenumberonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9,.!? ]*$/i.test(value);
}, "Invalid Format");

// method to accept letters and  and (,) and number and  symbol only (smtp username)
jQuery.validator.addMethod("lettersdotcommanumberonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9-/,/_/@/]*$/i.test(value);
}, "Invalid Format");

// method to accept letters and  (.) and (-)(_) and number and space symbol only
jQuery.validator.addMethod("lettersdotunderscore", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9- /./_/]*$/i.test(value);
}, "Invalid Format");

// method to accept letters only
jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
}, "Invalid Format");



// method to accept letters and space only
jQuery.validator.addMethod("letterSpaceonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
}, "Invalid Format");

// method to accept letters and space (.) only
jQuery.validator.addMethod("letterDotSpaceonly", function(value, element) {
  return this.optional(element) || /^[a-zA-Z. ]*$/i.test(value);
}, "Invalid Format");



// method to accept letters and symbol but not numbers
jQuery.validator.addMethod("letterSymbol", function(value, element) {
  return this.optional(element) || /^[\D]*$/i.test(value);
}, "Invalid Format");



 // method to accept email only
jQuery.validator.addMethod("mail", function(value, element) {
    return this.optional(element) || /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(value);
},'Invalid Format');



//  method to check strong password
// return /^[A-Za-z0-9\d=!\-@._*#$%^&?]*$/.test(value) // consists of only these
jQuery.validator.addMethod("pwcheck", function(value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#\[\{\]\}\;\:\'\"\<\>\,\.\/\?\`\~$\^\(\)\-\_\\\|!%*\+?\=&])[A-Za-z\d$@$\\\|\[\{\]\}\;\:\'\"\<\>\,\.\/\?\`\~\=\+\^\(\)\-\_#!%*?&].*$/.test(value)
//    && /[a-z]/.test(value) // has a lowercase letter
//    && /[A-Z]/.test(value) // has a uppercase letter
//    && /\d/.test(value) // has a digit
//    && /\W/.test(value) // has a digit
},'Invalid format. Please refer to password policy');



// method to accept Longitude only
jQuery.validator.addMethod("longitude", function(value, element) {
  return this.optional(element) || /^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,8}$/i.test(value);
}, "Enter Correct Longitude");



// method to accept Latitude only
jQuery.validator.addMethod("latitude", function(value, element) {
  return this.optional(element) || /^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,8}$/i.test(value);
}, "Enter Correct Latitude");


// method to accept url DOmain only
jQuery.validator.addMethod("urlDomain", function(value, element) {
  return this.optional(element) || /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(value);
}, "Invalid Format");

// method to accept smtp url only
jQuery.validator.addMethod("urlsmtp", function(value, element) {
  return this.optional(element) || /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|ssl:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(value);
}, "Invalid Format");

// method to accept letters and  and (,) and number and  symbol only (smtp username)
jQuery.validator.addMethod("pwCheckSmtp", function(value, element) {
  return this.optional(element) || /^\S*$/i.test(value);
}, "Invalid Format");

// method to accept company url only
jQuery.validator.addMethod("companyUrl", function(value, element) {
  return this.optional(element) || /^(?:(http|https):\/\/)?(www)?(?:[\w-]+\.)+[a-z]{2,6}$/i.test(value);
}, "Invalid URL Format");

// method to accept phone numbers with + and parenthesis()
jQuery.validator.addMethod("phonenumber", function(value, element) {
  return this.optional(element) || /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(value);
}, "Invalid Format");
