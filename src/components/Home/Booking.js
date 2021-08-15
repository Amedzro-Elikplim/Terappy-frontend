import styled from 'styled-components';
import { primaryFont } from '../../utils/fonts/font';
import BookingBlob from '../../utils/blobs/BookingBlob';
import { bookingBg, primaryColor } from '../../utils/color/Color';

const Booking = () => {
    return (
      <BookingDiv>
          <BookingBlob />
           <Text data-aos="fade-right" data-aos-offset="100" data-aos-duration="500">
             <h1>Begin your recovery journey with our therapist today!!!</h1>
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
 margin-top: 30px;
 margin-bottom: 50px;
 background: ${bookingBg};
`
 
const Text = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
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
