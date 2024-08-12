import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

       
        setTimeout(() => {
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some((user) => user.email === email);
            console.log(userExists)

            if (userExists) {
                setError('User already exists.');
            } else {
                users.push({ username, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                navigate('/login');
            }
        }, 1000);
    };

    return (
       <div className='container p-4'>
         <div className='container border   login col-md-4 p-3 mt-5 mb-5'>
            <h2 className='text-center mb-3'>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className='check '>
                <div>
                    <label className='text-start'>Username:</label>
                    <input
                    className='col-md-11 d-block col-12 border mt-1 mb-3 p-1'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text-start'>Email:</label>
                    <input
                    className='col-md-11 d-block col-12 border mt-1 mb-3 p-1'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='text-start'>Password:</label>
                    <input
                    className='col-md-11 d-block col-12 border mt-1 mb-3 p-1'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit"  className='col-md-9  d-block  col-12 border my-4 p-1 submit'>Register</button>
            </form>
            <p className='text-center'>Already have an account? <a href="/login">Login</a></p>
        </div>
       </div>
    );
};

export default Register;