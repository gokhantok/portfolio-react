import project1 from '../assets/project1.png';
import project2 from '../assets/visio.png';
import project3 from '../assets/project3.jpeg';
 

const PROJECTS = [
    {   id : 1,
        title : 'Order Management System' ,
        description : ' An Oracle Apex App that my team and I built, along with PL/SQL, JavaScript, jQuery, Node.js and RESTful services!',
        link : 'https://simplydeliver.com/',
        image: project1
    },
    {   
        id : 2,
        title : 'Simply Visio',
        description : ' A platform aiming to help people with visual disabilities. Developed by using Oracle Apex and Cordova. ',
        link : 'https://simplyvisio.com/',
        image: project2
    },
    {   
        id : 3,
        title : 'Robotic Recognition & Speech',
        description : ' An expert system which runs on a robot, called as "EkoRob: Campus Guide Humanoid Robot"',
        link : 'https://roboticspeech.github.io/',
        image: project3
    }

]


export default PROJECTS;