'use client';

import React, { useState } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string }[]>([]);

  const averageRating = allRatings.length ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1) : '0';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment && rating) {
      console.log("Nama:", name);
      console.log("Komentar:", comment);
      console.log("Rating:", rating);
      setAllRatings([...allRatings, rating]);
      setFeedbacks([...feedbacks, { name, comment }]);
      alert("Komentar dan rating berhasil dikirim!");
      setName('');
      setComment('');
      setRating(0);
    } else {
      alert("Mohon isi semua kolom dan pilih rating.");
    }
  };

  const handleDelete = (index: number) => {
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
    alert("Komentar berhasil dihapus!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", color: "black" }}>
      <h2>Formulir Komentar</h2>

      <form onSubmit={handleSubmit}>
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

        <div style={{ marginBottom: "1em" }}>
          <label>Rating:</label>
          <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: star <= rating ? "gold" : "gray"
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}>
          Kirim Komentar
        </button>
      </form>

      {/* Menampilkan Average Rating dengan Bar Status */}
      <div style={{ marginTop: "2em", fontSize: "18px" }}>
        <h3 style={{ color: "yellow" }}>Rata-Rata Rating: {averageRating} dari 5 bintang</h3>
        <div style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "5px", height: "20px" }}>
          <div
            style={{
              width: `${(Number(averageRating) / 5) * 100}%`,
              backgroundColor: "green",
              height: "100%",
              borderRadius: "5px"
            }}
          />
        </div>
        <div style={{ marginTop: "5px", textAlign: "center" }}>{averageRating} / 5</div>
      </div>

      {/* Tabel untuk menampilkan nama dan komentar */}
      <div style={{ marginTop: "2em" }}>
        <h3>Daftar Komentar</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nama</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Komentar</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{feedback.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{feedback.comment}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button onClick={() => handleDelete(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rating;
