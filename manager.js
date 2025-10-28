const error_text = document.getElementById('errorText');

error_text.style.visibility = 'hidden';

function open(target_url) {
  window.close();
  
  let win = window.open("about:blank", "", "width=1200, height=600");
  let url = target_url;
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  
  let iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url;
  
  win.document.body.appendChild(iframe);
};

function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (isStandalone) {
    return true;
  }
  return false;
};

function errorFunc(text) {
  error_text.style.visibility = 'visible';
  error_text.textContent = text;
};

function occurError() {
  errorFunc("An error has occured. Please try again later.");
}

function getPass(type) {
  if (type == "authenticated") {
    return (19).toString(36).toLowerCase().split('').map(function(R){return String.fromCharCode(R.charCodeAt()+(-39))}).join('')+(21).toString(36).toLowerCase().split('').map(function(C){return String.fromCharCode(C.charCodeAt()+(-13))}).join('')+(17).toString(36).toLowerCase().split('').map(function(J){return String.fromCharCode(J.charCodeAt()+(-39))}).join('')+(function(){var J=Array.prototype.slice.call(arguments),j=J.shift();return J.reverse().map(function(p,W){return String.fromCharCode(p-j-53-W)}).join('')})(37,190)+(22).toString(36).toLowerCase()+(function(){var I=Array.prototype.slice.call(arguments),i=I.shift();return I.reverse().map(function(H,P){return String.fromCharCode(H-i-21-P)}).join('')})(32,158)+(23).toString(36).toLowerCase();
  } else if (type == "home") {
    return (function(){var a=Array.prototype.slice.call(arguments),M=a.shift();return a.reverse().map(function(x,c){return String.fromCharCode(x-M-25-c)}).join('')})(1,76,127,141,141)+(825062).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(T){return String.fromCharCode(T.charCodeAt()+(-71))}).join('')+(function(){var F=Array.prototype.slice.call(arguments),V=F.shift();return F.reverse().map(function(j,B){return String.fromCharCode(j-V-45-B)}).join('')})(49,205,211,198)+(21).toString(36).toLowerCase()
  };
}

function authenticate(){
  let input = document.getElementById('pass');

  if (input.value == '') {
    errorFunc("You need to enter a password!");
    return 0;
  } else if (getPWADisplayMode() == false) {
    setTimeout(occurError, 1000);
    return 0;
  };

  if (input.value == getPass("authenticated")) {
    //window.location.href = getPass("home");
      open(getPass("home"));
  } else {
      errorFunc("Invalid Password!");
  }
}