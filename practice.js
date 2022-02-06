var firebaseConfig = {
    apiKey: "AIzaSyCVKi1LNk_ZVQU3i6oq1BevWbvt2k1Y5B0",
    authDomain: "asdas-3db50.firebaseapp.com",
    databaseURL: "https://asdas-3db50-default-rtdb.firebaseio.com",
    projectId: "asdas-3db50",
    storageBucket: "asdas-3db50.appspot.com",
    messagingSenderId: "498248161029",
    appId: "1:498248161029:web:7efc733fde4b82b3e0896c",
    measurementId: "G-J3SCD5E2E3"
  };
//ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}