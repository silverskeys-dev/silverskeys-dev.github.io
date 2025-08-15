export default function Contato() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Contato</h2>
      <form className="flex flex-col max-w-md">
        <input type="text" placeholder="Seu nome" className="border p-2 mb-4 rounded"/>
        <input type="email" placeholder="Seu e-mail" className="border p-2 mb-4 rounded"/>
        <textarea placeholder="Sua mensagem" className="border p-2 mb-4 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </section>
  );
}
