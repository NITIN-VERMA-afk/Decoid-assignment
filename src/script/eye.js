const passwordInput = document.getElementById('password');
const togglePasswordVisibility = document.getElementById('togglePasswordVisibility');
const eyeIcon = document.getElementById('eye-icon');

togglePasswordVisibility.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.innerHTML = `
      <path
        fill-rule="evenodd"
        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
        clip-rule="evenodd"
      />
      <path
        d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.585A8 8 0 0010 14a8.001 8.001 0 004.958-1.686a4.017 4.017 0 00-.624-2.04L13.03 11.57a4 4 0 01.425 5.128z"
      />
    `;
  } else {
    passwordInput.type = 'password';
    eyeIcon.innerHTML = `
      <path
        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
        fill-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clip-rule="evenodd"
      />
    `;
  }
});