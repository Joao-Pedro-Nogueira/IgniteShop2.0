import Image from "next/image";
import { HeaderContainer } from "./styles";
import logoImg from '../../assets/logo.svg'
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <Cart />
    </HeaderContainer>
  )
}