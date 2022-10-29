import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section
            title = 'Model S'
            desc='Order Online Touches Delivery'
            bg='model-s.jpg'
            leftBtntext='Custom Order'
            rightBtnText='Existing inventory'
            />
            <Section
            title = 'Model Y'
            desc='2% Company Car Tax.'
            bg='model-y.jpg'
            leftBtntext='Custom Order'
            rightBtnText='Test Drive'
            />
            <Section
            title = 'Model 3'
            desc='2% Company Car Tax.'
            bg='model-3.jpg'
            leftBtntext='Custom Order'
            rightBtnText='Explore inventory'
            />
            <Section
            title = 'Model X'
            desc=''
            bg='model-x.jpg'
            leftBtntext='Custom Order'
            rightBtnText='Explore inventory'
            />
            <Section
            title = 'Solar and Powerwall'
            desc='Power Everything'
            bg='solar-panel.jpg'
            leftBtntext='Custom Order'
            rightBtnText='Explore inventory'
            />
            <Section
            title = 'Accessories'
            desc=''
            bg='accessories.jpg'
            leftBtntext='Shop Now'
            />
        </Container>
    )
}

export default Home
const Container = styled.div`
height: 100vh;
`