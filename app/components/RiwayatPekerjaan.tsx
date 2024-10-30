function RowPekerjaan(props: any) {
  return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-blue-800 p-2 my-5">
          <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-1 text-white">
                  <div className="col-span-12 md:col-span-4">{props.Sebagai}</div>
                  <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                  <div className="col-span-12 md:col-span-4">{props.tahun}</div>
              </div>
          </div>
      </div>
  );
}

export default function RiwayatPekerjaan() {
  return (
      <div className="container mx-auto p-2 text-center pt-20 text-white">
          <h2 className="text-2xl">Riwayat Pekerjaan</h2>
          <RowPekerjaan Sebagai="Konsultan" instansi="INSABA PRATISTA AGYA" tahun="2024" />
          <RowPekerjaan Sebagai="Admin" instansi="SMK PPN Tanjungsari" tahun="2019" />
          <RowPekerjaan Sebagai="Pro Player" instansi="EVOS" tahun="2021" />
          <RowPekerjaan Sebagai="Barista" instansi="Cafe Strong" tahun="2020" />
      </div>
  );
}