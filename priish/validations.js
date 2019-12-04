var pass=document.getElementById("pass");
            var repass=document.getElementById("repass");
            var uname=document.getElementById("name");
            var phone=document.getElementById("phone");
            var mail=document.getElementById("mail");
            var passErr=document.getElementById("passError");
            var nameErr=document.getElementById("nameError");
            // Initialize Firebase
            

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzEV2HpB03bWb4pFzil2MjgNfZpl_19ik",
    authDomain: "priish-9ee61.firebaseapp.com",
    databaseURL: "https://priish-9ee61.firebaseio.com",
    projectId: "priish-9ee61",
    storageBucket: "priish-9ee61.appspot.com",
    messagingSenderId: "534590723454"
  };
            
            firebase.initializeApp(config);
            var auth=firebase.auth();
            function loadnext(){
                    if(validatePassword()&&checkName()){
                       
                    document.getElementById("step1").style.opacity="0.2";
                    document.getElementById("step2").style.opacity="1";
                    var loader=document.getElementById("step-loader");
                    document.getElementById("step2-container").style.display="block";
                    document.getElementById("step1-container").style.display="none";
                    repass.setCustomValidity("");
                        sendOTP();
                    }else{
                        //alert("not okay");
                    }
            }

            function validatePassword(){
                var flag=false;
                if(pass.value&&repass.value){
                    if(pass.value.length<8){
                    flag=false;
                        passErr.classList.remove("verified");
                    passErr.classList.add("error");
                    passErr.innerHTML="choose password more than 8 characters";                    
                }else{
                if(pass.value==repass.value){
                    flag=true;
                    passErr.classList.remove("error");
                    passErr.classList.add("verified");
                    passErr.innerHTML="Matched";
                }else{
                    flag=false;
                    passErr.classList.remove("verified");
                    passErr.classList.add("error");
                    passErr.innerHTML="Password didn't match";
                }}
                }else{
                    flag=false;
                    passErr.innerHTML="";
                }
                return flag;
            }
            function loadprev(){
                
                document.getElementById("step1").style.opacity="1";
                document.getElementById("step2").style.opacity="0.2";
                document.getElementById("step2-container").style.display="none";
                document.getElementById("step1-container").style.display="block";
               
            }
            function checkName(){
                var flag;
                if(uname.value){
                var db=firebase.database().ref("users").child(uname.value);
                db.on('value',snap=>{
                        
                        if(snap.exists()){
                            flag=false;
                        nameErr.classList.remove("verified");
                        nameErr.classList.add("error");
                        nameErr.innerHTML="Users Exists";
                    }
                    else{
                        
                        nameErr.classList.add("verified");
                        nameErr.classList.remove("error");
                        if(uname.value.length<8){
                            nameErr.classList.remove("verified");
                        nameErr.classList.add("error");
                            nameErr.innerHTML="Choose a name with more than 8 characters";
                            flag=false;
                        }
                        else{
                            nameErr.innerHTML="Valid username";
                            flag=true;
                        }
                    }
                
                });
               
                
                }else{
                    nameErr.innerHTML="";
                }
                
              return flag;  
            }
            //SEND OTP
            var otpmsg="OTP sent to your mobile";var otpval ;
            function sendOTP(){
                
                var url="./sendsms.php";
                otpval= Math.floor(10000 + Math.random() * 90000);
                var num=phone.value;
                //alert(num);
                url+="?phone="+num+"&otp="+otpval;
                request=new XMLHttpRequest;
                request.onreadystatechange=getVerification;
                request.open("GET",url,true);
                request.send();
            }
            function getVerification(){
                if(request.readyState==4)
                {
                    //alert(request.responseText);
                   document.getElementById("otpnote").innerHTML=otpmsg+" succesfully.";
                    
                }else{
                    //alert(request.responseText);
                }
                
            }
            function verifyOTP(){
                var f=false;
                if(document.getElementById("otp").value==otpval){
                    document.getElementById("sendotpbtn").disabled="disabled";
                    f=true;
                    document.getElementById("otp").disabled="disabled";
                    document.getElementById("otpnote").style.color="green";
                    document.getElementById("otpnote").innerHTML="verified sucessfully";
                    auth.createUserWithEmailAndPassword(mail.value,pass.value);
                    sendMail();
                }else{
                    f=false;
                    document.getElementById("otpnote").style.color="red";
                    document.getElementById("otpnote").innerHTML="OTP didn't match";
                }
                return f;
            }
            function signUp(){
                
                if (firebase.currentUser.email==mail.value){
                    document.getElementById("sendmailbtn").disabled="disabled";
                    document.getElementById("mailnote").style.color="green";
                    document.getElementById("mailnote").innerHTML="Email verified";
                var db=firebase.database().ref("users").child(uname.value); 
                db.set({name:uname.value,mail:mail.value,phone:phone.value,pass:pass.value});
                
                }else{
                    document.getElementById("mailnote").style.color="red";
                    document.getElementById("mailnote").innerHTML="Email is not verified";
                }
            }
            function sendMail(){
            var user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function() {
            // Email sent.
            //alert("sent sucessfully");
            }).catch(function(error) {
            // An error happened.
            //alert(error.message);
            });
}
