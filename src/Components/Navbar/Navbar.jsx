import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

// const links = [
//   {
//     to: "/signup",
//     title: "Signin",
//   },
//   {
//     to: "/join",
//     title: "Join",
//   },
// ];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className="navParent">
        <div className="navtop1">
          <div className="navtop11">
            <div>
              <Button
                style={{ background: "none", fontSize: "12px" }}
                onClick={onOpen}
              >
                IN-US$
              </Button>
              <Modal
                style={{ borderRadius: "0px" }}
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Set your country</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Select placeholder="Select option">
                      <option value="option1">Afghanistan</option>
                      <option value="option2">Albania</option>
                      <option value="option3">Algeria</option>
                      <option value="option1">Andorra</option>
                      <option value="option2">Angola</option>
                      <option value="option3">Antigua and Barbuda </option>
                      <option value="option1">Argentina</option>
                      <option value="option2">Armenia</option>
                      <option value="option3">Australia</option>
                      <option value="option1">Austria</option>
                      <option value="option2">Azerbaijan</option>
                      <option value="option3">Bahamas</option>
                      <option value="option1">Bahrain</option>
                      <option value="option2">Bangladesh</option>
                      <option value="option3">Barbados</option>
                      <option value="option1">Belarus</option>
                      <option value="option2">Belgium</option>
                      <option value="option3">Belize</option>
                      <option value="option1">Benin</option>
                      <option value="option2">Bhutan</option>
                      <option value="option3">Bolivia</option>
                      <option value="option1">Bosnia and Herzegovina </option>
                      <option value="option2">Brazil</option>
                      <option value="option3">Brunei</option>
                      <option value="option1">Bulgaria</option>
                      <option value="option2">Côte d'Ivoire</option>
                      <option value="option3">Cabo Verde</option>
                      <option value="option1">Cambodia</option>
                      <option value="option2">Cameroon</option>
                      <option value="option3">Canada</option>
                      <option value="option3">Central African Republic </option>
                      <option value="option1">
                        Democratic Republic of the Congo{" "}
                      </option>
                      <option value="option2">Denmark</option>
                      <option value="option3">Djibouti</option>
                      <option value="option1">Dominica</option>
                      <option value="option2">Dominican Republic </option>
                      <option value="option3">Ecuador</option>
                      <option value="option1">Egypt</option>
                      <option value="option2">El Salvador </option>
                      <option value="option3">Equatorial Guinea </option>
                      <option value="option1">Eritrea</option>
                      <option value="option2">Estonia</option>
                      <option value="option3">Fiji</option>
                      <option value="option2">Finland</option>
                      <option value="option3">France</option>
                      <option value="option2">Gabon</option>
                      <option value="option3">Gambia</option>
                      <option value="option2">Georgia</option>
                      <option value="option3">Germany</option>
                      <option value="option2">Ghana</option>
                      <option value="option3">Greece</option>
                      <option value="option2">Grenada</option>
                      <option value="option3">Haiti</option>
                      <option value="option2">Holy See</option>
                      <option value="option3">Honduras</option>
                      <option value="option2">Hungary</option>
                      <option value="option3">Iceland</option>
                      <option value="option2">India</option>
                      <option value="option3">Indonesia</option>
                      <option value="option2">Iran</option>
                      <option value="option3">Iraq</option>
                      <option value="option2">Ireland</option>
                      <option value="option3">Israel</option>
                      <option value="option2">Italy</option>
                      <option value="option3">Jamaica</option>
                      <option value="option2">Japan</option>
                      <option value="option3">Jordan</option>
                      <option value="option2">Kazakhstan</option>
                      <option value="option3">Kenya</option>
                      <option value="option2">Kiribati</option>
                      <option value="option3">Kuwait</option>
                      <option value="option2">Kyrgyzstan</option>
                      <option value="option3">Laos</option>
                      <option value="option2">Latvia</option>
                      <option value="option3">Lebanon</option>
                      <option value="option2">Lesotho</option>
                      <option value="option3">Liberia</option>
                      <option value="option2">Libya</option>
                      <option value="option3">Liechtenstein</option>
                      <option value="option2">Madagascar</option>
                      <option value="option3">Malawi</option>
                      <option value="option2">Malaysia</option>
                      <option value="option3">Maldives</option>
                      <option value="option2">Marshall Islands</option>
                      <option value="option3">Marshall Islands</option>
                      <option value="option2">Morocco</option>
                      <option value="option2">Myanmar </option>
                      <option value="option3">Nauru</option>
                      <option value="option2">Nepal</option>
                      <option value="option3">Niger</option>
                      <option value="option2">Oman</option>
                      <option value="option3">Palau</option>
                      <option value="option2">Uganda</option>
                      <option value="option3">Ukraine</option>
                      <option value="option2">United Arab Emirates</option>
                      <option value="option3">United Kingdom</option>
                      <option value="option2">United States of America</option>
                      <option value="option3">Uruguay</option>
                      <option value="option2">Yemen</option>
                      <option value="option3">Zambia</option>
                      <option value="option2">Zimbabwe</option>
                    </Select>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      style={{ background: "black", color: "white" }}
                      mr={130}
                      onClick={onClose}
                    >
                      Set Country
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            <select name="" placeholder="Help" id="navselect">
              <option value="">Help center</option>
              <hr />
              <Spacer />
              <option value="">Contact us</option>
              <hr />
              <Spacer />
              <option value="">About us</option>
              <hr />
              <Spacer />
              <option value="">Careers</option>
              <hr />
              <Spacer />
            </select>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <NavLink to="/signin">Signin</NavLink>
              <div
                style={{
                  border: "1px solid black",
                  background: "black",
                  color: "white",
                  padding: "0px 5px",
                  marginLeft: "5px",
                }}
              >
                <NavLink to="/join">Join</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="navtop2">
          <div className="navtop2left">
            <Link to="/" >
           <Image  w="50%"  src="https://www.lyst.com/news/wp-content/uploads/2021/06/lyst-logo.png" alt="LYST Logo" />
           </Link>
               <Link to="/women">WOMEN</Link>
               
               <Link to="/men">MEN</Link>
         
          </div>
          <input type="text" placeholder="SEARCH " />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
