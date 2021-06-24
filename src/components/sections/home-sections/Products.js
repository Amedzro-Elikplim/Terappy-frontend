import styled from 'styled-components';
const Products = () => {
    return(
        <ProductSection>
            <ProductSectionTitle>Products</ProductSectionTitle>
            <ProductText>under construction!</ProductText>
        </ProductSection>
    )
}
export default Products;

const ProductSection = styled.section`
   height: 50vh;
   text-align: center;
   padding: 10px;
   margin-top: 50px;
   background-color: white;
`

const ProductSectionTitle = styled.h3`
    font-size: 4rem;
    color: #242222;
    font-family: Raleway;
`

const ProductText = styled.p`
  font-size: larger;
  font-weight: bolder;
  font-family: Raleway;
`