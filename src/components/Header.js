import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCars} from "../features/car/carSlice";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=> (
                <a key={index} href="#">{car}</a>
                    )
                )}
            </Menu>
            <RightMenu>
                <a href="#">Support</a>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a onClick={() => setBurgerStatus(true)}>Menu</a>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
                <li><a href="#">Lorem Iprisum</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid;

    a {
      font-weight: 600;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`