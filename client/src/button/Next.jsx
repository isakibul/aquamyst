/* eslint-disable react/prop-types */
// Assuming this is your Next.js component
const Next = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-10 right-16 bg-blue-500 text-white py-[10px] px-[50px] text-4xl rounded-xl border-2 border-white shadow-lg"
      style={{
        background: 'linear-gradient(180deg, #1AE8F5 0%, #1B85E0 25%, #1C18C9 52.47%, #2918E7 92.19%)',
        fontFamily: 'Agbalumo',
      }}
    >
      Next
    </button>
  );
};

export default Next;
