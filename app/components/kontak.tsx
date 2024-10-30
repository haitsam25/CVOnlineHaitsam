'use client';

import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (name && comment) {
      console.log("Nama:", name);
      console.log("Komentar:", comment);
      alert("Komentar telah berhasil dikirim!");
      setName('');
      setComment('');
    } else {
      alert("Mohon isi semua kolom.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto", color: "black" }}>
      <h2>Formulir Komentar</h2>

      <div style={{ marginBottom: "1em" }}>
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginTop: "5px", color: "black" }}
        />
      </div>

      <div style={{ marginBottom: "1em" }}>
        <label htmlFor="comment">Komentar:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={4}
          style={{ width: "100%", padding: "8px", marginTop: "5px", color: "black" }}
        />
      </div>

      <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}>
        Kirim Komentar
      </button>
    </form>
  );
}

export default ContactForm;