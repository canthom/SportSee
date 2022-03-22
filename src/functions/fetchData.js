/**
 * Send a request to fetch user activity
 * @param { String } id
 * @returns { Promise }
 */

export function getActivity(id) {
  return fetch(`http://localhost:3000/user/${id}/activity`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(`Activity:`);
      // console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(`Error Activity: ${error}`);
    });
}

export function getUser(id) {
  return fetch(`http://localhost:3000/user/${id}`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(`User Infos:`);
      // console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(`Error User Infos: ${error}`);
    });
}

export function getSessions(id) {
  return fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(`Sessions:`);
      // console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(`Error Sessions: ${error}`);
    });
}

export function getPerformance(id) {
  return fetch(`http://localhost:3000/user/${id}/performance`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(`Performance:`);
      // console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(`Error Performance: ${error}`);
    });
}
