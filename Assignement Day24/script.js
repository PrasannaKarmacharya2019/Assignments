const email = document.getElementById("username");
console.log(email);
const password = document.getElementById("password");
console.log(password);
const loginBtn = document.getElementById("login-btn");

if (loginBtn && email && password) {
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    let data = {
      email: email.value,
      password: password.value,
    };
    const loginForm = async () => {
      const resp = await fetch(
        "https://backend-mu-pied.vercel.app/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const loginResp = await resp.json();
      if (loginResp.status) {
        window.location.href = "dashboard.html";
      } else {
        console.log(loginResp);
        document.getElementById("error-message").innerText = loginResp.message;
      }
    };

    loginForm();
  });
}

const sighupHandler = async (event) => {
  event.preventDefault();
  const fullName = document.querySelector("#fullName").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  const data = {
    fullName: fullName,
    email: email,
    password: password,
  };

  const resp = await fetch(
    "https://backend-mu-pied.vercel.app/users/register",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const signupResp = await resp.json();

  if (signupResp.status) {
    window.location.href = "./login.html";
  } else {
    document.getElementById("error-msg").innerText = signupResp.message;
  }
};
