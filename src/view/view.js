import Home from "./pages/home.js";
import SignUp from "./pages/signUp.js";
import SignIn from "./pages/signIn.js";
import Profile from "./pages/profile.js";
import General from "./pages/general.js";
import Different from "./pages/404.js";
import { model } from "../model/model.js";
import { controler }from "../controler/controler.js";



//////////Crea en un objeto los elementos de la vista
const components = {
    home: Home,
    signup: SignUp,
    signin: SignIn,
    profile: Profile,
    general: General,
    differen: Different
}

//////////Objeto con métodos
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
        //obtiene el formSignIn de html y captura los valores ingresados correo y contraseña
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
                                            
                alert(errorMessage);
              });
          
        })
      },

    ////////////Sign Out
    signOut: () => {
      const buttonSignOut = document.getElementById("closed");
      //const userSignOut = profileUser.querySelector('closeSesion');
      console.log(buttonSignOut);
      buttonSignOut.addEventListener('click', (e) => {
        model.signOutUser()
      })

    },


    //////////Crea post en tiempo real
    initProfile: () => {
      const userProfile = document.getElementById("profileForm");
      const user= firebase.auth().currentUser;
      const tim = new Date();
      const date = tim.getHours() +":" + (tim.getMinutes()+1) + " Date:" + tim.getDate() + "/" + (tim.getMonth()+1) +"/" + tim.getFullYear();
     //interpolacion de variable y template literal
      console.log(userProfile);

      userProfile.addEventListener("submit", (e) => {
        e.preventDefault();
        const userPost = {

          text: userProfile.post.value,
          email: user.email,
          date: date,
        }
        
        userProfile.reset();
          if(userPost.text != ""){
            controler.newPost(userPost)
          } else {
            alert("Rellena los campos")
          }
    
          });
        
     },


    readPost: (user) => {
      const postRead = document.getElementById("table");
  
    
       const db = firebase.firestore()
        db.collection("posts").where("email","==", user.email).onSnapshot((querySnapshot) => {
      
        postRead.innerHTML = "";
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().text}`);

      const containerPost = document.createElement("div");
        containerPost.setAttribute("id", "containerPost");
        containerPost.setAttribute("class", "containerPost-class")

      const postUser = document.createElement("textarea");
        postUser.setAttribute("id", "postUser");
        postUser.setAttribute("class", "postUser");
        postUser.value = doc.data().email

      const textPost =document.createElement("textarea");
        textPost.setAttribute("id", "textPost");
        textPost.setAttribute("class", "textPost");
        textPost.value =  doc.data().text

      const datePost =document.createElement("textarea");
        datePost.setAttribute("id", "date");
        datePost.setAttribute("class", "date");
        datePost.value =  doc.data().date
       

//////////Botón Eliminar

      const buttonDelete = document.createElement("button");
        buttonDelete.innerHTML ="Eliminar";
        buttonDelete.dataset.notaID = doc.id
        buttonDelete.setAttribute("id", "deleteButton");

        buttonDelete.addEventListener('click', (e) => {
          controler.deletePost(doc.id)
          console.log(e.target.dataset.notaID);
        })

//////////Botón editar
      const buttonEdit = document.createElement("button");
        buttonEdit.innerHTML ="Editar";
        buttonEdit.dataset.notaID = doc.id
        buttonEdit.setAttribute("id", "editButton");

        buttonEdit.addEventListener('click', (e) => {
          console.log(e.target.dataset.notaID);
          document.getElementById("edittx").value = `${doc.data().text}`
          editText(doc.id)
        })

        function editText(id) {

          const userEdit = document.getElementById("edittx");
          const bottonchange = document.getElementById("cambios");
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
          userEdit.value ="";

           })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
         });
      }
  
/////Contenedor de Post
    containerPost.appendChild(datePost);
    containerPost.appendChild(postUser);
    containerPost.appendChild(textPost);
    containerPost.appendChild(buttonEdit);
    containerPost.appendChild(buttonDelete);
    table.appendChild(containerPost);
  })
 })

},

/////////Vista de pagina General. Muestra todos los Posts

readGeneral: () => {
  const postGeneral = document.getElementById("tableGeneral");

  const db = firebase.firestore()
  db.collection("posts").onSnapshot((querySnapshot) => {

    postGeneral.innerHTML = "";
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().text}`);

  const containerPostGeneral = document.createElement("div");
  containerPostGeneral.setAttribute("id", "containerPostGeneral");
  containerPostGeneral.setAttribute("class", "containerPostGeneral-class");

  const postUserGeneral = document.createElement("textarea");
  postUserGeneral.setAttribute("id", "postUserGeneral");
  postUserGeneral.setAttribute("class", "postUserGeneral");
  postUserGeneral.value = doc.data().email

  const textPostGeneral =document.createElement("textarea");
  textPostGeneral.setAttribute("id", "textPostGeneral");
  textPostGeneral.setAttribute("class", "textPostGeneral");
  textPostGeneral.value =  doc.data().text

  const datePostGeneral =document.createElement("textarea");
  datePostGeneral.setAttribute("id", "dateGeneral");
  datePostGeneral.setAttribute("class", "dateGeneral");
  datePostGeneral.value =  doc.data().date

       containerPostGeneral.appendChild(datePostGeneral);
       containerPostGeneral.appendChild(postUserGeneral);
       containerPostGeneral.appendChild(textPostGeneral);
       tableGeneral.appendChild(containerPostGeneral);
})
})

}

        
}

export { components, userView };
