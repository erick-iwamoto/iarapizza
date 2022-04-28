import { Container, Content, Cart } from "./styles";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { MdShoppingBasket } from 'react-icons/md';

import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="pizza logo" width="80" height="80" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#242424" />
        </Cart>
      </Content>
    </Container>
  )
}

export default Header;