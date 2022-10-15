function validateForm() {
  let pass = document.forms["theForm"]["pass"].value;
  let ckpass = document.forms["theForm"]["ckpass"].value;
  if (pass.localeCompare(ckpass) < 0 || pass.localeCompare(ckpass) > 0) {
    alert("Passwords dont match");
    return false;
  }
  let name = document.forms["theForm"]["user"].value;
  const existingUser = ["Harry", "Elizabeth", "Shana"];
  if (existingUser.includes(name) == true) {
    alert("Username already exists");
    return false;
  }
}