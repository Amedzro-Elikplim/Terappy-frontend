import styled, { css } from 'styled-components';
import { MdExplore } from 'react-icons/md';
import { exploreData } from '../../../utils/Data/data';
import { useMediaQuery } from 'react-responsive';
import ExploreCard from './ExploreCard';

const Products = () => {

    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 699});
        return isDesktop ? children : null
    }

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth: 698});
        return isMobile ? children : null
    }

    return(
        <ExploreSection>
            <Desktop>
            <ExploreSectionTitle>Explore <MdExplore className="explore-icon" /></ExploreSectionTitle>

            <ExploreDiv>
            {exploreData.map((item, key) => (
               <ExploreCard key = {key} text = {item.text} icon ={item.icon} /> 
             ))}
            </ExploreDiv>
            </Desktop>

            <Mobile>

            <ExploreDiv mobile>
            {exploreData.map((item, key) => (
               <ExploreCard key = {key} text = {item.text} icon ={item.icon} /> 
             ))}
            </ExploreDiv>

            </Mobile>
            
        </ExploreSection>
    )
}
export default Products;

const ExploreSection = styled.section`
   height: 60vh;
   text-align: center;
   padding: 20px;
   margin: 100px 10px;
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
  cursor: pointer;

  ${props => props.mobile && css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90vw;
  `}
`

