import Image from '../../assets/Images/notFound.jpg';

const NotFound = () => {
  return (
    <div>
      <figure>
        <img
          src={Image}
          className="w-full h-full object-cover absolute mix-blend-overlay z-0"
        />
      </figure>
    </div>
  );
};

export default NotFound;
