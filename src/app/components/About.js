export default function About() {
  return (
    <section className="p-8 bg-[#542642] flex flex-col sm:flex-row justify-between items-center sm:items-start">
      <div className="text-center sm:text-left sm:mr-8 text-[#e3d3a1]">
        <h2 className="text-2xl font-medium mb-4 text-[#e2a43d] ">About</h2>
        <p classname="">Javan likes long walks on the beach. Why? Who&apos;s asking?</p>
      </div>
      <div className="mt-8 sm:mt-0 sm:ml-8">
        <img src="images/AboutPic.png" alt="portrait of javan" className="w-36 rounded-3xl" />
      </div>
    </section>
  );
}
