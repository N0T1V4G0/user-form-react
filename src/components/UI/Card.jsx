function Card({ children }) {
  return (
    <div className='bg-white container mx-auto my-8 p-3 rounded-lg max-w-2xl w-[90%]'>
      {children}
    </div>
  );
}

export default Card;
