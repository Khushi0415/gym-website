const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const password = document.querySelector(".password");
const userName = document.querySelector(".userName");
btn.addEventListener("click", () => {
  const inputVal = input.value;
  const passwordVal = password.value;
  const userNameVal = userName.value;
  if (passwordVal.length < 10) {
    alert("Password must be of 10 characters");
  }
  const arr = [{ inputVal, passwordVal, userNameVal }];
  console.log(arr);
});