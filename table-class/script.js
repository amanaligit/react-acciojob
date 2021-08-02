const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const website = document.querySelector("#website");

// for serial number
let sr = 0;

// console.log(
//   form,
//   firstname,
//   lastname,
//   username,
//   email,
//   address,
//   phone,
//   company,
//   website
// );

form.oninput = (e) => {
  // clear the error corresponding to this input
  const input = e.target;
  input.parentNode.querySelector(".alert-danger").style.display = "none";
};

const insertIntoTable = ({
  firstname,
  lastname,
  username,
  email,
  address,
  phone,
  company,
  website,
}) => {
  sr++;
  document.querySelector("tbody").innerHTML += `
    <tr>
          <td>${sr}</td>
          <td>${firstname + " " + lastname}</td>
          <td>${username}</td>
          <td>${email}</td>
          <td>${address}</td>
          <td>${phone}</td>
          <td> <a href="${website}" > ${website} </a> </td>
          <td>${company}</td>
    </tr>
    `;
  // after submit, clear all inputs
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
};

const validateAndInsert = (formData) => {
  const {
    firstname,
    lastname,
    username,
    email,
    address,
    phone,
    company,
    website,
  } = formData;

  // validate firstname
  // regex for selecting all invalid names
  if (/^(.*[^\w].*|.{0,2})$/g.test(firstname)) {
    document.getElementById("firstname-error").style.display = "block";
    return;
  }

  if (/^(.*[^\w].*|.{0,2})$/g.test(lastname)) {
    document.getElementById("lastname-error").style.display = "block";
    return;
  }

  // regex for selecting all correct usernames
  if (!/^[.\w]+$/g.test(username)) {
    document.getElementById("username-error").style.display = "block";
    return;
  }
  //   console.log(/^[.\w]+$/g.test(username));

  // regex to select all correct emails
  if (!validator.isEmail(email)) {
    document.getElementById("email-error").style.display = "block";
    return;
  }

  // if (!/^[^\s@#$%^&*()!]+@[^\s@#$%^&*()!]+\.[^\s@#$%^&*()!]+$/g.test(email)) {
  //   document.getElementById("email-error").style.display = "block";
  //   return;
  // }

  if (!address) {
    document.getElementById("address-error").style.display = "block";
    return;
  }
  // regex to select all correct phonenumbers

  if (!validator.isMobilePhone(phone)) {
    document.getElementById("phone-error").style.display = "block";
    return;
  }

  // if (!/^\d{3}-\d{3}-\d{4}$/g.test(phone)) {
  //   document.getElementById("phone-error").style.display = "block";
  //   return;
  // }

  // regex to select all correct websites

  if (!validator.isURL(website) && website !== "") {
    document.getElementById("website-error").style.display = "block";
    return;
  }

  // if (!/^https?:\/\/www\.\S+\.\S+$/g.test(website) && website !== "") {
  //   document.getElementById("website-error").style.display = "block";
  //   return;
  // }

  insertIntoTable(formData);

  // https://www.youtube.com/
};

// validateAndInsert({
//   firstname: "am",
//   lastname: "am",
//   username: "aman@",
//   email: "aman@gmail.com",
//   phone: "123-456-1234",
//   website: "https://www.youtube.com/",
// });

form.onsubmit = (e) => {
  e.preventDefault();
  validateAndInsert({
    lastname: lastname.value,
    firstname: firstname.value,
    username: username.value,
    email: email.value,
    phone: phone.value,
    website: website.value,
    company: company.value,
    address: address.value,
  });
};

// Third party libraries for JavaScript/React:
// 1. react-router-dom
// 2. Redux
// 3. Redux-thunk

// 4. Axios: Library for AJAX requests: replaces fetch function;

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((result) => {
//     if (result.ok) return result.json();
//     else alert("something went wrong");
//   })
//   .then((users) => {
//     // console.log(users);
//     //   call insertIntoTable function

//     //   Lets construc the form data for each user;
//     if (users) {
//       users.forEach((user) => {
//         const formData = {};
//         formData.address = `${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`;
//         formData.company = user.company.name;
//         formData.email = user.email;
//         formData.firstname = user.name.split(" ")[0];
//         formData.lastname = user.name.split(" ")[1];
//         formData.phone = user.phone;
//         formData.username = user.username;
//         formData.website = "http://" + user.website;
//         insertIntoTable(formData);
//       });
//     }
//   })
//   .catch((err) => console.log("error happenme"));

//   axios

// resp.json() -> not required in axios, it is automatic

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((resp) => {
    console.log("got users");
    const users = resp.data;
    users.forEach((user) => {
      const formData = {};
      formData.address = `${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`;
      formData.company = user.company.name;
      formData.email = user.email;
      formData.firstname = user.name.split(" ")[0];
      formData.lastname = user.name.split(" ")[1];
      formData.phone = user.phone;
      formData.username = user.username;
      formData.website = "http://" + user.website;
      insertIntoTable(formData);
    });
  })
  .catch((err) => alert(err.message));

// axios, no need to do JSON.strigify(data) in post request
