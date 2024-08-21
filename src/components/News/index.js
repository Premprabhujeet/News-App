import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    color: #aeeeee; /* Light teal */
  }
  50% {
    color: #d0f0f0; /* Lighter teal */
  }
  100% {
    color: #aeeeee; /* Light teal */
  }
`;

// Define the Header styled component with animations
export const Header = styled.h1`
  text-align: center;
  margin-top: 120px;
 color:rgb(4,99,201);
  margin-bottom: 20px;
  font-size: 2.5rem; /* Default font size */
  font-weight: 700; /* Bold font weight */
  letter-spacing: 1px; /* Slight letter spacing */
  text-transform: capitalize; /* Ensure text is capitalized */
  background: linear-gradient(135deg, #007bff, #00d4ff); /* Gradient background for the text */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text fill transparent */
  animation: ${fadeIn} 1s ease-out, ${pulse} 2s infinite; /* Combined animations */

  @media screen and (max-width: 425px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

export const Container = styled.div`
  width: 93%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
`;

export const card = {
  marginTop: "10px",
  marginBottom: "50px",
};
