/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*HIDE ABOUT ME SECTION */

$(".portS2" ).hide();

/*
SHOW ABOUT ME ON CLICK AND...
HIDE LEARN MORE BUTTON... 
*/

$(".showMorePort").click(function(){
    $(".portS2").show();
    $(".showMorePort").hide();
});



$(".moreAbtMe" ).hide();

$(".learnMore").click(function(){
    $(".moreAbtMe").show();
    $(".learnMore").hide();
});

// /////////////// //
// Get the modal  1 
// ////////////// //

var modalpm1 = document.getElementById('pm1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('print-modal-1');
var modalImg1 = document.getElementById("pm01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
    modalpm1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modalpm1.style.display = "none";
};

// /////////////// //
// Get the modal  2 
// ////////////// //

var modalpm2 = document.getElementById('pm2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('print-modal-2');
var modalImg2 = document.getElementById("pm02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modalpm2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modalpm2.style.display = "none";
};

// /////////////// //
// Get the modal  3
// ////////////// //

var modalpm3 = document.getElementById('pm3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('print-modal-3');
var modalImg3 = document.getElementById("pm03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
    modalpm3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modalpm3.style.display = "none";
};

// /////////////// //
// Get the modal  4
// ////////////// //

var modalpm4 = document.getElementById('pm4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById('print-modal-4');
var modalImg4 = document.getElementById("pm04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
    modalpm4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
  modalpm4.style.display = "none";
};

// /////////////// //
// Get the modal  5
// ////////////// //

var modalpm5 = document.getElementById('pm5');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById('print-modal-5');
var modalImg5 = document.getElementById("pm05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
    modalpm5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() { 
  modalpm5.style.display = "none";
};

// /////////////// //
// Get the modal  6
// ////////////// //

var modalpm6 = document.getElementById('pm6');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById('print-modal-6');
var modalImg6 = document.getElementById("pm06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
    modalpm6.style.display = "block";
    modalImg6.src = this.src;
    captionText6.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span6.onclick = function() { 
  modalpm6.style.display = "none";
};

// /////////////// //
// Get the modal  7
// ////////////// //

var modalpm7 = document.getElementById('pm7');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7 = document.getElementById('print-modal-7');
var modalImg7 = document.getElementById("pm07");
var captionText7 = document.getElementById("caption7");
img7.onclick = function(){
    modalpm7.style.display = "block";
    modalImg7.src = this.src;
    captionText7.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close")[6];

// When the user clicks on <span> (x), close the modal
span7.onclick = function() { 
  modalpm7.style.display = "none";
};

// /////////////// //
// Get the modal  8
// ////////////// //

var modalpm8 = document.getElementById('pm8');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8= document.getElementById('print-modal-8');
var modalImg8 = document.getElementById("pm08");
var captionText8 = document.getElementById("caption8");
img8.onclick = function(){
    modalpm8.style.display = "block";
    modalImg8.src = this.src;
    captionText8.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close")[7];

// When the user clicks on <span> (x), close the modal
span8.onclick = function() { 
  modalpm8.style.display = "none";
};


// /////////////// //
// Get the modal  9
// ////////////// //

var modalpm9 = document.getElementById('pm9');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img9 = document.getElementById('print-modal-9');
var modalImg9 = document.getElementById("pm09");
var captionText9 = document.getElementById("caption9");
img9.onclick = function(){
    modalpm9.style.display = "block";
    modalImg9.src = this.src;
    captionText9.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close")[8];

// When the user clicks on <span> (x), close the modal
span9.onclick = function() { 
  modalpm9.style.display = "none";
};

// /////////////// //
// Get the modal  10
// ////////////// //

var modalpm10 = document.getElementById('pm10');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img10 = document.getElementById('print-modal-10');
var modalImg10 = document.getElementById("pm010");
var captionText10 = document.getElementById("caption10");
img10.onclick = function(){
    modalpm10.style.display = "block";
    modalImg10.src = this.src;
    captionText10.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close")[9];

// When the user clicks on <span> (x), close the modal
span10.onclick = function() { 
  modalpm10.style.display = "none";
};

// /////////////// //
// Get the modal  11
// ////////////// //

var modalpm11 = document.getElementById('pm11');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById('print-modal-11');
var modalImg11 = document.getElementById("pm011");
var captionText11 = document.getElementById("caption11");
img11.onclick = function(){
    modalpm11.style.display = "block";
    modalImg11.src = this.src;
    captionText6.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close")[10];

// When the user clicks on <span> (x), close the modal
span11.onclick = function() { 
  modalpm11.style.display = "none";
};

// /////////////// //
// Get the modal  6
// ////////////// //

var modalpm12 = document.getElementById('pm12');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img12 = document.getElementById('print-modal-12');
var modalImg12 = document.getElementById("pm012");
var captionText12 = document.getElementById("caption12");
img12.onclick = function(){
    modalpm12.style.display = "block";
    modalImg12.src = this.src;
    captionText12.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span12 = document.getElementsByClassName("close")[11];

// When the user clicks on <span> (x), close the modal
span12.onclick = function() { 
  modalpm12.style.display = "none";
};
 
 

 


