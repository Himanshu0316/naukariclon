$('.slider').slick({
    slidesToShow: 5,
    isFinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  
  
  var arr = [
      {
          h:"Hiring Sales Manager | Zydex Industries | Decorative Paints Division",
          y:"5 - 10 years",
          pr:"Not Disclosed",
          l:"Kochi/Cochin, Nagpur",
          r:"Sales & Marketing Manager",
          r1:"Decorative Paints",
          r2:"Paints",
          imgs:"https://img.naukri.com/logo_images/v3/118400.gif",
          c:"zyndex"
      },
      {
          h:"Inside Sales Associate (MBA Freshers)",
          y:"2 - 6 years",
          pr:"3,00,000 - 4,00,000 P.A.",
          l:"Hyderabad/Secunderabad, Pune",
  
          r:"operations executive",
          r1:"Inside Sales",
          r2:"Customer Service",
          imgs:"https://img.naukri.com/logo_images/v3/4368150.gif",
          c:"Satanza"
      },
      {
          h:"Hiring Sales Manager | Zydex Industries | Decorative Paints Division",
          y:"5 - 10 years",
          pr:"Not Disclosed",
          l:"Kochi/Cochin, Nagpur",
          r:"Sales & Marketing Manager",
          r1:"Decorative Paints",
          r2:"Paints",
          imgs:"https://img.naukri.com/logo_images/v3/118400.gif",
          c:"zyndex"
      },
      {
          h:"Area Manager Developer Sales",
          y:"3 - 5 years",
          pr:"Not Disclosed",
          l:"Delhi / NCR",
          r:"Manage sales",
          r1:"Mantaining",
          r2:"Divloper",
          imgs:"https://img.naukri.com/logo_images/v3/1428216.gif",
          c:"Gograde"
      },
      {
          h:"Hiring Sales Manager | Zydex Industries | Decorative Paints Division",
          y:"5 - 10 years",
          pr:"Not Disclosed",
          l:"Kochi/Cochin, Nagpur",
          r:"Sales & Marketing Manager",
          r1:"Decorative Paints",
          r2:"Paints",
          imgs:"https://img.naukri.com/logo_images/v3/118400.gif",
          c:"zyndex"
      },
      {
          h:"Sales Officer",
          y:"5 - 10 years",
          pr:"Not Disclosed",
          l:"Kochi/Cochin, Nagpur",
          r:"Sales & Marketing Manager",
          r1:"Sales Officer",
          r2:"managing",
          imgs:"https://img.naukri.com/logo_images/v3/843971.gif",
          c:"Fullerton"
      },
      {
          h:"Executive Retail Sales - Jaipur, Udaipur & Kota",
          y:"0 - 3 years",
          pr:"Not Disclosed",
          l:"Kota, Udaipur, Jaipur",
          r:"Sales & Marketing Manager",
          r1:"Decorative Paints",
          r2:"Paints",
          imgs:"https://www.naukri.com/hotjobs/images/v3/asian_nov13.gif",
          c:"Assian pants"
      },
      {
          h:"Business Development Logistic SaaS Sales.",
          y:"5 - 6 years",
          pr:"6,00,000 - 13,00,000 P.A.",
          l:"pune",
          r:"Sales & Marketing Manager",
          r1:"Logistics",
          r2:"bussiness",
          imgs:"https://img.naukri.com/logo_images/v3/3266166.gif",
          c:"zyndex"
      },
      {
          h:"Hiring Sales Manager | Zydex Industries | Decorative Paints Division",
          y:"5 - 10 years",
          pr:"Not Disclosed",
          l:"Kochi/Cochin, Nagpur",
          r:"Sales & Marketing Manager",
          r1:"Decorative Paints",
          r2:"Paints",
          imgs:"https://img.naukri.com/logo_images/v3/118400.gif",
          c:"zyndex"
      },
      {
          h:"Area Manager Developer Sales",
          y:"3 - 5 years",
          pr:"Not Disclosed",
          l:"Delhi / NCR",
          r:"Manage sales",
          r1:"Mantaining",
          r2:"Divloper",
          imgs:"https://img.naukri.com/logo_images/v3/1428216.gif",
          c:"Gograde"
      },
  ];
  
  getData(arr)
  function getData(arr){
     arr.forEach((el)=>{
         var div = document.createElement("div")
         var div1 = document.createElement("div")
         div1.setAttribute("class","jobcard")
         var div2 = document.createElement("div")
         div2.setAttribute("class","jobpics")
         var indiv1 = document.createElement("div")
         var innerd1 = document.createElement("div")
         var innerd2 = document.createElement("div")
         var innerd3 = document.createElement("div")
         var p1 = document.createElement("p")
         p1.innerText = el.c;
         var p2 = document.createElement("p")
         p2.innerText = el.r+" "+el.r1+" "+el.r2;
         var p3 = document.createElement("p")
         p3.innerText = el.y;
         var p4 = document.createElement("p")
         p4.innerText = el.pr;
         var p5 = document.createElement("p")
         p5.innerText = el.l;
         var h4 = document.createElement("h4")
         h4.innerText = el.h;
         var img = document.createElement("img")
         img.src = el.imgs;
         var button = document.createElement("button");
         button.innerText = "Save";
         var i1 = document.createElement("i");
         i1.setAttribute("class","fas fa-briefcase");
         var i2 = document.createElement("i");
         i2.setAttribute("class","fas fa-rupee-sign");
         var i3 = document.createElement("i");
         i3.setAttribute("class","fas fa-map-marker-alt");
  
  
         innerd1.append(i1,p3)
         innerd2.append(i2,p4)
         innerd3.append(i3,p5)
         div2.append(img,button)
         indiv1.append(innerd1,innerd2,innerd3)
         div1.append(h4,p1,indiv1,p2)
         div.append(div1,div2);
         document.getElementById("insidemb2").append(div);
     });
  }