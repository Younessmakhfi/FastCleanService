document.getElementById('service').value = localStorage.getItem("service");

function hide()
{
      var storage = localStorage.getItem("service");
      var elementhiding = document.getElementById('company_div');
      if(storage == "Commercial Cleaning Services"){
          elementhiding.style.display = "flex";
      }
      else {
          elementhiding.style.display = "none";
      }
}
document.getElementById('send').addEventListener('click',function(){
    var phon = document.getElementById('phone').value;
    var regex = /^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
    if(!phon.match(regex))
    {
      document.getElementById('eror').innerHTML = "verify the form of phone please";
    }
    else{
      document.getElementById('eror').innerHTML = " ";
    }
});
