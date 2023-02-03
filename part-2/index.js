const API_URL = "https://test-works.pr-uni.ru/api/login";

const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const loginInput = document.getElementById("login");
const passInput = document.getElementById("password");
const fieldError = document.querySelector(".form__error");
const formWrapper = document.querySelector(".login");
const loginSuccessBlock = document.querySelector(".login-success");
const loginSuccessText = document.querySelector(".login-success__text");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const target = e.target;

  target.classList.add("loading");
  loader.classList.remove("hidden");
  loginInput.disabled = true;
  passInput.disabled = true;
  submitBtn.disabled = true;

  loginRequest(
    `${API_URL}/index.php?login=${loginInput.value}&password=${passInput.value}`
  )
    .then((res) => {
      if (res.status === "error") {
        fieldError.textContent = res.errorMessage;
        fieldError.classList.remove("hidden");

        loginInput.classList.add("invalid");
        passInput.classList.add("invalid");
      }

      if (res.status === "ok") {
        formWrapper.classList.add("hidden");
        loginSuccessText.textContent = `${res.user.name}, Вы успешно авторизованы!`;
        loginSuccessBlock.classList.remove("hidden");

        document.cookie = `token=${res.token}`;
      }
    })
    .finally(() => {
      target.classList.remove("loading");
      loader.classList.add("hidden");
      loginInput.disabled = false;
      passInput.disabled = false;
      submitBtn.disabled = false;
    });
});

const loginRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
