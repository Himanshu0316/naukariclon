$('.slider').slick({
    slidesToShow: 5,
    isFinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  
  var arr = [
  
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3128352.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Hardware",
      poss:"641review",
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3595564.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"software technology",
      poss:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/23318.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"e-learning",
      poss:"898review"
  
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/366424.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"engineer",
      poss:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/1595582.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"devloper",
      poss:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/227722.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"pharma",
      poss:"1.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3767692.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Research ",
      poss:"4.5review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3584.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"B2C corprate",
      poss:"3.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/275530.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Consluting",
      poss:"2.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/267858.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"BPO",
      poss:"3.4review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/4686343.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"indian mnc",
      poss:"4.8review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/4626725.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Pharma",
      poss:"2.3review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/366424.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"IT consltent",
      poss:"3.8review",
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/23318.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Forgn mnc",
      poss:"4.3review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3595564.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"Insurence",
      poss:"4.2review"
  },
  {
      imgs:"https://img.naukimg.com/logo_images/groups/v1/3128352.gif",
      icon:"https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg",
      type:"software ENGINEER",
      poss:"3.8review"
  },
  ];
  
  getdData(arr);
  function getdData(arr){
      arr.forEach((el)=>{
    var div1 = document.createElement("div");
         div1.setAttribute("class","griddiv");
         var div2 = document.createElement("div");
         div1.onclick = function(){
             window.location.href = "main.html";//company
         }
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
         document.querySelector("#insidemb2").append(div1)
      });
  }
  