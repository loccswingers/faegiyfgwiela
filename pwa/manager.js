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

function authenticate(){
  let input = document.getElementById('pass');

  if (input.value == '') {
    errorFunc("You need to enter a password!");
    return 0;
  } else if (getPWADisplayMode() == false) {
    setTimeout(occurError, 1000);
    return 0;
  };

  if (input.value == 'C_Admin') {
    window.location.href = "https://google.com";
  } else {
      errorFunc("Invalid Password!");
  }
}