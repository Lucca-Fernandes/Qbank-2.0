import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../services/api'; 

function Register() {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirm_password: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

   
    if (registerData.password !== registerData.confirm_password) {
      setResponseMessage('As senhas não coincidem.');
      return;
    }

    try {
      const response = await api.post('http://localhost:3000/api/auth/register', registerData);
      setResponseMessage(`Success: ${response.data.message}`);
    } catch (error) {
      setResponseMessage(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Registrar</h1>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={registerData.name}
          onChange={handleInputChange}
          style={styles.input}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleInputChange}
          style={styles.input}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={registerData.password}
          onChange={handleInputChange}
          style={styles.input}
        />
        <br />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirmar Senha"
          value={registerData.confirm_password}
          onChange={handleInputChange}
          style={styles.input}
        />
        <br />
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Registrar</button>
          <button type="button" onClick={handleLoginRedirect} style={styles.button}>Voltar ao Login</button>
        </div>
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
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
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
  },
};

export default Register;
