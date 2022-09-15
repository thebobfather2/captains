import styled from "styled-components";

const Container = styled("div")`
    width 100vw;
    height: auto;
    background: linear-gradient(180deg, #FF8410 0%, #924700 100%);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;

    position: relative;
`

const Title = styled("h1")`
    font-size: 3rem;
    margin: 0;
    white-space: nowrap;
    font-family: 'Lobster', cursive;
    color: #000000
`

const Link = styled("a")`
    font-size: 1.5rem;
    margin:1rem;
    cursor: pointer;
    color: #000000;
    text-decoration: none;

    position: absolute;
    right: 5%;

    @media (max-width: 700px) {
        position: initial;
    } 

`

const Navbar = () => {
    return (
        <Container>
            <Title>
                Edd Fox
            </Title>
            <Link href="https://www.bobbyrabbits.com/#/EddFox">
                About
            </Link>
        
        </Container>
    )
}

export default Navbar;