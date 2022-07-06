import React, {useState} from 'react';
import UsersList from '../../components/usersList/UsersList';

function PortfolioPage() {
    const [ users, setUsers] = useState([]);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }
    return (
        <div>
            <h1 >запрос с ДЗ6</h1>
            <button onClick={getUsers}>Сlick</button>
            <UsersList users={users}/>
        </div>
    );
}

export default PortfolioPage;