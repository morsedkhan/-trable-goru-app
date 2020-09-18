import { createStyles, Grid, makeStyles, TextField } from '@material-ui/core';

import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import facebook from '../../utilities/Icon/fb.png';
import google from '../../utilities/Icon/google.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { is } from 'date-fns/esm/locale';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}


const Login = () => {

      

      const [newUser, setNewtUser] = useState(false)
      const [user, setUser] = useState({
        issSignedIn: false,
        name:'',
        email:'',
        password:'',
        success:'',

      });

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/searchteam" } };

    var fbprovider = new firebase.auth.FacebookAuthProvider();
    const HandeFacebook = () => {

      firebase.auth().signInWithPopup(fbprovider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        setLoggedInUser(user);
        console.log(user);
        history.replace(from);
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  
    }
   
  

  const handleGoogleSignIn = () =>{
    

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      setLoggedInUser(user);
      console.log(user);
      history.replace(from);

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  const classes = useStyles();

  const handleChange = (e)  => {

    let isFieldValid = true;
    
  if(e.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    
  }
  if(e.target.name === 'password'){
    const isPasswordValid = e.target.value.length > 6;
    isFieldValid =isPasswordValid && isPasswordValid;
    }

    if(isFieldValid){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
   }

  }



   

  const handleSubmit = (e) => {
   
    console.log(user.name, user.email,user.password)

    if(user.name && user.password){  
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.erorr = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        
      
      })
      .catch( error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        console.log(error.message)
      });   
      }
    e.preventDefault();
  };

  return (
    <div>
      <div className='signUp'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid md={7}>
              <form onSubmit={handleSubmit} className="signUpForm" noValidate autoComplete="off">
                <h1>Create Account</h1>
               <TextField
                  onChange={handleChange}
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  placeholder="Enter Name"
                  type="text"
                  name="name"
                  required
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  id="standard-full-width"
                  onChange={handleChange}
                  style={{ margin: 8 }}
                  placeholder="Enter your Email"
                  type="email"
                  name="email"
                  required
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-full-width"
                  onChange={handleChange}
                  style={{ margin: 8 }}
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <button className='btn btn-warning signUpButton'>Create Account</button>
                <p>Already have an account? <Link onChange={() => setNewtUser(!newUser)} className="loginLink">Login</Link></p>


              </form>
             { user.success && <h4 style={{color: 'green', textAlign:'center'}}>User Createted successfully</h4>}
                <h4 style={{color: 'red', textAlign:'center'}}>{user.error}</h4>

            </Grid>
          </Grid>
        </div>
      </div>
      <div className='signUpWith'>
        <Button
          variant="contained"
          className='socialIconButton'
          
          onClick={HandeFacebook}
            
        ><img className="socialIcon"  src={facebook} alt='facebook' /> <span className="socialIconText"> Countinue with facebook</span>
        </Button><br /><br />
        <Button
          variant="contained"
          onClick={handleGoogleSignIn}
          className='socialIconButton'
        >   <img className="socialIcon" src={google} alt='google' /><span className="socialIconText"> Countinue with google</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;