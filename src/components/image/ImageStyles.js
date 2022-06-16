import styled from 'styled-components'
import { motion } from "framer-motion";


export const StyledHeader = styled.header
`
background-color: #ebfbff;
padding:40px 0;
`

export const Navbar = styled(motion.nav)` 
    width: 100%;
    height: 4rem;
    background-image: linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    padding: 1rem;
    overflow: hidden;
`

export const Searchbar = styled(motion.input)` 
    width: 35%;
    padding: 2rem;
    transition: width 0.5s;
    
    &:focus {
        width: 40%;
        background-color: black;
        color: white;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 1000px){ 
        font-size:1.4rem;  
    width: 80vw;

    &:focus {
        width:82vw;
    }
} `

export const ImageContainer = styled(motion.div)` 
    
    display: grid;
    grid-template-columns: repeat(auto-fit, 450px);
    grid-gap: 20px;
    justify-content: center;
    padding: 10px;
   
@media screen and (max-width: 451px){   
    grid-template-columns: repeat(auto-fit, 90vw); 
    grid-gap: 5px;    
}
    
`

export const ImageCard = styled(motion.div)` 
    display: flex;
    padding: 1rem;
    margin: 1rem;
    align-items: center;
    background-color: #c7ffff;
    // background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
    border-radius: 1.5rem;

    transition: background-color 0.5s;

    &:hover {
        a {
            -webkit-transition: color 2s;
            transition: color 2s;
        }
        
        a:hover {
            color: white;
        }
    background: rgb(148,9,166);
background: linear-gradient(90deg, rgba(148,9,166,0.4458158263305322) 0%, rgba(101,0,48,0.19091386554621848) 100%);    
    }
`

export const Thumbnail = styled(motion.img)` 
    height: 100px; 
    width: 100px; 
    border-radius: 1rem; 
`

export const Title = styled(motion.div)` 
    word-wrap: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 90px;
    padding: 1rem;
    margin-left: 1rem;
    align-self: flex-start;
    padding-top: 0px;
    padding-left: 0px;
    font-size: 1.1rem;

    @media screen and (max-width: 451px){   
    font-size: 0.9rem;  
}    
`

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`

export const Modal = styled(motion.div)` 
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 600px;
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
    justify-content: space-between;
    color: #fff;
    opacity: 1;
    position: fixed;
    left: 35%;
    top: 10%;
    z-index: 1000;
    padding: 1rem;
 

@media screen and (max-width: 1100px){   
    position: fixed;
    top: 20%;
    left:30%;
} 

@media screen and (min-width: 760px) and (max-width: 768px){   
    width: 70vw;
    height: 85vh;
    position: fixed;
    top: 10%;
    left:15%;
} 

@media screen and (min-width: 279px) and (max-width: 540px){   
    width:100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
} 

 
`

export const Button = styled(motion.button)` 
    background-color: #4CAF50;
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
  background-color: #f44336;
  color: white;
}
`