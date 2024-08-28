export default function Contact({ id }) {
  return (
    <section id={id} className="py-8 p-4 bg-indigo-300">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500">javanivey@gmail.com</a></p>
      {/* <p>Social Media: <a href="https://twitter.com/yourprofile" className="text-blue-500">@yourprofile</a></p> */}
    </section>
  );
}
