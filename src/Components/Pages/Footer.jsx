import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";

function Footer() {
  const property = {
    rating: 4,
  };
  return (
    <div style={{background:"#f3f0e9", lineHeight:"25px", borderTop:"1px solid" }}>
   <VStack>
   <Container style={{padding:"45px 0px", boxSizing:"border-box", display:"flex", justifyContent:"space-evenly"}} maxW='1090px'  color='#262626'>
   
<Box>

  <Text fontSize='2xl' >TrustPilot</Text>
{Array(5)
          .fill("")
          .map((_,i) => (
            <StarIcon style={{width:"21px", height:"35px"}}
              key={i}
              color={i < property.rating ? "teal.500" : "gray.300"}
            />
          ))}
          <Text fontSize="sm" >TrustScore <span style={{fontWeight:"bold"}}>4.5</span> </Text>
          <Text fontSize="sm" > <span style={{fontWeight:"bold"}}>2,872</span> reviews  </Text>
          <div style={{display:"flex", alignItem:"center", width:"20px"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="" />
          </div>
          <div style={{display:"flex", alignItem:"center", width:"250px", marginTop:"10px"}}>
            {/* <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"  alt=""/> */}
            <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"  alt=""/>
          </div>
          <div style={{lineHeight:"20px", marginTop:"15px"}}>
          <Text ><a href="">Learn about the Lyst app for iPhone, iPad and Android.</a></Text>
          <Text ><a href="">© 2022 Lyst</a></Text>
          </div>
          </Box>

 
<Box>
  <Text fontSize='2xl'>INTERNATIONAL</Text>
  <Text fontSize='md'>Lyst - AU</Text>
  <Text fontSize='md'>Lyst - CA</Text>
  <Text fontSize='md'>Lyst - UK</Text>
  <Text fontSize='md'>Lyst - Österreich</Text>
  <Text fontSize='md'>Lyst - Schweiz</Text>
  <Text fontSize='md'>Lyst - Deutschland</Text>
  <Text fontSize='md'>Lyst - España</Text>
  <Text fontSize='md'>Lyst - France</Text>
  <Text fontSize='md'>Lyst - Italia</Text>
  <Text fontSize='md'>Lyst - 日本</Text>
  <Text fontSize='md'>Lyst - België</Text>
  <Text fontSize='md'>Lyst - Nederland</Text>
</Box>


<Box>
<Text fontSize='2xl'>HELP AND INFO</Text>
<Text fontSize="md">Help center</Text>
<Text fontSize="md">About us</Text>
<Text fontSize="md">Shipping policy</Text>
<Text fontSize="md">Returns policy</Text>
<Text fontSize="md">Payments</Text>
<Text fontSize="md">Refund policy</Text>
<Text fontSize="md">Developers</Text>
<Text fontSize="md">Careers</Text>
<Text fontSize="md">Contact</Text>
<Text fontSize="md">Terms & conditions</Text>
<Text fontSize="md">Privacy & cookie policy</Text>
<Text fontSize="md">Intellectual property</Text>
<Text fontSize="md">Categories</Text>
<Text fontSize="md">Become a partner</Text>
<Text fontSize="md">Lyst Insights</Text>
<Text fontSize="md">Lyst News</Text>


</Box>
  </Container>
</VStack>

       
      
    </div>
  );
}
export default Footer;
