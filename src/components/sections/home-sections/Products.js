import styled, { css } from 'styled-components';
import { MdExplore } from 'react-icons/md';
import { exploreData } from '../../../utils/Data/data';
import ExploreCard from './ExploreCard';

const Products = () => {


    return(
        <ExploreSection>
            
            <ExploreSectionTitle>Explore <MdExplore className="explore-icon" /></ExploreSectionTitle>

            <ExploreDiv>
            {exploreData.map((item, key) => (
               <ExploreCard key = {key} text = {item.text} icon ={item.icon} /> 
             ))}
            </ExploreDiv>
            
        </ExploreSection>
    )
}
export default Products;

const ExploreSection = styled.section`
   text-align: center;
   padding: 20px;
   margin: 15px 10px;
   background-color: white;
`

const ExploreSectionTitle = styled.div`
    font-size: 4rem;
    color: #242222;
    font-family: Raleway;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ExploreDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0px;
  display: flex;
  flex-wrap: wrap;

  ${props => props.mobile && css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90vw;
  `}
`

