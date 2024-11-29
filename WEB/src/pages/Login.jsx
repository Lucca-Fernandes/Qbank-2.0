import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../services/api'; 

function Login() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate(); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log('Dados enviados para login:', loginData);

            const response = await api.post('/auth/login', loginData, {
                headers: {
                    'Content-Type': 'application/json', 
                }
            });

            setResponseMessage('Login bem-sucedido!');
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.log('Erro no login:', error);
            setResponseMessage(`Erro: ${error.response?.data?.message || 'Erro desconhecido'}`);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Login</h1>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleInputChange}
                    style={styles.input}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={loginData.password}
                    onChange={handleInputChange}
                    style={styles.input}
                />
                <br />
                <button type="submit" style={styles.button}>Login</button>
            </form>
            {responseMessage && <p style={styles.responseMessage}>{responseMessage}</p>}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        textAlign: 'center',
    },
    header: {
        fontSize: '3rem',
        color: '#4CAF50',
        marginBottom: '30px',
        fontFamily: 'Arial, sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
    input: {
        padding: '10px',
        width: '300px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    button: {
        padding: '15px 25px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
        backgroundColor: '#45a049',
        transform: 'scale(1.05)',
    },
    responseMessage: {
        fontSize: '16px',
        color: '#e74c3c',
        marginTop: '20px',
    }
};

export default Login;
