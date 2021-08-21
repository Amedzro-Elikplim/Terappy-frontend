import React from "react";
import styled from 'styled-components';
import "primeflex/primeflex.css";

function SecondColumn() {
  return (
    <Div className="p-col-12 p-lg-6 p-md-6">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit
        sapiente amet maiores fugit doloribus, voluptatum natus ea ab nulla
        quaerat nam inventore facilis doloremque, molestias reprehenderit est
        eos praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quisquam asperiores adipisci accusantium voluptas! Repudiandae
        laudantium quidem similique aspernatur doloribus quaerat illum sunt,
        aliquid nulla, qui asperiores excepturi sequi in reiciendis!
      </div>

      <ul className="ul">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum
          voluptate iusto possimus corporis architecto sed, labore voluptas quia
          facere quo commodi cumque laudantium tenetur voluptates, doloremque
          excepturi odit laborum.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga
          rem soluta aliquid. Voluptas facilis quo sed dolorum veritatis
          laboriosam modi soluta, labore tempore doloremque distinctio quaerat
          quasi alias aliquid?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum
          voluptate iusto possimus corporis architecto sed, labore voluptas quia
          facere quo commodi cumque laudantium tenetur voluptates, doloremque
          excepturi odit laborum.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga
          rem soluta aliquid. Voluptas facilis quo sed dolorum veritatis
          laboriosam modi soluta, labore tempore doloremque distinctio quaerat
          quasi alias aliquid?
        </li>
      </ul>
    </Div>
  );
}

export default SecondColumn;

const Div = styled.div`
  padding: 30px;
`
 


