let Login = async () =>{
    alert("login sucsess");
window.location.href = "index.html";
try{
    let login_data = {
        username:document.getElementById("login-username").value,
        password:document.getElementById("login-password").value,
    };
     let login_data_json = JSON.stringify(login_data);
    
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{

     method:"POST",

     body:login_data_json,

     headers:{
         "Content-Type":"application/json",
     },

     

    });
    let data = await res.json();
     console.log("data:",data);
     alert("login sucsess");
window.location.href = "index.html";
     getUser(login_data.username,data.token);

    } catch (error){
        console.log("error:",error);
    }
};

let getUser = async (username,token) =>{
try{
  let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`,
      },
  });
   let data = await res.json();
   let p = document.createElement("p");
   p.innerText = username;
   let div = document.getElementById("nav");
   div.append(p);
   console.log("ata:",data);
}catch (error){
    console.log("error:",error);
}

};