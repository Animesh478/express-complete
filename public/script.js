const formEl = document.querySelector("form");

async function submitForm(e) {
  e.preventDefault();

  const formData = new FormData(formEl);
  formData.append("email", "test@gmail.com");

  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  try {
    await fetch("http://localhost:3008/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(JSON.stringify({ Error: error }));
  }
}

formEl.addEventListener("submit", submitForm);
