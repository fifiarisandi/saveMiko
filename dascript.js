/*function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } */


/*let result = document.querySelector("#sponsorText");

document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "BUTTON"){
        result.innerText = `${element.id}: ${element.innerText}`;
    }
} */

 function clickedBtn() {
    document.getElementById("dogsBtn").addEventListener("click", dButton(e));
    //document.getElementById("dogsBtn").onclick = dButton;
}

function dButton(e) {
    //document.getElementsByName("sponsorText")[0].value="";
    if (e.target.tagName == "BUTTON") {
        var dogName = e.target.name;
        document.getElementById("sponsorText").innerHTML = "I want to sponsor " + e.target.name;
      
        //  document.getElementsByName("sponsorText")[0].placeholder = 'I want to sponsor ' + e.target.name;
      //  document.getElementById("sponsorTextBox") [0].placeholder = "I want to sponsor " + e.target.name;
    }
}



 /* function inputSponsorTextBox() { 
      

    document.getElementById("sponsorTextBox").inputSponsorText = "button.id";
    
      /*document.getElementById("demo").innerHTML = "Hello JavaScript!";
  } */