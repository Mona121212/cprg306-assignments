import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";

export async function ensureUserDoc(userId) {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, {});
}

export async function getItems(userId) {
  const items = [];
  //path: users/{userId}/items
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);

  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(), // name, quantity, category
    });
  });
  return items;
}

export async function addItem(userId, item) {
  const cleanItem = {
    name: item.name,
    quantity: Number(item.quantity),
    category: item.category,
  };
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, cleanItem);
  return docRef.id;
}
