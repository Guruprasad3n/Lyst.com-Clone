import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import "./Home.css"
import Footer from "./Footer";




function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <img
        onClick={onOpen}
        style={{
          borderTop: "1px solid",
          marginTop: "10px",
          marginBottom: "80px",
          cursor: "pointer",
        }}
        src="https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg"
        alt=""
      />
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src="https://i.postimg.cc/BZVmKjy7/Untitled-1-copy.jpg"
              alt=""
            />
          </ModalBody>
        </ModalContent>
      </Modal>



      <div className="home_discover">
        <div className="home_discover_card">
          <div className="home_discover_div_p">
            <p >bag an icon</p>
          </div>
          <div className="home_discover_div_img" >
            <img
              src="https://cdna.lystit.com/cms/ea59bbea_bf2d_4441_90aa_b0a1a8ee614b_21dfec2728.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >30 under 30 sec</p>
          </div>
          <div className="home_discover_div_img" >
            <img
              src="https://cdna.lystit.com/cms/cd20a12e_e37b_4e36_8325_ed1a2b420728_b7596dca3b.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >THIS IS FASHION</p>
          </div>
          <div className="home_discover_div_img" >
            <img
             src="https://cdna.lystit.com/cms/2c09c3f3_34a7_4302_9a44_416fd3fa5d76_10988971ba.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >trend to know</p>
          </div>
          <div className="home_discover_div_img" >
            <img
             src="https://cdna.lystit.com/cms/3c70c00c_25c6_42ef_8e12_6a5e0e5819e7_fd338f521d.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >boots from jimmy</p>
          </div>
          <div className="home_discover_div_img" >
            <img
              src="https://cdna.lystit.com/cms/HP_Top_Lyst_591e85baaf.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >collection 22</p>
          </div>
          <div className="home_discover_div_img" >
            <img
             src="https://cdna.lystit.com/cms/NL_LIFESTYLE_LYST_600x600_2_1_b867daebbd.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >yoox dont miss it</p>
          </div>
          <div className="home_discover_div_img" >
            <img
              src="https://cdna.lystit.com/cms/Yoox_Image_Refresh29_Aug_IMG_600x600_569db4b7dd.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="home_discover_card">
          <div className="home_discover_div_p">
          <p >leather goods</p>
          </div>
          <div className="home_discover_div_img" >
            <img
              src="https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>

</div>

<Footer />
    </div>
  );
}
export default Home;
