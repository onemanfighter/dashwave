import { getFirestore } from "firebase/firestore";
import { fireBaseApp } from "../../auth/firebase/Firebase";

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDB = getFirestore(fireBaseApp);
