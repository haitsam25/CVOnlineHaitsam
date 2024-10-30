import foto from "../foto1.jpeg";
import './hero.css';

function Profile() {
    return (
      <img
        src={foto.src}
        alt="Haitsam Abdillah "
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-gray-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-red-400 font-bold">Haitsam Abdillah Firdaus </h1>
                <Profile />
                <p>Saya Adalah Pro Player Sejak Tahun 2020</p>
                </div>
    );
}