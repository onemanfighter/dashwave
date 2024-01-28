import { collection, addDoc } from "firebase/firestore";
import { firestoreDB } from "../../../firebase_main/Firebase";
import { UserProfData } from "../ProjectsCollection";
export function userDataWrite() {}

export function updateUserData(userId: string, data: UserProfData) {
  addDoc(collection(firestoreDB, "projects"), {})
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    })
    .then(() => {})
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
