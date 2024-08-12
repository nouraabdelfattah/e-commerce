import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Mock API call
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user)
                navigate('/'); 
            } else {
                setError('Invalid email or password.');
            }
        }, 1000);
    };

    return (
        <>
       <div className='container mb-5 p-4'>
       <div className='container border text-center login col-md-4 p-3 mt-5 mb-5'>
            <h2 className='mb-3'>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className='check ' >
                <div >
                    
                    <input

                    className='col-md-11 d-block col-12 border mt-5 mb-3 p-1'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                        style={{margin:"auto"}}
                    />
                </div>
                <div>
                    
                    <input
                    className='col-md-11 d-block col-12 border my-2 p-1'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{margin:"auto"}}
                         placeholder='Password'
                    />
                </div>
                <button  className='col-md-9  col-12 border my-4 p-1 submit' type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/sign">Register</a></p>
        </div>
       </div>
        </>
    );
    
};

export default Login;