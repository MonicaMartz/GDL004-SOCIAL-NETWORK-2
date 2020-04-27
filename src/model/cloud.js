export const cloud ={

//////////Crear Coleccion/// FIREBASE FUNCTION
  post:(userPost) => {

    const db = firebase.firestore()
    return db.collection('posts').add(userPost)
  }, 

//////////Eliminar Posts ///FIREBASE FUNCTION
   delete: (id) => {
    const db = firebase.firestore()
    return db.collection("posts").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
});
   },
    

}
