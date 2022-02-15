const url = "https://microcent-api.herokuapp.com/v1";
function fetchData() {
    const Http = new XMLHttpRequest();
    const url = url + '/customerMessage';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}

function subscribe() {
    var email = document.getElementById("subscription_email").value;
    if (email) {
        const XHR = new XMLHttpRequest();

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            console.log(event.target.responseText);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            console.log('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open("POST", url+"/web/subscribe");

        var data = {
            email
        };

        var jsonData = JSON.stringify(data);

        XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        // The data sent is what the user provided in the form
        XHR.send(jsonData);
        console.log("Subscribing...", data)
    }
}
// Send form data to backend
document.addEventListener('DOMContentLoaded', function () {
  console.log("Attached")
    function sendData() {
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);

        FD.append('user_type', "Customer")

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            console.log(event.target.responseText);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            console.log('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open("POST", url+ "/web/customerMessage");

        var object = {};
        FD.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);

        XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        // The data sent is what the user provided in the form
        XHR.send(json);
    }
    // Access the form element...
    const form = document.getElementById("contactForm");

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});

let inputs = document.querySelectorAll('input');
let messageInput = document.getElementsByTagName('textarea')[0];

let allFeilds = [...inputs, messageInput]
let buttonSend = document.getElementById('customer_submit');
buttonSend.disabled = true;
console.log(buttonSend)

let inputValidator = {
  "name": false,
  "email": false,
  "message":false
}

allFeilds.forEach((input) => {
  input.addEventListener('input', () => {
    let name = event.target.getAttribute('name');
  //  console.log(name)
    if (event.target.value.length > 0) {
      inputValidator[name] = true;
    } else {
      inputValidator[name] = false;
    };

    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true
    });

    if (allTrue) {
      buttonSend.disabled = false;
    } else {
      buttonSend.disabled = true;
    }
  })
})

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }