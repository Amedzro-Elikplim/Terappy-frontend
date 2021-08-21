import React from 'react';
import styled from 'styled-components';

function SecondColumn() {
    return (
      <Div2 className=" p-col-12 p-lg-6 p-md-12 p-nogutter">
        <div className="p-grid">
          <ImageDiv1 className="p-col" />
          <ImageDiv2 className="p-col" />
        </div>

        <div className="p-grid">
          <ImageDiv3 className="p-col" />
          <ImageDiv4 className="p-col" />
        </div>
      </Div2>
    );
}

export default SecondColumn;


const Div2 = styled.div`
  background-color: #f0f6fc;
  height: 415px;
  margin-bottom: 20px;
  margin: 0;
  margin-bottom: 20px;
`;

const ImageDiv1 = styled.div`
  background-image: url("/images/therapist1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  height: 200px;
  margin: 10px;
`;

const ImageDiv2 = styled.div`
  background-image: url("/images/therapist2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
`;

const ImageDiv3 = styled.div`
  background-image: url("/images/therapist3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
`;

const ImageDiv4 = styled.div`
  background-image: url("/images/therapist4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
`;

