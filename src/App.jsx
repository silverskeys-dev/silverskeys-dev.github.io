import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sobree from "./sobree.jsx";
import Contato from "./pages/Contato";
import cofesImg from "./images/cofes.png";
import cofes2Img from "./images/cofes2.png"; // Importa a nova imagem
import cofes3Img from "./images/cofes3.png";
import logoImg from "./images/logo.png";

function App() {
  const [form, setForm] = React.useState({
    pacote: "",
    nome: "",
    whatsapp: "",
    email: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/pedido", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message);
  }

  return (
    <Router>
      {/* Cabeçalho fixo */}
      <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-8 py-4 bg-black bg-opacity-30 text-white">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Logo Cafe da Praça"
            className="h-10 w-10 object-contain rounded-full"
          />
          <Link to="/" className="text-2xl font-bold hover:underline text-white">Cafe da Praça</Link>
        </div>
        <nav className="flex gap-6">
          <Link to="/contato" className="hover:underline font-semibold text-white">jogo</Link>
          <Link to="/sobre" className="hover:underline font-semibold text-white">Brabo</Link>
        </nav>
      </header>

      {/* Rotas principais */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Área do gradiente e imagem centralizada ocupando o topo */}
              <div
                className="w-full flex flex-col items-center justify-center pt-20 relative"
                style={{
                  minHeight: "90vh",
                  background: "linear-gradient(to right, #000, #444, #494949)",
                  overflow: "hidden"
                }}
              >
                {/* Imagem ocupa todo o gradiente no topo */}
                <img
                  src={cofesImg}
                  alt="Cafe da Praça"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                  style={{ zIndex: 1 }}
                />
                {/* Botão flutuante do WhatsApp dentro do gradiente */}
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center px-5 py-3 gap-2 transition"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M16.7 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.8-.2.1-.4.1-.6-.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.7s.7 2 1.6 2.7c.9.7 2.1 1.2 3.2 1.2.8 0 1.5-.2 2-.6.3-.2.5-.5.6-.7.1-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3z" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  WhatsApp
                </a>
                {/* Conteúdo destacado sobre o gradiente */}
                <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full px-8">
                    {/* Texto principal mais próximo da imagem */}
                    <div className="flex-1 flex flex-col items-start justify-center max-w-xl lg:ml-8 lg:mr-4">
                      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                        Café Especial da Praça
                      </h1>
                      <p className="text-lg md:text-xl text-white mb-8 drop-shadow">
                        Grãos arábica selecionados, moídos na hora e preparados com maestria. Aroma envolvente e sabor inesquecível!
                      </p>
                       <p className="text-lg md:text-xl text-white mb-8 drop-shadow">
                        Grãos arábica selecionados, moídos na hora e preparados com maestria. Aroma envolvente e sabor inesquecível!
                      </p>
                       <p className="text-lg md:text-xl text-white mb-8 drop-shadow">
                        Grãos arábica selecionados, moídos na hora e preparados com maestria. Aroma envolvente e sabor inesquecível!
                      </p>
                      
                      <div className="flex gap-4 mb-8">
                        <Link
                          to="#pedido"
                          onClick={() => {
                            const pedidoSection = document.getElementById("pedido");
                            if (pedidoSection) {
                              pedidoSection.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded shadow transition"
                        >
                          Peça Agora
                        </Link>
                        <Link
                          to="#sobre-cafe"
                          onClick={() => {
                            const sobreCafeSection = document.getElementById("sobre-cafe");
                            if (sobreCafeSection) {
                              sobreCafeSection.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="bg-white hover:bg-gray-100 text-pink-600 font-bold px-6 py-3 rounded shadow transition"
                        >
                          Saiba Mais
                        </Link>
                      </div>
                      <div className="flex gap-8 mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">☕</span>
                          <div>
                            <span className="font-bold text-white text-lg">500+</span>
                            <div className="text-white text-sm">Clientes Felizes</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">👐</span>
                          <div>
                            <span className="font-bold text-white text-lg">100%</span>
                            <div className="text-white text-sm">Artesanal</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🌿</span>
                          <div>
                            <span className="font-bold text-white text-lg">Fresco</span>
                            <div className="text-white text-sm">Diariamente</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Imagem ao lado com animação de entrada */}
                    <div className="flex-1 flex items-center justify-center mt-10 lg:mt-0">
                      <img
                        src={cofes3Img}
                        alt="Café Especial"
                        className="w-[350px] h-[350px] object-cover rounded-xl shadow-lg animate-fade-in"
                        style={{ maxWidth: "100%", maxHeight: "90vh" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Área branca abaixo do gradiente */}
              <div id="sobre-cafe" className="w-full bg-white flex flex-col items-center justify-center" style={{ minHeight: "calc(100vh - 80vh)" }}>
                <div className="max-w-xl text-center mt-20">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Sobre Nosso Café da Praça</h2>
                  <p className="text-lg text-gray-700">
                    Uma experiência artesanal que une o aroma intenso dos melhores grãos selecionados com a cremosidade suave de um preparo feito na hora. Cada xícara é um convite para desacelerar e apreciar o momento, trazendo calor e sabor para encontros especiais.
                  </p>
                </div>
                {/* Nova imagem e texto ao lado */}
                <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8 w-full max-w-4xl">
                  <img
                    src={cofes2Img}
                    alt="Café especial"
                    className="w-64 h-64 object-cover rounded-lg shadow animate-fade-in"
                  />
                  <div className="max-w-md text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">O Café</h3>
                    <p className="text-base text-gray-700 mb-8">
                      Nosso café é preparado com grãos selecionados, garantindo sabor marcante e aroma irresistível. Cada detalhe do preparo é pensado para proporcionar uma experiência única, perfeita para quem valoriza qualidade e tradição.
                    </p>
                    {/* Quadrado com ingredientes */}
                    <div className="bg-gray-100 rounded-lg shadow p-6 mt-4">
                      <h4 className="text-xl font-semibold mb-3 text-gray-800">Ingredientes Premium</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Grãos de café arábica selecionados manualmente</li>
                        <li>Mistura especial de torra média para sabor equilibrado</li>
                        <li>Água mineral pura de fonte natural</li>
                        <li>Espuma de leite fresco texturizada na hora</li>
                        <li>Finalização com pó de cacau ou canela gourmet</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Quatro quadrados informativos */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 px-4">
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Feito com Amor</h5>
                    <p className="text-gray-700 text-sm">
                      Cada xícara é preparada com grãos selecionados e carinho artesanal.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Ingredientes Frescos</h5>
                    <p className="text-gray-700 text-sm">
                      Grãos de café arábica de alta qualidade e leite fresco da região.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Receita Exclusiva</h5>
                    <p className="text-gray-700 text-sm">
                      Blend especial desenvolvido para oferecer equilíbrio perfeito entre aroma e sabor.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Sempre Fresco</h5>
                    <p className="text-gray-700 text-sm">
                      Café moído e preparado na hora para garantir intensidade e frescor incomparáveis.
                    </p>
                  </div>
                </div>

                {/* Texto destacado abaixo dos quadrados */}
                <div className="w-full flex flex-col items-center justify-center mt-12 px-4">
                  <div className="max-w-xl bg-white rounded-lg shadow p-6 text-center">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">Por que Escolher Nosso Café Especial?</h2>
                    <p className="text-lg text-gray-700">
                      Mais do que uma bebida, é uma experiência única que desperta os sentidos e cria momentos memoráveis.
                    </p>
                  </div>
                </div>

                {/* Seis quadrados informativos em 2 fileiras */}
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4">
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Perfeito para o Amor</h5>
                    <p className="text-gray-700 text-sm">
                      Ideal para presente romântico, pedido de namoro ou surpresa especial.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Embalagem Especial</h5>
                    <p className="text-gray-700 text-sm">
                      Caixas personalizadas e embalagens elegantes para cada ocasião.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Para Eventos</h5>
                    <p className="text-gray-700 text-sm">
                      Perfeito para festas, casamentos, aniversários e celebrações.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Sabor Único</h5>
                    <p className="text-gray-700 text-sm">
                      Combinação irresistível que agrada todos os paladares.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Entrega Rápida</h5>
                    <p className="text-gray-700 text-sm">
                      Entregamos fresquinho no mesmo dia em toda a região.
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h5 className="text-lg font-bold mb-2 text-gray-900">Qualidade Garantida</h5>
                    <p className="text-gray-700 text-sm">
                      100% de satisfação ou seu dinheiro de volta.
                    </p>
                  </div>
                </div>

                {/* Seção de pedido abaixo dos quadrados */}
                <div id="pedido" className="w-full flex flex-col items-center justify-center mt-16 px-4">
                  {/* Título e subtítulo fora do quadrado e centralizados */}
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">Faça Seu Pedido</h2>
                  <p className="text-base text-gray-700 mb-8 text-center">
                    Preencha o formulário abaixo e receba seus Morangos do Amor fresquinhos diretamente em sua casa!
                  </p>
                  <div className="max-w-3xl w-full bg-gray-50 rounded-lg shadow p-8">
                    {/* Pacotes - agora como opções selecionáveis */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Escolha seu Pacote</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <label className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer border transition-all duration-300 hover:border-pink-500">
                        <input type="radio" name="pacote" value="individual" className="mb-2 accent-pink-600" required />
                        <span className="font-bold text-lg text-gray-900 mb-2">Individual</span>
                        <span className="text-gray-700 mb-1">1 unidade</span>
                        <span className="font-bold text-pink-600 text-xl">R$ 8,00</span>
                      </label>
                      <label className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer border-2 border-pink-500 transition-all duration-300 hover:border-pink-700">
                        <input type="radio" name="pacote" value="kit-romantico" className="mb-2 accent-pink-600" required />
                        <span className="font-bold text-lg text-gray-900 mb-2">Kit Romântico</span>
                        <span className="text-gray-700 mb-1">6 unidades</span>
                        <span className="font-bold text-pink-600 text-xl">R$ 42,00</span>
                        <span className="text-xs text-pink-600 mt-2 font-semibold">Mais Popular</span>
                      </label>
                      <label className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer border transition-all duration-300 hover:border-pink-500">
                        <input type="radio" name="pacote" value="festa" className="mb-2 accent-pink-600" required />
                        <span className="font-bold text-lg text-gray-900 mb-2">Festa</span>
                        <span className="text-gray-700 mb-1">12 unidades</span>
                        <span className="font-bold text-pink-600 text-xl">R$ 78,00</span>
                      </label>
                      <label className="bg-white rounded-lg shadow p-4 flex flex-col items-center cursor-pointer border transition-all duration-300 hover:border-pink-500">
                        <input type="radio" name="pacote" value="evento-especial" className="mb-2 accent-pink-600" required />
                        <span className="font-bold text-lg text-gray-900 mb-2">Evento Especial</span>
                        <span className="text-gray-700 mb-1">24 unidades</span>
                        <span className="font-bold text-pink-600 text-xl">R$ 144,00</span>
                      </label>
                    </div>
                    {/* Formulário */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Seus Dados</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="font-semibold text-gray-800 mb-1">Nome Completo *</label>
                        <input type="text" name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome completo" className="border rounded px-3 py-2" />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-semibold text-gray-800 mb-1">WhatsApp *</label>
                        <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="(11) 99999-9999" className="border rounded px-3 py-2" />
                      </div>
                      <div className="flex flex-col md:col-span-2">
                        <label className="font-semibold text-gray-800 mb-1">Email (opcional)</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" className="border rounded px-3 py-2" />
                      </div>
                      <div className="md:col-span-2 flex justify-center mt-4">
                        <button type="submit" className="bg-pink-600 text-white font-bold px-8 py-3 rounded shadow hover:bg-pink-700 transition">
                          Enviar Pedido
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Rodapé */}
              <footer
                className="w-full text-white py-10 mt-16"
                style={{
                  background: "linear-gradient(to right, #4e2e0e, #7c4a1e, #7c4a1e)"
                }}
              >
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {/* Informações principais */}
                  <div>
                    <h2 className="text-xl font-bold mb-2">Cafe da Praça</h2>
                    <p className="text-sm mb-4">
                      Criando momentos especiais com nossos Cafe artesanais cobertos com chocolate belga de alta qualidade.
                    </p>
                    <span className="text-xs text-gray-400">Feito com <span className="text-pink-500">♥</span> em São Paulo</span>
                  </div>
                  {/* Contato */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contato</h3>
                    <p className="text-sm">📞 (11) 99999-9999<br /><span className="text-gray-400">WhatsApp e Ligações</span></p>
                    <p className="text-sm mt-2">✉️ contato@CafedaPraça.com<br /><span className="text-gray-400">Email para orçamentos</span></p>
                    <p className="text-sm mt-2">📍 São Paulo, SP<br /><span className="text-gray-400">Entregamos em toda Grande SP</span></p>
                  </div>
                  {/* Links rápidos */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
                    <ul className="text-sm space-y-1">
                      <li><Link to="/" className="hover:underline">Início</Link></li>
                      <li><Link to="/sobre" className="hover:underline">Sobre Nós</Link></li>
                      <li><a href="#galeria" className="hover:underline">Galeria</a></li>
                      <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
                      <li><a href="#pedido" className="hover:underline">Fazer Pedido</a></li>
                    </ul>
                  </div>
                  {/* Funcionamento ao lado de Links Rápidos */}
                  <div>
                    <h4 className="text-md font-semibold mb-2 flex items-center gap-2">
                      <span role="img" aria-label="Relógio">⏰</span> Funcionamento
                    </h4>
                    <p className="text-sm">Segunda a Sexta<br />8h às 18h</p>
                    <p className="text-sm mt-1">Sábado<br />9h às 16h</p>
                    <p className="text-sm mt-1">Domingo<br />Fechado</p>
                  </div>
                </div>
                <div className="text-center text-xs text-gray-200 mt-8">
                  © 2024 Cafe da Praça. Todos os direitos reservados.
                </div>
              </footer>
            </>
          }
        />
        <Route path="/sobre" element={<Sobree />} />
        <Route path="/contato" element={
          <>
            <div
              className="w-full flex flex-col items-center justify-center pt-20 relative"
              style={{
                minHeight: "90vh",
                background: "linear-gradient(to right, #000, #444, #494949)",
                overflow: "hidden"
              }}
            >
              {/* Imagem ocupa todo o gradiente no topo */}
              <img
                src={cofesImg}
                alt="Cafe da Praça"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                style={{ zIndex: 1 }}
              />
              <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
                <div className="bg-black bg-opacity-60 rounded-xl shadow-lg p-10 max-w-md w-full text-center animate-fade-in">
                  <h2 className="text-3xl font-bold mb-6 text-white">Contato</h2>
                  <p className="text-lg mb-4 text-white">📞 (11) 99999-9999<br /><span className="text-gray-300">WhatsApp e Ligações</span></p>
                  <p className="text-lg mb-4 text-white">✉️ contato@CafedaPraça<br /><span className="text-gray-300">Email para orçamentos</span></p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center px-6 py-3 gap-2 transition mt-4"
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M16.7 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.8-.2.1-.4.1-.6-.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.7s.7 2 1.6 2.7c.9.7 2.1 1.2 3.2 1.2.8 0 1.5-.2 2-.6.3-.2.5-.5.6-.7.1-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3z" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            {/* Rodapé igual ao App.jsx */}
            <footer
              className="w-full text-white py-10 mt-16"
              style={{
                background: "linear-gradient(to right, #4e2e0e, #7c4a1e, #4e2e0e)"
              }}
            >
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Informações principais */}
                <div>
                  <h2 className="text-xl font-bold mb-2">Cafe da Praça</h2>
                  <p className="text-sm mb-4">
                    Criando momentos especiais com nossos Cafe artesanais cobertos com chocolate belga de alta qualidade.
                  </p>
                  <span className="text-xs text-gray-400">Feito com <span className="text-pink-500">♥</span> em São Paulo</span>
                </div>
                {/* Contato */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contato</h3>
                  <p className="text-sm">📞 (11) 99999-9999<br /><span className="text-gray-400">WhatsApp e Ligações</span></p>
                  <p className="text-sm mt-2">✉️ contato@CafedaPraça.com<br /><span className="text-gray-400">Email para orçamentos</span></p>
                  <p className="text-sm mt-2">📍 São Paulo, SP<br /><span className="text-gray-400">Entregamos em toda Grande SP</span></p>
                </div>
                {/* Links rápidos */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
                  <ul className="text-sm space-y-1">
                    <li><Link to="/" className="hover:underline">Início</Link></li>
                    <li><Link to="/sobre" className="hover:underline">Sobre Nós</Link></li>
                    <li><a href="#galeria" className="hover:underline">Galeria</a></li>
                    <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
                    <li><a href="#pedido" className="hover:underline">Fazer Pedido</a></li>
                  </ul>
                </div>
                {/* Funcionamento ao lado de Links Rápidos */}
                <div>
                  <h4 className="text-md font-semibold mb-2 flex items-center gap-2">
                    <span role="img" aria-label="Relógio">⏰</span> Funcionamento
                  </h4>
                  <p className="text-sm">Segunda a Sexta<br />8h às 18h</p>
                  <p className="text-sm mt-1">Sábado<br />9h às 16h</p>
                  <p className="text-sm mt-1">Domingo<br />Fechado</p>
                </div>
              </div>
              <div className="text-center text-xs text-gray-200 mt-8">
                © 2024 Cafe da Praça. Todos os direitos reservados.
              </div>
            </footer>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
