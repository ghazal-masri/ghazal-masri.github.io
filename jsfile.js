function a() {


	window.alert("Welcome to [Ghazal Masri] site, please let me know if you have any questions");

}	

   function change() {
   document.getElementById("green").style.color = "green";
        }
         function change2() {
   document.getElementById("green").style.color = "black";
        }

function checkforembty(){
	var error="";
	var firstvalue=document.getElementById('fname').value;
    var secvalue=document.getElementById('lname').value;
    var thirdvalue=document.getElementById('email').value;
    var forvalue=document.getElementById('UserName').value;
    var fifvalue=document.getElementById('pwd').value;




	if(firstvalue.replace(/\s/g , "").length <= 0 ){
      error+="please Enter your First Name\n";
      document.getElementById('fname').style.borderColor="red";
     }
	if(secvalue.replace(/\s/g , "").length <= 0 ){
      error+="please Enter your last Name\n";
      document.getElementById('lname').style.borderColor="red";
	}
	if(thirdvalue.replace(/\s/g , "").length <= 0 ){
      error+="please Enter your Email\n";
      document.getElementById('email').style.borderColor="red";
	}
	if(forvalue.replace(/\s/g , "").length <= 0 ){
      error+="please Enter your UserName\n";
      document.getElementById('UserName').style.borderColor="red";
	}
	if(fifvalue.length <= 0 ){
      error+="please Enter your password\n";
      document.getElementById('pwd').style.borderColor="red";
	}
	if(error!=""){
      alert(error);
      return false;
	}
}
function type0(){
window.addEventListener("keydown",Press, false);
function Press() {
var firstvalue=document.getElementById('fname').value;

 if (firstvalue.replace(/\s/g , "").length <= 0 ) {
 document.getElementById('fname').style.borderColor="red";
 }
 else{
 document.getElementById('fname').style.borderColor="black";
     }
     }
     }

function type1(){
window.addEventListener("keydown", Press, false);
function Press() {
var secvalue=document.getElementById('lname').value;

 if (secvalue.replace(/\s/g , "").length <= 0 ) {
 document.getElementById('lname').style.borderColor="red";
 }
 else{
 document.getElementById('lname').style.borderColor="black";
     }
     }
     }

function type2(){
window.addEventListener("keydown",Press, false);
function Press() {
var thirdvalue=document.getElementById('email').value;

 if (thirdvalue.replace(/\s/g , "").length <= 0 ) {
 document.getElementById('email').style.borderColor="red";
 }
 else{
 document.getElementById('email').style.borderColor="black";
     }
     }
     }

function type3(){
window.addEventListener("keydown",Press, false);
function Press() {
var forvalue=document.getElementById('UserName').value;

 if (forvalue.replace(/\s/g , "").length <= 0 ) {
 document.getElementById('UserName').style.borderColor="red";
 }
 else{
 document.getElementById('UserName').style.borderColor="black";
     }
     }
     }

function type4(){
window.addEventListener("keydown",Press, false);
function Press() {
var fifvalue=document.getElementById('pwd').value;

 if (fifvalue.length <= 0 ) {
 document.getElementById('pwd').style.borderColor="red";
 }
 else{
 document.getElementById('pwd').style.borderColor="black";
     }
     }
     }




diss.addEventListener('input', () => {
if(fname.value.length > 0){
	lname.removeAttribute('disabled');
}
else{
	lname.setAttribute('disabled','disabled');
}});

diss.addEventListener('input', () => {
if(fname.value.length > 0 && lname.value.length > 0  ){
	email.removeAttribute('disabled');
}
else{
	email.setAttribute('disabled','disabled');
}});	

diss.addEventListener('input', () => {
if(fname.value.length > 0 && lname.value.length > 0 && email.value.length > 0){
	UserName.removeAttribute('disabled');
}
else{
	UserName.setAttribute('disabled','disabled');
}});	

diss.addEventListener('input', () => {
if(fname.value.length > 0 && lname.value.length > 0 && email.value.length > 0 && UserName.value.length > 0){
	pwd.removeAttribute('disabled');
}
else{
	pwd.setAttribute('disabled','disabled');
}});	     


function find(){

var emm = document.getElementById('email').value;
var emmm =emm.split("");
for(var i=0;i<emmm.length;i++){
         if(emmm[i]=="@"){
         var sum="";	
        for(var j=0 ;j<emmm.length;j++){
        	if(j<i){
         sum+=emmm[j];
          }
         document.getElementById('done').innerHTML="The application of [" + sum + "] is saved!" ;
        }
        }
        }
        }
  










