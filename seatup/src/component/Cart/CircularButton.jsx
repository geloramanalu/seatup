export const CircularButton = ({ text, onClick }) => {
  return (
    <div
      className="flex justify-center items-center rounded-full 
                    bg-kuning text-black w-10 h-10 drop-shadow-lg"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
