export function userAuth (cb) {
   return firebase.auth().onAuthStateChanged(cb);
        
}

