import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BiMenuAltLeft } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import Colors from '../assets/color'

const TopMenuEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: min-content;
  border-bottom: 1px solid ${Colors.Gray};
  padding: 1.5rem 0;
`
const Title = styled.span`
  font-weight: 600;
`
const Icons = styled.span`
  border: 1px solid ${Colors.Gray2};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
`
const CartIcon = styled(Icons)`
  position: relative;

  ::before {
    content:${p => (p.count ? `'${p.count}'` : "")};
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem;
    font-size: .8rem;
    border-radius: 50%;
    background-color: ${Colors.Primary};
    color: ${Colors.Background};
    min-height: 1rem;
    min-width: 1rem;
    transform: translate(-35%, -35%);
  }
`

const TopMenu = () => {
  return (
    <TopMenuEl>
      <Icons>
        <BiMenuAltLeft />
      </Icons>
      <Title>Hello, Amir</Title>
      <CartIcon count={3}>
        <FiShoppingCart />
      </CartIcon>
    </TopMenuEl>
  )
}

export default TopMenu
