let mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", function() {
  let myinput = document.getElementsByTagName("input");
  let demo = document.getElementsByClassName("demo");

  for (let i = 0; i < myinput.length; i++) {
    if (myinput[i].type === "radio" && myinput[i].checked) {
      
      if (myinput[i].value != "Picasso") {
        demo[0].innerHTML = "Incorrect!";
        demo[0].style.color = "red";
        demo[0].style.fontWeight = "bold";
        demo[0].style.fontSize = "20px";
      };
      if (myinput[i].value === "Picasso") {
        demo[0].innerHTML = "Correct!";
        demo[0].style.color = "green";
        demo[0].style.fontWeight = "bold";
        demo[0].style.fontSize = "20px";
      };
  }
}
});