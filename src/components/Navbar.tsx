import "../styles/global.css";

export default function Navbar() {
  return (
    <>
      <div className="relative">
        <div className="bg-[#211d17] h-[130px] pr-10 pl-10 pt-30">
          <hr className="bg-[#d0ad61] h-[2px]"/>
        </div>
        <img src="/stendardo.png" className="absolute w-[150px] top-[30px] left-[calc(50%-75px)]" />
      </div>
    </>
  );
}
