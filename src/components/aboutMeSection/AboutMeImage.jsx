const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
<<<<<<< HEAD
          src="images/about.png"
=======
          src="images/about.png"
>>>>>>> 7970545bc7da7e8ec2b19e25fce65337be485146
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[550px] w-[300px] bg-darkCyan absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"
      style={{
          boxShadow:
            "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default AboutMeImage;
