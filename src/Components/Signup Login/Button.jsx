import { Button } from '@chakra-ui/react'

function Butto({text, style}) {
  return (
    <div>
      <Button style={style} colorScheme="teal" size="md">{text}</Button>
    </div>
  );
}
export default Butto;
