import { ImClubs } from 'react-icons/im';
import { FaUser, FaHeart, FaPodcast, FaBlogger } from 'react-icons/fa'
import { SiActigraph, SiJusteat, SiMonzo, } from 'react-icons/si'

const data = [
    {
        title: "Depression"
    },
    {
        title: "Relationship"
    },
    {
        title: "Divorce"
    },
    {
        title: "Addiction"
    },
    {
        title: "Suicidal thoughts"
    },
    {
        title: "Stress"
    },
    {
        title: "Marriage"
    },
    {
        title: "Anxiety"
    }
];

const exploreData = [
    {icon: <ImClubs />, text: "Become a club member" },
    {icon: <SiActigraph />, text: "Join our gym"},
    {icon: <SiJusteat />, text: "Eat Healthy shop" },
    {icon: <SiMonzo />, text: "Tour our marketplace" },
    {icon: <FaUser />, text: "Volunteer" },
    {icon: <FaHeart />, text: "Meet New People"},
    {icon: <FaPodcast />, text: "Listen to our podcasts" },
    {icon: <FaBlogger />, text: "Blog" },
    // {text: "Join the gym"}
];

export {
    data,
    exploreData
};