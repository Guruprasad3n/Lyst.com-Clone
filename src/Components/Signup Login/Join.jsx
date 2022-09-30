import {
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Butto from "./Button";
import "./Join.css"
function Join() {
  return (
    <div>
      <Container className="mainLog" maxW="780px" color="#262626">
        <div className="loginMainLeft">
          {/* {name? <Join/> : <Signin/>}  */}
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Search thousands of fashion brands and stores all in one place
          </Text>
          <Text fontSize="sm" textAlign="center">
            We just need a few details from you first.
          </Text>
          <br />
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

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              placeholder="min 8 characters"
              border="2px solid grey"
              borderRadius="0px"
            />
          </FormControl>

          <FormControl>
            <Checkbox>
              {" "}
              I would like to hear about products, services, and sales,
              including personalized email alerts from Lyst. You can unsubscribe
              at any time.
            </Checkbox>
          </FormControl>

          <br />
          <Butto
            text="Join Lyst"
            style={{
              borderRadius: "0px",
              background: "black",
              width: "100%",
              hover: "background:blue, border:red ",
            }}
          />

          <Text fontSize="md" textAlign="center">
            or
          </Text>

          <Butto
            text="Continue with Facebook"
            style={{
              borderRadius: "0px",
              background: "#4267B2",
              width: "100%",
            }}
          />
          <br />
          <Butto
            text="Continue with Apple"
            style={{
              borderRadius: "0px",
              color: "black",
              background: "white",
              border: "2px solid #D3D3D3",
              width: "100%",
            }}
          />
          <br />
          <Butto
            text="Continue with Google"
            style={{
              borderRadius: "0px",
              color: "black",
              background: "white",
              border: "2px solid #D3D3D3",
              width: "100%",
            }}
          />
          <br />
          <Text fontSize='md' style={{color:"grey", textAlign:"center"}} >
            {" "}
            By creating an account, you consent to Lyst’s <a style={{color:"black"}} href="https://www.lyst.com/help/terms-and-conditions/" >Terms & Conditions.</a> To
            learn more about how Lyst uses and protects your personal data,
            please read Lyst’s  <a style={{color:"black"}} href="https://www.lyst.com/help/privacy-policy/">Privacy Policy.</a> {" "}
          </Text>
        </div>
        <div className="loginMainRight">
          <div className="loginMainRightInside">
            <Text fontSize="lg" fontWeight="bold" textAlign="left">
              As a Lyst member you can…
            </Text>
            <Text className="loginlo">
              <i class="fa-sharp fa-solid fa-bookmark"> </i> Save your searches
            </Text>
            <Text className="loginlo">
              {" "}
              <i class="fa-sharp fa-solid fa-heart"></i> Create a wishlist
            </Text>
            <Text className="loginlo">
              {" "}
              <i class="fa-sharp fa-solid fa-bell"></i> Get alerts on your items
            </Text>
          </div>
        </div>
      </Container>

      <br />
      <br />
      <br />
    </div>
  );
}
export default Join;
