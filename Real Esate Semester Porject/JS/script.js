$(function(){
  darkMode();
  CounterAnimation();
});



function darkMode() {
  $("#darkModeBtn").on("click", function () {
    $("#HTML_FILE").toggleClass("dark");
    if ($("#HTML_FILE").hasClass("dark")) {
      $("#icon").attr("class", "bx bxs-sun");
      $("#darkBodyCheck").addClass("darkBody");
    } else {
      $("#icon").attr("class", "bx bxs-moon");
      $("#darkBodyCheck").removeClass("darkBody");
    }
  });
}


// ==No Counter Animation==
function CounterAnimation(){
      
      const counterNo = document.querySelectorAll('.counterNo');
      const speed = 50;

      counterNo.forEach((currElem)=>{

        const updateNum = ()=>{
            
            const targetNo = parseInt(currElem.dataset.number);
            const initialNo = parseInt(currElem.innerText);
            const incrementNo = Math.trunc(targetNo / speed);
          
            if(initialNo < targetNo){
              currElem.innerText = `${initialNo + incrementNo}+`;
              setTimeout(updateNum, 40);
            };
            
        }
          updateNum();
      });
};


// Animated website on scroll using (intersectionObserver).

// 



// SCRIPT FOR AOS animated Web Scroller.

 AOS.init({
  offset: 300,
 duration: 1000,
 once: false,
 });

 