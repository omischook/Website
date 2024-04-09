const surname = document.getElementById('surname');
const forename = document.getElementById('forename');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const streetnumber = document.getElementById('streetnumber');
const streetname = document.getElementById('streetname');
const postcode = document.getElementById('postcode');
const town = document.getElementById('town');
const country = document.getElementById('country');



function validateForm(){
  var inputs = document.getElementsByTagName('input');
  var isValid = true;
  // General validation: Check if all fields are not empty
  for (var position = 0; position < inputs.length; position++) {
    if (inputs[position].value.trim() === '') {
        isValid = false;
        alert('Please fill field' + inputs[position].name);
        break; // Exit the loop
    }
  }

  if (isValid) {
    backupCheck(inputs, isValid); // Pass inputs array and isValid flag
  }
}
  
function backupCheck(inputs, isValid) { // Receive inputs array and isValid flag
    for (var position = 0; position < inputs.length; position++) {
      if (inputs[position].classList.contains('Name')) {
            nameCheck(inputs, position, isValid); // Pass inputs array and isValid flag
            if (!isValid) break; // Exit the loop
      }
      else if (inputs[position].classList.contains('Number')) {
            numberCheck(inputs, position, isValid); // Pass inputs array and isValid flag
            if (!isValid) break; // Exit the loop
      }
      else if (inputs[position].id === 'postcode') {
            valid_postcode(inputs, position, isValid); // Pass inputs array and isValid flag
            if (!isValid) break; // Exit the loop
      }
      else if (inputs[position].id === 'email') {
            valid_email(inputs, position, isValid); // Pass inputs array and isValid flag
            if (!isValid) break; // Exit the loop
      }
    }
}

function nameCheck(inputs, position, isValid) {
  if (inputs[position].classList.contains('Name')) {
    if (inputs[position].value.length < 2 || inputs[position].value.length > 20 || inputs[position].value.match(/[^a-zA-Z]/)) {
      isValid = false;
      alert('Please fill field: ' + inputs[position].name);
    }
  }
}

function numberCheck(inputs, position, isValid) {
  var phoneNumber = inputs[position].value.trim(); // Trim the value to remove leading and trailing whitespaces
  alert(phoneNumber);
  if (phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/) {
    isValid = false;
    alert('Please fill field: ' + inputs[position].name + ' with a valid integer phone number.');
  }
  }



function valid_postcode(inputs, position, isValid) {
  var postcode = inputs[position].value.replace(/\s/g, "");
  if (!/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(postcode)) {
    isValid = false;
    alert('Please fill field: ' + inputs[position].name);
  }
}

function valid_email(inputs, position, isValid) {
  var email = inputs[position].value;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    isValid = false;
    alert('Please fill field: ' + inputs[position].name);
  }
}

/**
 * Change the theme of the page and load the currently selected theme from local storage -----------------------------------------
 */


function changeTheme() {
  const selectElement = document.getElementsByClassName('theme-select')[0];
  const selectedOption = selectElement.value;
  const themeStyle = document.getElementById('theme-style');

  switch (selectedOption) {
    case 'light':
      themeStyle.href = 'CSS/light.css';
      break;
    case 'dark':
      themeStyle.href = 'CSS/dark.css';
      break;
    case 'protanopia':
      themeStyle.href = 'CSS/protanopia.css';
      break;
    case 'deuteranopia':
      themeStyle.href = 'CSS/deuteranopia.css';
      break;
    case 'tritanopia':
      themeStyle.href = 'CSS/tritanopia.css';
      break;
    // Add more cases as needed
  }

  localStorage.setItem('theme', selectedOption);
}

window.onload = function() {
  const selectedOption = localStorage.getItem('theme');
  const themeStyle = document.getElementById('theme-style');

  if (selectedOption) {
    switch (selectedOption) {
      case 'light':
        themeStyle.href = 'CSS/light.css';
        break;
      case 'dark':
        themeStyle.href = 'CSS/dark.css';
        break;
      case 'protanopia':
        themeStyle.href = 'CSS/protanopia.css';
        break;
      case 'deuteranopia':
        themeStyle.href = 'CSS/deuteranopia.css';
        break;
      case 'tritanopia':
        themeStyle.href = 'CSS/tritanopia.css';
        break;
      // Add more cases as needed
    }
  }
}

function extractImageDimensions() {
  const images = $('img');
  const dimensions = [];

  images.each(function() {
    const width = $(this).width();
    const height = $(this).height();
    dimensions.push({ width, height });
  });

  return dimensions;
}

const buttons = document.querySelectorAll('data-carousel');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button
      .closest('.carousel')
      .querySelectorAll('.carousel__slide');

    const activateSlide = slides.querySelectorAll('.carousel__slide--active');
    let newIndex = Array.from(slides).indexOf(activateSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = 'true';
    delete activateSlide.dataset.active;
  });
});