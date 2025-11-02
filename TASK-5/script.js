// Select the root element
const app = document.getElementById('app');

// Create container div
const formContainer = document.createElement('div');
formContainer.className = 'form-container';

// Create heading
const heading = document.createElement('h2');
heading.textContent = 'Login';

// Create form element
const form = document.createElement('form');

// Create Email Field
const emailGroup = document.createElement('div');
emailGroup.className = 'form-group';

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Enter your email';
emailInput.required = true;

emailGroup.appendChild(emailLabel);
emailGroup.appendChild(emailInput);

// Create Password Field
const passGroup = document.createElement('div');
passGroup.className = 'form-group';

const passLabel = document.createElement('label');
passLabel.textContent = 'Password:';
const passInput = document.createElement('input');
passInput.type = 'password';
passInput.placeholder = 'Enter your password';
passInput.required = true;

passGroup.appendChild(passLabel);
passGroup.appendChild(passInput);

// Create Button
const loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Login';

// Create error message area
const errorMsg = document.createElement('div');
errorMsg.className = 'error';

// Append everything to form
form.appendChild(emailGroup);
form.appendChild(passGroup);
form.appendChild(loginButton);
formContainer.appendChild(heading);
formContainer.appendChild(form);
formContainer.appendChild(errorMsg);
app.appendChild(formContainer);

// Event Listener
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passInput.value.trim();

  if (!email || !password) {
    errorMsg.textContent = 'Please fill in all fields!';
    return;
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = 'Please enter a valid email address!';
    return;
  }

  // Password check
  if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters!';
    return;
  }

  // If valid
  errorMsg.textContent = '';
  alert(`Email: ${email}\nPassword: ${password}`);
});
