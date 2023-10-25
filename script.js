function contactChannels() {
  let mainMedia = document.querySelector(".contact-us");
  let sidebarMedia = document.querySelector(".contact-channels");
  sidebarMedia.innerHTML = `${mainMedia.innerHTML}`;
}
contactChannels();

function totalSidebar() {
  let openSidebarBtn = document.querySelector(".open-sidebar");
  let closeSidebarBtn = document.querySelector(".sidebar-close-button");
  let sidebarPart = document.querySelector(".sidebar-part");
  let sidebarBackground = document.querySelector(".sidebar-background");
  openSidebarBtn.addEventListener("click", () => {
    sidebarPart.style.width = "100%";
  });
  closeSidebarBtn.addEventListener("click", sidebarClosed);
  sidebarBackground.addEventListener("click", sidebarClosed);
  function sidebarClosed() {
    sidebarPart.style.width = "";
  }
}
totalSidebar();

function sidebarList() {
  let sidebarMenuContent = document.querySelector(".sidebar-menu").children[0];
  let mainNavListContent = document.querySelector(".nav-list");
  sidebarMenuContent.innerHTML = mainNavListContent.innerHTML;
}
sidebarList();

function mainList() {
  let pointedList = document.querySelector(".list-section");
  let listSelf = document.querySelector(".nav-list");
  pointedList.addEventListener("mouseover", () => {
    listSelf.style.height = listSelf.scrollHeight + "px";
  });
  pointedList.addEventListener("mouseleave", () => {
    listSelf.style.height = "";
  });
}
mainList();

function openLogIn() {
  let loginOpenBtn = document.querySelector(".log-in-btn");
  let formCollection = document.querySelector(".log-in-part");
  let loginCloseBtn = document.querySelector(".close-the-form");
  loginOpenBtn.addEventListener("click", () => {
    formCollection.style.height = 100 + "vh";
  });
  loginCloseBtn.addEventListener("click", () => {
    formCollection.style.height = "";
  });
}
openLogIn();

function titleAddress() {
  let siteTitle = document.querySelector(".title");
  siteTitle.addEventListener("click", () => {
    location.assign(`${location.origin}`);
  });
}
titleAddress();

function leftAccordion() {
  let acBtns = document.querySelectorAll(".ac-title");

  for (let elements of acBtns) {
    elements.addEventListener("click", () => {
      elements.nextElementSibling.style.height =
        elements.nextElementSibling.scrollHeight + "px";
      setTimeout(() => {
        elements.nextElementSibling.style.height = "";
      }, 3000);
    });
  }
}
leftAccordion();




function slider(){
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  
  var slidIndex = 1;
  showSlides(slidIndex);
    function controlSlide(n){
      slidIndex +=n;
      showSlides(slidIndex);
    }; 
    function dotSlide(n){
      slidIndex = n
      showSlides(slidIndex);
    }

    prevBtn.addEventListener("click" , ()=>{
      controlSlide(-1);
    });
    nextBtn.addEventListener("click" , ()=>{
      controlSlide(1);
    });

  function showSlides(n){
    let i;
    
    if( n > slides.length )
    {
      slidIndex = 1;
    }
    if( n < 1 )
    {
      slidIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
    }

    for(let index=0; index < dots.length; index++){
      dots[index].className = dots[index].className.replace("active" , "")
    }
    slides[slidIndex - 1].style.display = "block";
    dots[slidIndex-1].className += " active";
  };

  
};slider();