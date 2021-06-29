import styled from 'styled-components'

const BookingBlob = () => {
    return(
        <StyledBlob viewBox="0 100 500 300" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
           <path id="blob" d="M308,343.5Q142,437,141.5,249.5Q141,62,156Q474,250,308,343.5Z" fill="#b4b0fc" transform="translate(200 0)" />
        </StyledBlob>
    )
}
export default BookingBlob;

const StyledBlob = styled.svg`
   height: 30vh;
   width: 30%;
   flex: 1 1 300px;
`