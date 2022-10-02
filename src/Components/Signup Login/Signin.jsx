import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AuthContext";
import Butto from "./Button";
import "./Signin.css";



function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, toggleAuth, setAuth, token, isAuth } =
    useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let url = `https://reqres.in/api/login`;
    <Navigate to="/"/>
    let data = {
      email: email,
      password: password,
    };
    const param = {
      method: "Post",
      headers: {
        "content-type": "application/json;charset = UTF-8",
      },
      body: JSON.stringify(data),
    };
    const sendRequest = await fetch(url, param);
    const response = await sendRequest.json();
    if (response.token.length > 0) {
      setToken(response.token);
      toggleAuth();
    }
    console.log(response);
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }


  return (
    <div>
     
    
     
      <Container className="mainSign" maxW="780px" color="#262626">
        <div className="signinMainLeft">
      {/* {name? <Join/> : <Signin/>}  */}
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Sign in
          </Text>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input 
              type="text"
              placeholder="Enter your email address"
              border="2px solid grey"
              borderRadius="0px"
            />
          </FormControl>
          <br />
          <Butto onSubmit={(e) => handleSubmit(e)}
            text="Sign in"
            style={{ borderRadius: "0px", background: "black", width: "100%",  hover:"background:blue, border:red "}}
          />

          <Text fontSize="md" textAlign="center">or</Text>

         <Butto text="Continue with Facebook" icon={<i class="fa-brands fa-square-facebook"></i>}  style={{ borderRadius: "0px", background: "#4267B2", width: "100%" }} />
<br />
         <Butto text="Continue with Apple"   style={{ borderRadius: "0px", color:"black", background: "white", border:"2px solid #D3D3D3", width: "100%" }} />

<div>

</div>
<br />




         <Butto text="Continue with Google"  style={{ borderRadius: "0px", color:"black", background: "white", border:"2px solid #D3D3D3", width: "100%" }} />


        </div>
        <div className="signinMainRight">

            <div className="signinMainRightInside">

              <Text fontSize='lg' fontWeight="bold" textAlign="left"  >As a Lyst member you can…</Text>
              <Text  className="signlo"><i class="fa-sharp fa-solid fa-bookmark" > </i>   Save your searches</Text>
              <Text className="signlo"> <i class="fa-sharp fa-solid fa-heart"></i> Create a wishlist</Text>
              <Text className="signlo"> <i class="fa-sharp fa-solid fa-bell"></i> Get alerts on your items</Text>
            </div>
          
           </div>
      </Container>
<br />
<br />


    </div>
  );
}
export default Signin;
