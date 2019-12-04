import React, { Component } from 'react'
import './App.css'
import Header from './Components/pages/Header'
import ProductLoader from "./Components/Models/ProductsLoader"
import $ from 'jquery'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import pexels from 'pexels-api-wrapper'
class App extends Component {
	find=(searchText)=>{
	console.log(searchText);
	const client=new pexels("563492ad6f917000010000013675aabbe0374ca39f9d1d63d64ebe43");
    	client.search(searchText, 30, 1)
    	.then(res=>this.setState({products:res.photos}))
	}
  componentDidMount () {
    $("#btn").click(function(){
      $("#btn").slideToggle();
    });
    $("#toggler").click(function(){
        $("#navbarTogglerDemo02").slideToggle();
    })
    var config = {
      apiKey: "AIzaSyBwB4olRsahWhK4jeKwO4yQJlV7Hd1tSCY",
      authDomain: "reactapp-d4fd5.firebaseapp.com",
      databaseURL: "https://reactapp-d4fd5.firebaseio.com",
      projectId: "reactapp-d4fd5",
      storageBucket: "reactapp-d4fd5.appspot.com",
      messagingSenderId: "551491944492"
    };
    firebase.initializeApp(config);
    var db=firebase.database();
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
	  
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    };
    $("#LoginModeler").click(function(){
      ui.start('#firebaseui-auth-container', uiConfig);
      $("#myModal").fadeToggle(300);
    });
	$("#test").click(function(){

		var starCountRef = db.ref('Users')
		starCountRef.on("value",snap=>{
			snap.forEach(function(childSnap){
				if(childSnap.val().id==1)
					alert(childSnap.val().name);
			});
		});

    });
    $("#btnclose").click(function(){
      $("#myModal").fadeToggle(300);
    });
    const client=new pexels("563492ad6f917000010000013675aabbe0374ca39f9d1d63d64ebe43");
    client.search("bikes", 30, 1)
    .then(res=>this.setState({products:res.photos}))
}
  state={
    userData:{
      isLogin:true,
      id:'asfdasf'
    },
    products:[]
  }
  addToCart=(cartValue)=>{
		var orderDb=firebase.database().ref("Orders").child(cartValue+"--order");
		orderDb.set({orderId:cartValue});
	}
  render() {
    return (
      <div className="App">
        <Header user={this.state.userData} find={this.find} />
        <div id="myModal">
        <button className="close"id="btnclose" style={{color:'white',float:'right',position:'relative',top:'10%',right:'5%'}}>&times;</button>
        <div id="firebaseui-auth-container"></div>
        <div id="loader"></div>
        </div>
        <ProductLoader products={this.state.products} addToCart={this.addToCart}/>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
            crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" 
            integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" 
            crossorigin="anonymous">
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" 
            integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" 
            crossorigin="anonymous">
        </script>

        <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase-firestore.js"></script>
        <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
	
        </div>     
    );
  }
   
  
}

export default App;
