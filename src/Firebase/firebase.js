import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB2PSR6Ua0raW2cLl-EEl5UaPGhyeHUuig",
    authDomain: "financepeer-project-52fe2.firebaseapp.com",
    projectId: "financepeer-project-52fe2",
    storageBucket: "financepeer-project-52fe2.appspot.com",
    messagingSenderId: "529111805023",
    appId: "1:529111805023:web:53bd0ba26ed2fa5a0bbfea"
  };
  


  function listAll() {
    const storageRef = firebase.storage().ref();
  
    var listRef = storageRef.child('/');
  
    // Find all the prefixes and items.
    listRef.listAll()
      .then((res) => {
        res.prefixes.forEach((folderRef) => {

        });
        res.items.forEach((itemRef) => { 
          itemRef.getDownloadURL().then((itemRef) => {
            console.log(itemRef);
          })
        });
      }).catch((error) => {
        console.log(error);
      });
  }


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {firebase,listAll, storage}