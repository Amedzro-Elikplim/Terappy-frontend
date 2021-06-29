import styled from "styled-components";
import { blobPrimaryColor, blobSecondaryColor, primaryColorFade } from '../color/Color'

const Blob = () => {
  return(
    <StyledBlob viewBox="10 100 5 100" xmlns="http://www.w3.org/2000/svg"> 
      <path  fill= {blobPrimaryColor} d="M45.8,-26.5C57.1,-7,62.3,16,53.6,37.6C45,59.2,22.5,79.4,-2.1,80.6C-26.7,81.8,-53.4,64,-67.1,39.6C-80.8,15.1,-81.4,-16.1,-68,-36.9C-54.7,-57.7,-27.3,-68,-5,-65.1C17.3,-62.2,34.6,-46.1,45.8,-26.5Z" transform="translate(95 100)" />
      <path fill= {blobSecondaryColor} d="M66.1,-41.2C74.5,-23.6,62.4,2.7,48,22.2C33.6,41.6,16.8,54.1,0.8,53.6C-15.1,53.1,-30.2,39.6,-41.3,22.1C-52.5,4.5,-59.7,-17.1,-52.2,-34.2C-44.6,-51.3,-22.3,-63.9,3.3,-65.8C28.8,-67.7,57.7,-58.8,66.1,-41.2Z" transform="translate(90 140)" />
      <path fill={primaryColorFade} d="M44.3,-13.3C52.5,10.9,50.9,39.3,34.3,52.7C17.7,66.1,-13.9,64.3,-34.1,49.1C-54.4,33.9,-63.4,5.2,-55.8,-18.1C-48.2,-41.3,-24.1,-59.2,-3,-58.2C18,-57.2,36.1,-37.4,44.3,-13.3Z" transform="translate(90 100)" />
    </StyledBlob>
  )
}

export default Blob;

const StyledBlob = styled.svg`
 height: 40vh;
 width: 50%;
`