import styled from 'styled-components';
import { MdExplore } from 'react-icons/md';
import { exploreData } from '../../utils/Data/data';
import ExploreCard from './ExploreCard';
import { titleTextColor } from '../../utils/color/Color';
import { primaryFont } from '../../utils/fonts/font';

const Products = () => {


    return(
        <ExploreSection id="explore">
            
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
    color: ${titleTextColor};
    font-family: ${primaryFont};
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ExploreDiv = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
`

