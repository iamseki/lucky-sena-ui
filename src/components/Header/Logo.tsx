import { Image } from "@chakra-ui/react"
import logo from '../../assets/logo.svg'

export function Logo() {
  return (
    <Image src={logo} alt="lucky sena logo" h={[10, 12]} w={[10, 12]}/>
  );
}