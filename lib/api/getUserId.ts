import { getAuth } from "firebase-admin/auth";

export default function getUserId(token: string): string {
  getAuth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      return uid;
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
  return "";
}
