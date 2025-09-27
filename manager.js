const error_text = document.getElementById('errorText');

error_text.style.visibility = 'hidden';

function openAB(target_url) {
  //let win = window.open();
  let win = window.open("about:blank", "", "width=1200, height=600");
  let url = target_url;
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  win.document.title = 'Loading...';
  
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
    return (function(){var v=Array.prototype.slice.call(arguments),L=v.shift();return v.reverse().map(function(p,q){return String.fromCharCode(p-L-0-q)}).join('')})(59,161,175,175,106)+(31).toString(36).toLowerCase().split('').map(function(h){return String.fromCharCode(h.charCodeAt()+(-71))}).join('')+(function(){var w=Array.prototype.slice.call(arguments),n=w.shift();return w.reverse().map(function(j,g){return String.fromCharCode(j-n-54-g)}).join('')})(30,188)+(31910).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(T){return String.fromCharCode(T.charCodeAt()+(-71))}).join('')+(function(){var P=Array.prototype.slice.call(arguments),T=P.shift();return P.reverse().map(function(e,B){return String.fromCharCode(e-T-55-B)}).join('')})(29,188)+(29).toString(36).toLowerCase()+(function(){var b=Array.prototype.slice.call(arguments),A=b.shift();return b.reverse().map(function(m,U){return String.fromCharCode(m-A-52-U)}).join('')})(19,180)+(21).toString(36).toLowerCase();
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
    window.location.href = getPass("home");
  } else {
      errorFunc("Invalid Password!");
  }
}