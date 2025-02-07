import "./../styles/Home.css";

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="inline-block border-2 border-black rounded-full px-6 py-3">Hello!</div>
      <div className="intro text-8xl p-4 font-semibold">I'm <span className="text-orange-500">Ritesh</span>, <br />Software Developer</div>
      <div className="flex justify-between mt-8 px-16">
        <div className="max-w-sm p-6 bg-gray-50 rounded-lg">
          <p className="text-lg">
            Passionate about creating elegant solutions to complex problems. 
          </p>
        </div>
        <div className="max-w-sm p-6 bg-gray-50 rounded-lg">
          <p className="text-lg">
            <span className="text-orange-500 font-bold text-2xl">1+</span> Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
