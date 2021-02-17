import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import authOperators from "../redux/auth/authOperators";
import authSelectors from "../redux/auth/authSelectors";
const TOKEN = 'token';

export default function Registration() {
    const dispatch = useDispatch();
    const onRegistration = (data) => dispatch(authOperators.registration(data));
    const token = useSelector(authSelectors.getIsAuthenticated);
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: '',
    });

    const handleChange = ({currentTarget: {name, value}}) => {
        setUser({...user, [name]: value});
    };


    useEffect(() => {
        if (token) {
            localStorage.setItem(TOKEN, JSON.stringify(token));
        }
    }, []);


    const submitForm = (event) => {
        event.preventDefault()

        onRegistration(user);
        reset();
    };

    const reset = () => {
        setUser(
            {
                name: '',
                password: '',
                email: '',
            }
        )
    };

    return (
        <>
            <h1>Register page</h1>
            <form onSubmit={submitForm} autoComplete="off">
                <p>Name</p>
                <label>
                    <input type="text"
                           name="name"
                           value={user.name}
                           onChange={handleChange}/>
                </label>
                <p>Email</p>
                <label>
                    <input type="text"
                           name="email"
                           value={user.email}
                           onChange={handleChange}/>
                </label>
                <p>Password</p>
                <label>
                    <input type="text"
                           name="password"
                           value={user.password}
                           onChange={handleChange}/>
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    )
};



// export default function Registration() {
//     const dispatch = useDispatch();
//     const onRegistration = (data) => dispatch(authOperators.registration(data));
//     const token = useSelector(authSelectors.getIsAuthenticated);
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//
//
//     useEffect(() => {
//         if (token) {
//             localStorage.setItem(TOKEN, JSON.stringify(token));
//         }
//     }, []);
//
//
//     const submitForm = event => {
//         event.preventDefault()
//
//         onRegistration({name, password, email});
//         reset();
//     };
//
//     const reset = () => {
//         setName('');
//         setPassword('');
//         setEmail('');
//     };
//
//     return (
//         <>
//             <h1>Register page</h1>
//             <form onSubmit={submitForm} autoComplete="off">
//                 <p>Name</p>
//                 <label>
//                     <input type="text"
//                            name="name"
//                            value={name}
//                            onChange={(e) => {
//                                setName(e.currentTarget.value)
//                            }}/>
//                 </label>
//                 <p>Email</p>
//                 <label>
//                     <input type="text"
//                            name="email"
//                            value={email}
//                            onChange={(e) => {
//                                setEmail(e.currentTarget.value)
//                            }}/>
//                 </label>
//                 <p>Password</p>
//                 <label>
//                     <input type="text"
//                            name="password"
//                            value={password}
//                            onChange={(e) => {
//                                setPassword(e.currentTarget.value)
//                            }}/>
//                 </label>
//                 <button type="submit">Register</button>
//             </form>
//         </>
//     )
// };
