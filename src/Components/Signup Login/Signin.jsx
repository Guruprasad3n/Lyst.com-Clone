import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { hover } from "@testing-library/user-event/dist/hover";
import Butto from "./Button";
import "./Signin.css";
function Signin() {
  return (
    <div>
      <h1>Sign in</h1>

      <Container className="mainSign" maxW="850px" color="#262626">
        <div className="signinMainLeft">
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
          <Butto
            text="Sign in"
            style={{ borderRadius: "0px", background: "black", width: "100%"}}
          />

          <Text fontSize="md" textAlign="center">or</Text>
          <Butto text="Continue with Facebook"  style={{ borderRadius: "0px", background: "#4267B2", width: "100%" }} />



        </div>
        <div className="signinMainRight">asasasasasas </div>
      </Container>
    </div>
  );
}
export default Signin;
