import styled from "styled-components";
import "./Navbar.css";

const Title = styled("h1")`
    font-size: 3rem;
    margin: 0;
    white-space: nowrap;
    font-family: 'Rockwell', cursive;
    color: rgb(214, 181, 12)
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
        <div className="Container">
            <Title style={{marginTop: "20px", marginBottom: "10px", color: "white"}}>
                <div className="Title">
                    Ghost Bunny
                </div>
            </Title>
            <Title style={{fontSize: "1em", marginTop: "20px"}}>
                <div className="Subtitle">
            by 24 Carrot
                </div>
            </Title>
            <Link href="https://www.bobbyrabbits.com/#/BunnyClub">
                <div className="Link">
                About
                </div>
            </Link>
        </div>

    )
}

export default Navbar;