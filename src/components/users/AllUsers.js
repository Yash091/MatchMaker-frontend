import {React , useState , useEffect} from 'react'
import UserCard from './UserCard'
import { getAllUser } from '../../service/api'
import { Link } from 'react-router-dom';
import "./AllUsers.css"

const AllUsers = () => {

    const [users , setUsers] = useState([]);
    useEffect(() => {
      const allUsers = async () => {
        const data = await getAllUser();
        setUsers(data.data);
      }
      allUsers();
    }, [])
    
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const s = getCookie("jwtoken");
    console.log(s);

    return (
        <div className="all-user-card-container">
            {
                users.filter(elem => {
                    console.log(elem.tokens);
                    return elem.tokens[0].token!==s;
                }).map( (elem) => {
                    return(
                        <UserCard elem={elem}/>
                    )
                })
            }    
        </div>
    )
}

export default AllUsers