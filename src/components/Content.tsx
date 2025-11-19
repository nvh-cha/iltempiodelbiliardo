import "../styles/global.css"

export default function Content() {
  return (
    <>
      <img src="bg.png" className="w-full" />
      <div className="bg-[#211d17] p-3">
        <div className="flex justify-between">
          <img src="corner.png" className="w-[120px]"/>
          <hr className="bg-[#d0ad61] mt-[10px] w-[1000px] h-[5px]"/>
          <img src="corner.png" className="w-[120px] scale-x-[-1]"/>
        </div>

        <div className="flex flex-row justify-center">
          <div className="max-w-[900px] text-center">
            <p className="text-[#d0ad61] cormorant text-[46px]">Dove la precisione incontra l'atmosfera</p>
            <p className="proza-libre text-[20px] text-[#d9d8c1]">Le luci soffuse, il profumo del legno, il suono morbido delle biglie che si sfiorano. In questo luogo il tempo scorre con un ritmo diverso; tra un colpo e l'altro, le parole diventano piu rare e piu vere. Qui non si gioca solo per vincere, ma per il piacere del gesto, della calma, della compagnia.</p>
          </div>
        </div>

        <div className="flex justify-center mt-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto">
            <img src="0.jpg" className="w-full max-w-[600px] border border-[#d0ad61]" />
            <img src="6.jpg" className="w-full max-w-[600px] border border-[#d0ad61]" />
            <img src="5.jpg" className="w-full max-w-[600px] border border-[#d0ad61]" />
            <img src="1.jpg" className="w-full max-w-[600px] border border-[#d0ad61]" />
          </div>
        </div>


        <div className="flex justify-between mt-100px">
          <img src="corner.png" className="w-[120px] scale-y-[-1]"/>
          <hr className="bg-[#d0ad61] mt-[104px] w-[1000px] h-[5px]"/>
          <img src="corner.png" className="w-[120px] scale-y-[-1] scale-x-[-1]"/>
        </div>
      </div>
      <div className="relative">
        <img src="2.jpg" className="w-full block"/> 
        <div className="absolute inset-0 text-center">
          <p className="cormorant text-[#d0ad61] mt-15 md:mt-20 text-[35px] md:text-[50px]">Orari</p>
          <div className="flex justify-center mt-20 md:mt-30">
            <table className="text-[#d9d8c2] w-[500px] text-[15px] md:text-[20px] proza-libre">
              <tr><td>Lunedì</td><td>Chiuso</td></tr>
              <tr><td>Martedì</td><td>17:00-2:00</td></tr>
              <tr><td>Mercoledì</td><td>17:00-2:00</td></tr>
              <tr><td>Giovedì</td><td>17:00-2:00</td></tr>
              <tr><td>Venerdì</td><td>17:00-2:00</td></tr>
              <tr><td>Sabato</td><td>17:00-2:00</td></tr>
              <tr><td>Domenica</td><td>17:00-2:00</td></tr>
            </table>
          </div>
        </div>
      </div>
      <div className="p-3 bg-[#211d17]">
        <div className="flex justify-between">
          <img src="corner.png" className="w-[120px]"/>
          <hr className="bg-[#d0ad61] mt-[10px] w-[1000px] h-[5px]"/>
          <img src="corner.png" className="w-[120px] scale-x-[-1]"/>
        </div>

        <p className="w-full text-center text-[#d9d8c2] text-[19px]">Via Carroceto, 70, 04011 Aprilia LT</p>
        <p className="w-full text-center text-[#d9d8c2] text-[19px]">0692730125</p>

        <p className="w-full text-center text-[#56452D] text-[19px] mt-25">&copy;nvh</p>
      </div>
    </>
  );
} 
