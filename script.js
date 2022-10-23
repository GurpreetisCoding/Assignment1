function validateForm() {
  let pass = document.forms["theForm"]["pass"].value;
  let ckpass = document.forms["theForm"]["ckpass"].value;
  if (pass.localeCompare(ckpass) < 0 || pass.localeCompare(ckpass) > 0) {
    alert("Passwords dont match");
    return false;
  }

  let name = document.forms["theForm"]["user"].value; //this line finds out the value of user from "theForm" in page3. 
  const existingUser = ["Harry", "Elizabeth", "Shana"]; //arraylist 
  if (existingUser.includes(name) == true) { 
    alert("Username already exists");
    return false;
  }
}

function drawShape() {
  // This lines gets the canvas that we are working on
  var canvas = document.getElementById('mycanvas');
            
  // Sees if the browser supports canvas 
  if (canvas.getContext) {
            
    // This allows you to use the canvas and specify the rending
    var ctx = canvas.getContext('2d');
               
    ctx.fillStyle = '#FF0000';
    ctx.font = 'Italic 30px Sans-Serif';
               
    ctx.textBaseline = 'Top';
    ctx.fillText('JavaScript is Cool!', 40, 100);

    ctx.strokeStyle = '#00F';
    ctx.font = 'Bold 25px Sans-Serif';
    ctx.strokeText('Welcome to Page1!', 40, 60);
  } else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
}