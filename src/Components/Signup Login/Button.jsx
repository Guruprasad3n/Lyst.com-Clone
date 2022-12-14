import { Button } from '@chakra-ui/react'

function Butto({text, style, icon, onSubmit}) {
  return (
    <div>
      <Button onSubmit={onSubmit} icon={icon} style={style} colorScheme="teal" size="md">{text}</Button>
    </div>
  );
}
export default Butto;
