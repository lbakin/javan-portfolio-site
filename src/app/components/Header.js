export default function Header() {
  return (
    <header className="bg-black text-[#e3d3a1] top-0">
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src="images/StopMotion8.png"
          alt="Header Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
            Javan Ivey
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-2" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Putting the emotion in stop motion
          </p>
        </div>
      </div>
    </header>
  );
}
