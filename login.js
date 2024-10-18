// app.js

// 导入 Firebase 模块
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, useDeviceLanguage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyCApZI2sWqnKMH9RyM3--2zzg9QPhXPyH8",
    authDomain: "e-a-g-b46f8.firebaseapp.com",
    projectId: "e-a-g-b46f8",
    appId: "e-a-g-b46f8",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


auth.onAuthStateChanged(function(user) {
            if (user) {



                var user = auth.currentUser;

                user.getIdToken().then(function (token) {
                    console.log("ID Token:", token);
                });
				localStorage.setItem("isLoggedIn", "true");


                if (user != null) {
                    var email_id = user.email;
					console.log("Eamil:", email_id);
                }
            } else {

                console.log("未登录");
				localStorage.setItem("isLoggedIn", "false");
            }
        });


async function google_login() {
    const provider = new GoogleAuthProvider();


    try {
        const result = await signInWithPopup(auth, provider);
		console.log('result: ', result);

        const user = result.user; 
        console.log('User Info:', user);
        

        const idToken = await user.getIdToken();
        console.log('ID Token:', idToken);


        const accessToken = user.stsTokenManager.accessToken; // 获取 Access Token
        console.log('Access Token:', accessToken);



        console.log('User Info:', user);
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email; 
        const credential = error.credential; 


        console.error('Login Error:', errorMessage);
    }
	location.reload();
}
function logout() {
            auth.signOut().then(function() {
                console.log('User signed out');

                localStorage.setItem("isLoggedIn", "false");
            }).catch(function(error) {
                console.error('Logout Error:', error.message);
            });
			location.reload();
        }

document.getElementById('login-button').addEventListener('click', google_login);
document.getElementById('dropdown-logout').addEventListener('click', logout);