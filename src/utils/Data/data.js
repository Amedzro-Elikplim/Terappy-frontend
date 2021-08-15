import { ImClubs } from 'react-icons/im';
import { FaUser, FaHeart, FaPodcast, FaBlogger } from 'react-icons/fa'
import { SiActigraph, SiJusteat, SiMonzo, } from 'react-icons/si'

const servicesData = [
    { title: "Depression" },
    { title: "Abusive relationship" },
    { title: "Divorce" },
    { title: "Pornography Addiction" },
    { title: "Suicidal thoughts" },
    { title: "Stress" },
    { title: "Marital problems" },
    { title: "Anxiety"}
];

const exploreData = [
    {icon: <ImClubs />, text: "Become a club member" },
    {icon: <SiActigraph />, text: "Join our yoga club"},
    {icon: <SiJusteat />, text: "Eat Healthy shop" },
    {icon: <SiMonzo />, text: "Tour our marketplace" },
    {icon: <FaUser />, text: "Volunteer" },
    {icon: <FaHeart />, text: "Meet New People"},
    {icon: <FaPodcast />, text: "Listen to our podcasts" },
    {icon: <FaBlogger />, text: "Blog" },
];

export {
    servicesData,
    exploreData
};