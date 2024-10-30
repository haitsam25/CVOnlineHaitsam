import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Haitsam Abdillah Firdaus',
    birthDate: '6 Juni 2003',
    email: 'haitsamfirdaus111@gmail.com',
    phone: '081222049446',
    address: 'Puskopad Blok A5 NO1, Tanjungsari, Sumedang, Jawa Barat',
    occupation: 'WEB EDITING',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Gaya untuk tampilan "gamer-like"
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: '2px solid #00ff00', // Border neon
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#1a1a1d', // Background gelap
    fontFamily: 'Roboto, sans-serif',
    boxShadow: '0px 0px 15px 5px rgba(0, 255, 0, 0.3)', // Efek cahaya hijau
  },
  title: {
    color: '#00ff00', // Warna neon hijau
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
    fontSize: '24px',
    textShadow: '0px 0px 8px rgba(0, 255, 0, 0.6)', // Efek cahaya pada teks
    textTransform: 'uppercase',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    color: '#cfcfcf', // Warna teks abu-abu muda
    fontSize: '16px',
  },
};

export default PersonalInfo;
