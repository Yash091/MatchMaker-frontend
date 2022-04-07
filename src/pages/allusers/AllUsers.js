import {React , useState , useEffect, useContext} from 'react'
import UserCard from '../../components/users/UserCard'
import { getAllUser } from '../../service/api'
import { Link } from 'react-router-dom';
import "./AllUsers.css"
import { Spinner } from '@chakra-ui/react'
import { UserContext } from '../../context/Context';

const AllUsers = (props) => {
    
    const [users , setUsers] = useState([]);
    // const [name,setName] = useState("");
    const [isloading , setIsLoading] = useState(true);
    const {user} = useContext(UserContext);
    useEffect(() => {
        setIsLoading(true);
      const allUsers = async () => {
        const data = await getAllUser();
        setUsers(data.data);
        setIsLoading(false);
      }
      allUsers();
    }, [])
    
    // function getCookie(cname) {
    //     let name = cname + "=";
    //     let ca = document.cookie.split(';');
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) === ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) === 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    // const s = getCookie("jwtoken");
    // // console.log(s);
    // let data = users.find((elem) => elem.tokens[0].token === s);
    
    return (
        <>

        <div className="all-user-card-container">
            {
                isloading === true ? 
                <div className="spinner" style={{display: "flex" , gap: "5rem" , flexDirection: "column" , justifyContent: "center" , alignItems: "center"}}>
                    <h1 style={{fontSize: "5rem" , color: "#ff477e"}}>Wait for your partners</h1>
                    <Spinner 
                        thickness = '4px'
                        speed = '0.65s'
                        emptyColor = 'gray.200'
                        color = '#ff477e'
                        size = 'xl'
                    />
                </div>  
                    : users.filter(elem => {
                    return elem._id!==user._id;
                }).map( (elem) => {
                    return(
                        
                        <UserCard elem={elem}/>
                    )
                })
            }    
        </div>
        </>
    )
}

export default AllUsers