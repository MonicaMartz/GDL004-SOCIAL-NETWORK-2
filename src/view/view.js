import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import Profile from "./pages/profile.js";
import { model } from "../model/model.js";
import { controler }from "../controler/controler.js";


//////////Creates in an object the elements of the view
const components = {
    home: Home,
    signup: SignUp,
    signin: SignIn,
    profile: Profile
}

//////////Object whith methods
const userView = {

   
//////////Sign Up 
      //obtiene el formSignUp de html y captura los valores ingresados nombre, correo y contraseña
    initSignUp: () => {
        const userNewData = document.getElementById("signUpForm");
        console.log(userNewData);
       
        userNewData.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const newUserSignUp = {
              name: userNewData.nameSignUp.value,
              email: userNewData.emailSignUp.value,
              pass: userNewData.passwordSignUp.value
            }
            console.log(newUserSignUp);
            userNewData.reset();
            controler.newUser(newUserSignUp)
            .catch(function(error) {
              let errorCode = error.code;
              let errorMessage = error.message;
              alert(errorMessage);
            });
                     
          })
          
    },


//////////Sign In
    initSignIn: () => {
        const userSignIn = document.getElementById("signInForm");
        console.log(userSignIn);

        userSignIn.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const newUserSignIn = {
              email: userSignIn.emailSignIn.value,
              pass: userSignIn.passwordSignIn.value
            }
            console.log(newUserSignIn);
            userSignIn.reset();
            controler.accesUser(newUserSignIn)
            .catch(function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                //let errorMessage = "Verifica tus datos";
                            
                alert(errorMessage);
              });
          
        })
    },

    ////////////Sign Out

    signOut: () => {
      const userSignOut = profileUser.querySelector('#closeSesion');
      console.log(userSignOut);
      userSignOut.addEventListener('click', (e) => {
        model.signOutUser()
      })

    },

    //////////Create post in real time REATE POST IN REAL TIME
    initProfile: () => {
      const userProfile = document.getElementById("profileForm");
     
      console.log(userProfile);

      userProfile.addEventListener("submit", (e) => {
        e.preventDefault();
        const userPost = {
          text: userProfile.post.value,
        }
        userProfile.reset();
        if(userPost.text != ""){
          controler.newPost(userPost)
        } else {
          alert("Rellena los campos")
        }
    
        });
        
    },

    readPost: () => {
      const postRead = document.getElementById("table");
  
      const db = firebase.firestore()
        db.collection("posts").onSnapshot((querySnapshot) => {
       
        postRead.innerHTML = "";
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().text}`);

        //postRead.innerHTML + = 
       /* const containeredit = document.createElement("div");
        containeredit.setAttribute("id", "containeredit");

        const textedit =document.createElement("textarea");
        textedit.setAttribute("id", "textedit");
        //textPost.value =  doc.data().text
*/

      const containerPost = document.createElement("div");
        containerPost.setAttribute("id", "containerPost");

      const textPost =document.createElement("textarea");
        textPost.setAttribute("id", "textPost");
        textPost.value =  doc.data().text

        //textPost.setAttribute("placeholder", "Comparte tus ideas");

        //PRUEBA DE BOTON EDITAR
        /*const buttonEdit = document.createElement("button");
        buttonEdit.innerHTML ="Editar";
        buttonEdit.dataset.notaID = doc.id
        buttonEdit.setAttribute("id", "editButton");

        buttonEdit.addEventListener('click', (e) => {
          console.log(e.target.dataset.notaID);

          
        })*/


 //PRUEBA DE BOTON ELIMINAR

      const buttonDelete = document.createElement("button");
        buttonDelete.innerHTML ="Eliminar";
        buttonDelete.dataset.notaID = doc.id
        buttonDelete.setAttribute("id", "deleteButton");

        buttonDelete.addEventListener('click', (e) => {
        controler.deletePost(doc.id)
        console.log(e.target.dataset.notaID);
        })
/////////////////////////////////////////////////////
//PRUEBA DE BOTON EDITAR
      const buttonEdit = document.createElement("button");
        buttonEdit.innerHTML ="Editar";
        buttonEdit.dataset.notaID = doc.id
        buttonEdit.setAttribute("id", "editButton");

        buttonEdit.addEventListener('click', (e) => {
          console.log(e.target.dataset.notaID);
          editText(doc.id)
        })

      function editText(id) {

        const userEdit = document.getElementById("edittx");
      //const postchange = document.getElementById("containerPost").value;
      const bottonchange = document.getElementById("editButton");
        bottonchange.innerHTML ="Enviar";
        bottonchange.addEventListener('click', (e) => {
          console.log(e.target.dataset.notaID);

          const db = firebase.firestore()
          const editps = db.collection("posts").doc(id);
          
          return editps.update({
          text: userEdit.value
          })

      .then(function() {
       console.log("Document successfully updated!");
       })
       .catch(function(error) {
       // The document probably doesn't exist.
       console.error("Error updating document: ", error);
       });

      });
      }
  
//////////////////////////////////////////////////////
       
           //containeredit.appendChild(textedit);
    containerPost.appendChild(textPost);
    containerPost.appendChild(buttonEdit);
    containerPost.appendChild(buttonDelete);
    table.appendChild(containerPost);
  })
 })

}
        
}

export { components, userView };
