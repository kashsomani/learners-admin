// Add the Firebase products that you want to use
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAGt8KVt9VFnJ5NC9eMd2PUjVPouqX-6o",
  authDomain: "learnersacademyadmin.firebaseapp.com",
  projectId: "learnersacademyadmin",
  storageBucket: "learnersacademyadmin.appspot.com",
  messagingSenderId: "62418303464",
  appId: "1:62418303464:web:1b9599bd0c1ca25ca64c5d",
  measurementId: "G-4Y57QDR0LS"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const students = db.collection("students");

export async function getStudents() {
  const snapshot = await db.collection("students").get();
  return snapshot.docs.map((doc) => {
    let data = doc.data();
    data.id = doc.id;
    return data;
  });
}
export async function addStudent(student) {
  const res = await db.collection("students").add(student);
}
export async function sendEmail(email) {
  const res = await db.collection("mail").add(email);
}
export async function deleteStudent(student) {
  const res = await db.collection("students").doc(student).delete();
}
export async function updateStudentGrade(student, grade) {
  const res = await db.collection("students").doc(student).update({grade:grade});
}
export async function signIn(email, password) {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return false;
    });
}
export async function signOut() {
  return await firebase
    .auth()
    .signOut()
    .then(() => {
      return false;
    })
    .catch((error) => {
      return true;
    });
}
