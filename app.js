// eb app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUxZdA7LWBY59z60IA4m6yYr3hIi6TLtY",
    authDomain: "register-form1.firebaseapp.com",
    databaseURL: "https://register-form1.firebaseio.com",
    projectId: "register-form1",
    storageBucket: "register-form1.appspot.com",
    messagingSenderId: "314668683041",
    appId: "1:314668683041:web:6fd36776de3d39a92c7860"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   create a refernce to register
const registerRef = firebase.database().ref('register');

// add event listener to submit
document.getElementById('contactForm').addEventListener('submit',registerUser);

// registerUser function
function registerUser(e) {
    e.preventDefault();
    // get input values
    const name = getInputValues('name');
    const company = getInputValues('company');
    const email = getInputValues('email');
    const phone = getInputValues('phone');
    const message = getInputValues('message');

    // save to firebase
    saveInfoToFirebase(name,company,email,phone,message);

    // show alert upon submission
    document.querySelector('.alert').style.display = 'block';
    
    // hide alert after 4 seconds
    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    },4000)
  
}

// get the input values
const getInputValues = (id) => {
    return document.getElementById(id).value;
}

// save the data to firebase

const saveInfoToFirebase = (name,company,email,phone,message) => {
    const pushToFirebase = registerRef.push();
    pushToFirebase.set({
        name,
        company,
        email,
        phone,
        message
    })
}