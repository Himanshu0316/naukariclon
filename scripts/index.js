$('.slider').slick({
    slidesToShow: 5,
    isFinite:true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.singleslider').slick({
    slidesToShow: 1,
    isFinite:true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  });
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 5,
          spaceBetween: 30,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        var arr = [
  
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3128352.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Hardware",
      poss:"641review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/3595564.gif",
      type1:"software technology",
      poss1:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/23318.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"e-learning",
      poss:"898review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/366424.gif",
      type1:"",
      poss1:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/1595582.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"devloper",
      poss:"3.8review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/227722.gif",
      type1:"pharma",
      poss1:"1.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3767692.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Research ",
      poss:"4.5review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/3584.gif",
      type1:"B2C corprate",
      poss1:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/275530.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Consluting",
      poss:"2.8review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/267858.gif",
      type1:"BPO",
      poss1:"3.4review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/4686343.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"indian mnc",
      poss:"4.8review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/4626725.gif",
      type1:"Pharma",
      poss1:"2.3review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/366424.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"IT consltent",
      poss:"3.8review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/23318.gif",
      type1:"Forgn mnc",
      poss1:"4.3review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3595564.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Insurence",
      poss:"4.2review",
      imgs1:"https://img.naukimg.com/logo_images/groups/v1/3128352.gif",
      type1:"software ENGINEER",
      poss1:"3.8review"
  },
  ];  
     var arr1 = [
  
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
         type:"Remote",
         poss:"2.3K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/unicorn.svg",
         type:"Unicorn",
         poss:"3K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
         type:"MNC",
         poss:"1.6K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg",
         type:"Supply Chain",
         poss:"1.5K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg",
         type:"Engineering",
         poss:"4.3K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg",
         type:"Fresher",
         poss:"54.3K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg",
         type:"Sales",
         poss:"3K+Jobs"
     },
     {
         imgs:"https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
         type:"Data Science",
         poss:"3K+Jobs"
     },
     ];
  
     getData(arr);
     function getData(arr){
         arr.forEach((el)=>{
       var div1 = document.createElement("div");
       div1.style.height = "300px"
       div1.onclick = function(){
  
            window.location.href = "company.html";
       };
       var div2 = document.createElement("div");
       div2.style.display = "flex";
       div2.style.margin = "30%";
            div1.setAttribute("class","swiper-slide smalldiv1");
            div1.setAttribute("id","roll")
            var img = document.createElement("img"); 
            img.src = el.imgs;
            var icon = document.createElement("img"); 
            icon.src = el.icon;
            var p1 = document.createElement("p");
            p1.innerText = el.type;
            
            var p2 = document.createElement("p");
            p2.innerText = el.poss;
  console.log(el.poss)
  div2.append(icon,p2)
            div1.append(img,div2,p1)
            document.querySelector(".main1").append(div1)
         });
     }
     
    
  
  getdData(arr1);
  function getdData(arr){
      arr.forEach((el)=>{
    var div1 = document.createElement("div");
         div1.setAttribute("class","swiper-slide smalldiv2");
         div1.setAttribute("id","roll1");
         div1.onclick = function(){
             window.location.href = "allcompany.html";
         }
         var img = document.createElement("img"); 
         img.src = el.imgs;
         var p1 = document.createElement("p");
         p1.innerText = el.type;
         var p2 = document.createElement("p");
         p2.innerText = el.poss;
  console.log(el.poss)
         div1.append(img,p1,p2)
         document.querySelector(".main").append(div1)
      });
  }
  getddData(arr);
  function getddData(arr){
      arr.forEach((el)=>{
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("class","comp");
    var div3 = document.createElement("div");
    div3.setAttribute("class","comp");
    var div4 = document.createElement("div");
    div4.style.display = "flex";
    div4.style.marginLeft = "30%";
    var div5 = document.createElement("div");
    div5.style.display = "flex";
    div5.style.marginLeft = "30%";
         div1.setAttribute("class","swiper-slide smalldiv3");
         var img1 = document.createElement("img"); 
         img1.src = el.imgs;
         var p1 = document.createElement("p");
         p1.innerText = el.type;
         var p2 = document.createElement("p");
         p2.innerText = el.poss;
         var icon1 = document.createElement("img"); 
         icon1.src = el.icon;
         icon1.setAttribute("class","icon");
         var icon2 = document.createElement("img"); 
         icon2.src = el.icon;
         icon2.setAttribute("class","icon");
         var img2 = document.createElement("img"); 
         img2.src = el.imgs1;
         var p11 = document.createElement("p");
         p11.innerText = el.type1;
         var p22 = document.createElement("p");
         p22.innerText = el.poss1;
  console.log(el.poss)
  div4.append(icon1,p2)
  div5.append(icon2,p22)
          div2.append(img1,div4,p1)
         div3.append(img2,div5,p11)
  
        div1.append(div2,div3)
       
         document.querySelector(".main2").append(div1)
      });
  }
  
  function mylog(){
      window.location.href  = "login.html";
  }
  function myReg(){
      window.location.href  = "register.html";
  }
  function myComFun(){
      window.location.href  = "allcompany.html";
  }
  function myFunjob(){
      window.location.href  = "main.html";
  }