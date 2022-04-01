let Register = async () => {


    try{
        let register_data = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value,
    
    };
    
    register_data = JSON.stringify(register_data);
    
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    
        method:"POST",
        body:register_data,
    
        headers:{
            "Content-Type":"application/json",
        },
    });
    let data = await res.json();
    console.log("data:",data);
    
    } catch (error) {
        console.log("error:",error);
    }
    alert("sucsessfull")
      window.location.href = "login.html"
    };