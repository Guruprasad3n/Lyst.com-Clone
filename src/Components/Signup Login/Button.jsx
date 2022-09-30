import { Button } from '@chakra-ui/react'

function Butto({text, style, icon}) {
  return (
    <div>
      <Button icon={icon} style={style} colorScheme="teal" size="md">{text}</Button>
    </div>
  );
}
export default Butto;
