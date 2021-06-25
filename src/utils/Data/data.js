import { ImClubs } from 'react-icons/im';
import { SiActigraph, SiJusteat, SiMonzo  } from 'react-icons/si'

const data = [
    {
        title: "Depression"
    },
    {
        title: "Relationship"
    },
    {
        title: "Divorce"
    }
];

const exploreData = [
    {icon: <ImClubs />, text: "Become a club member" },
    {icon: <SiActigraph />, text: "Join our gym"},
    {icon: <SiJusteat />, text: "Eat Healthy shop" },
    {icon: <SiMonzo />, text: "Tour our marketplace" },
    // {text: "Join the gym"}
];

export {
    data,
    exploreData
};