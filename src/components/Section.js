import styled from "styled-components";

function Section() {
    return (
        <Warp>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online Touches Delivery</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <ButtonLeft>
                    Custom Order
                </ButtonLeft>
                <ButtonRight>
                    Existing Inventory
                </ButtonRight>
            </ButtonGroup>
            <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Warp>
    )
}

export default Section
const Warp = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
 display: flex;
  margin-bottom: 30px;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`
const ButtonLeft = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const ButtonRight = styled(ButtonLeft)`
background: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``