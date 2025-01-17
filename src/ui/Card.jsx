function Card({ icon, text }) {
  return (
    <div className="inline-block space-y-5 rounded-2xl bg-white px-20 py-6 shadow-2xl">
      <p className="inline-block rounded-full bg-blue-500 p-5 text-6xl font-extrabold text-white hover:bg-red-400">
        {icon}
      </p>
      <p className="text-1xl font-bold text-black">{text}</p>
    </div>
  );
}
export default Card;
