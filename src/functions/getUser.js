export function getUser(id) {
  fetch(`http://localhost:3000/user/${id}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
