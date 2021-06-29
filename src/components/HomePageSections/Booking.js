import styled from 'styled-components';
import { primaryFont } from '../../utils/fonts/font';
import BookingBlob from '../../utils/blobs/BookingBlob';
import { bookingBg, primaryColor } from '../../utils/color/Color';

const Booking = () => {
    return (
      <BookingDiv>
          <BookingBlob />
           <Text>
             <h2>Need to talk with other specialists urgently??</h2>
             <P>browse through our portal and find personnels available</P>
             <Button>BROWSE</Button>
           </Text>
      </BookingDiv>
        
        
    )
}
export default Booking;

const BookingDiv = styled.div`
 display: flex;
 justify-content: space-evenly;
 flex-wrap: wrap;
 font-family: ${primaryFont};
 margin: 50px;
 margin-bottom: 50px;
 background-color: ${bookingBg};
`
 
const Text = styled.div`
 display: flex;
 flex-direction: column;
 align-self: flex-start;
 align-items: center;
 justify-content: center;
 flex: 1 1 300px;
 padding: 20px;
 background: url("images/bookbg.svg");
 background-repeat: no-repeat;
 background-position: center;
 
`

const Button = styled.button`
  min-width: 15vw;
  padding: 14px;
  background-color: ${primaryColor};
  border: none;
  outline: none;
  color: white;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;


  &:hover {
    color: ${primaryColor};
    background-color: white;
    outline: 1px solid ${primaryColor};
  }
`

const P = styled.p`
  font-weight: bolder;
  margin: 5px;
`
