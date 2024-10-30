'use client'; // Menandai komponen ini sebagai komponen klien

import React, { useState } from 'react';
import Image from 'next/image';
import hobby1 from '../hobi1.jpg';
import hobby2 from '../hobi2.jpg';
import hobby3 from '../hobi3.jpg';
import hobby4 from '../hobi4.jpg';

const HobbiesGallery: React.FC = () => {
  const hobbies = [
    { id: 1, title: 'Hiking', image: hobby1 },
    { id: 2, title: 'Gaming', image: hobby2 },
    { id: 3, title: 'Programer', image: hobby3 },
    { id: 4, title: 'Traveler', image: hobby4 },
  ];

  // Objek gaya tanpa mendeklarasikan tipe
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    } as React.CSSProperties,
    title: {
      color: 'teal',
    } as React.CSSProperties,
    gallery: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap' as 'wrap', // Menegaskan tipe
      marginTop: '20px',
    } as React.CSSProperties,
    card: {
      width: '200px', // Lebar card disesuaikan dengan ukuran gambar
      margin: '5px',  // Margin yang lebih kecil untuk jarak yang lebih dekat
      border: '1px solid #ccc',
      borderRadius: '5px',
      overflow: 'hidden',
      textAlign: 'center', // Mengatur teks di tengah
      transition: 'transform 0.2s, box-shadow 0.2s', // Efek transisi
    } as React.CSSProperties,
    hobbyTitle: {
      margin: '10px 0',
      fontSize: '16px',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Gallery</h2>
      <div style={styles.gallery}>
        {hobbies.map((hobby) => {
          const [isHovered, setIsHovered] = useState(false); // Mengatur state hover

          return (
            <div
              key={hobby.id}
              style={{
                ...styles.card,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Mengubah skala saat hover
                boxShadow: isHovered ? '0 4px 8px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.1)', // Menambah bayangan saat hover
              }}
              onMouseEnter={() => setIsHovered(true)} // Mengatur state saat mouse masuk
              onMouseLeave={() => setIsHovered(false)} // Mengatur state saat mouse keluar
            >
              <Image
                src={hobby.image}
                alt={hobby.title}
                layout='responsive'
                width={200} // Ukuran gambar diperbesar
                height={200} // Ukuran gambar diperbesar
              />
              <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesGallery;
