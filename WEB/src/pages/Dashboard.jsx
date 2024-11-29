import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/auth/users/${id}`);
      setUsers(users.filter(user => user._id !== id)); // Atualiza a lista de usuários localmente
    } catch (error) {
      console.error('Erro ao excluir o usuário:', error);
    }
  };

  const goHome = () => {
    navigate('/');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      backgroundColor: '#f4f4f4',
      padding: '20px',
      overflow: 'auto',
    },
    header: {
      color: '#4CAF50',
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    subHeader: {
      color: '#333',
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    usersContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      maxWidth: '800px',
      alignItems: 'center',
      maxHeight: '80vh',
      overflowY: 'auto',
    },
    userBox: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      textAlign: 'left',
      borderLeft: '5px solid #4CAF50',
      position: 'relative',
    },
    deleteIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'red',
      fontSize: '1.5rem',
    },
    button: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '1.2rem',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bem-vindo ao Dashboard</h1>
      <h2 style={styles.subHeader}>Usuários cadastrados:</h2>

      <div style={styles.usersContainer}>
        {users.map(user => (
          <div style={styles.userBox} key={user._id}>
            <h3 style={{ color: '#4CAF50' }}>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Senha: {user.password}</p>
            <button
              style={styles.deleteIcon}
              onClick={() => deleteUser(user._id)}
              title="Excluir usuário"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={goHome}>
        Voltar para Home
      </button>
    </div>
  );
}

export default Dashboard;
