import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/ggggg.jpg'; 

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bem-vindo ao Qbank</h1>

      <img src={image} alt="Imagem de boas-vindas" style={styles.image} />

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleLoginClick}>
          Login
        </button>
        <button style={styles.button} onClick={handleRegisterClick}>
          Registrar
        </button>
      </div>
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
    color: '#fff',
    backgroundColor: '#4CAF50',
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '6px',
    padding: '5px'

  },
  image: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
    marginBottom: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexDirection: 'row',
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
};

export default Home;
