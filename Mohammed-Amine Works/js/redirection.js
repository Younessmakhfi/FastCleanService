
document.getElementById('btn_Residential').addEventListener('click',function(){

  localStorage.setItem("service","Residential Cleaning Services");
  window.location.href = "make_qoute.html";

});
document.getElementById('btn_commercial').addEventListener('click',function(){

  localStorage.setItem("service","Commercial Cleaning Services");
  window.location.href = "make_qoute.html";

});
document.getElementById('btn_Airbnb').addEventListener('click',function(){

  localStorage.setItem("service","Airbnb Cleaning Service");
  window.location.href = "make_qoute.html";
});
