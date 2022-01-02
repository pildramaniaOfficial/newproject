import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection , addDoc , doc , setDoc , getDoc} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const app = initializeApp({ 
    apiKey: "AIzaSyCFNfTOQD-v_SgZ108_gHf14mlp8CANEyQ",
    authDomain: "pildramaniascheduler.firebaseapp.com",
    projectId: "pildramaniascheduler",
    storageBucket: "pildramaniascheduler.appspot.com",
    messagingSenderId: "912022686061",
    appId: "1:912022686061:web:1ab5c430c87e9523fdb264",
    measurementId: "G-KQREXW1VDZ"
 } );
const db = getFirestore()

document.querySelector('#userLogin').addEventListener('click' , (event) => {
    event.preventDefault();
    const usrInput = document.querySelector('#newUserId')
    try {
        const users = addDoc(collection(db, 'userName'), {
            name: usrInput.value
        })
    } catch (e) {
        console.log(e)
    }
})
const docRef = collection(db,'userName');
// const docSnap = await getDoc(docRef);
console.log(docRef)