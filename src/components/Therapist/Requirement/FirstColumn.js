import React from 'react';
import styled from 'styled-components';
import "primeflex/primeflex.css";

function FirstColumn() {
  return (
    <div className="p-col-12 p-lg-6 p-md-6">
      <Image />
    </div>
  );
}

export default FirstColumn;



const Image = styled.div`
  background-image: url("/images/therapist3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: 5px solid white;
  
`;
