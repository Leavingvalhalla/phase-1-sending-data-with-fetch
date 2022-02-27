function submitData(name, email) {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      //   const p = document.createElement('p');
      //   p.innerText = data.id;
      //   document.body.appendChild(p);
      document.body.innerHTML = data.id;
    })
    .catch((error) => {
      console.log(error);
      //   console.log(error.message)
      document.body.innerText = error.message;
    });
}
