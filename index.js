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
      // prettier-ignore
      document.body.innerHTML = data.id
    })
    .catch((error) => {
      console.log(error);
      //   console.log(error.message);
      // prettier-ignore
      //   document.body.innerText = error.message
      alert('Unauthorized Access')
    });
}
