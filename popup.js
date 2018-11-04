const client = stitch.Stitch.initializeDefaultAppClient('bookmarks-hlhev');

document.getElementById("submitLogin").addEventListener("click", function(event){
  //event.preventDefault();
  console.log("Start Login validation");

  //make a credential variable that has the inputed user
  let username = document.getElementById("usernameIn").value;
  let password = document.getElementById("passwordIn").value;
  localStorage.setItem("username", username);
  // console.log (username, password);
  const credential = new stitch.UserPasswordCredential(username, password);

  /*client.auth.loginWithCredential(credential).then(authedId => {
     console.log(`successfully logged in with id: ${authedId}`)
     //route to the home page
     console.log("login sucess!!");
  }).catch(err => console.error(`login failed with error: ${err}`))*/
});
