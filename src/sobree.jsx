import cofesImg from "./images/cofes5.png";
import cofes6Img from "./images/cofes6.png";
import cofes7Img from "./images/cofes7.png";
import cofes8Img from "./images/cofes8.png";
import { Link } from "react-router-dom";

export default function Sobree() {
  return (
    <>
      {/* Topo com gradiente e imagem */}
      <div
        className="w-full flex flex-col items-center justify-center pt-20 relative"
        style={{
          minHeight: "60vh",
          background: "linear-gradient(to right, #000, #444, #494949)",
          overflow: "hidden"
        }}
      >
        <img
          src={cofesImg}
          alt="Cafe da Praça"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          style={{ zIndex: 1 }}
        />
        <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
          <div className="bg-black bg-opacity-60 rounded-xl shadow-lg p-10 max-w-2xl w-full text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-white">Sobre Nosso Café da Praça</h2>
            <p className="text-lg mb-4 text-white">
              Uma experiência artesanal que une o aroma intenso dos melhores grãos selecionados com a cremosidade suave de um preparo feito na hora. Cada xícara é um convite para desacelerar e apreciar o momento, trazendo calor e sabor para encontros especiais.
            </p>
          </div>
        </div>
      </div>
      {/* Parte branca da página com texto e imagem lado a lado */}
      <div className="w-full flex flex-col items-center justify-center bg-white py-16">
        <div className="bg-white rounded-xl shadow p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">História e Origem</h3>
            <p className="text-base text-gray-800">
              Tudo começou em uma pequena praça no coração da cidade, onde nosso fundador, Rafael, se reunia com amigos para trocar ideias e compartilhar risadas acompanhadas de um bom café. Inspirado pela energia da comunidade e pelo aroma irresistível dos grãos, ele decidiu transformar aquela paixão em algo maior. Assim nasceu o Café da Praça, em 2015, com o objetivo de levar cafés de qualidade, selecionados com cuidado, para cada pessoa que busca não apenas uma bebida, mas momentos especiais. Desde então, cada xícara que servimos carrega a essência daquele primeiro encontro na praça: acolhimento, sabor e boas memórias.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={cofes6Img}
              alt="História do Café"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Seção Origem dos Grãos na parte branca, lado a lado com imagem */}
      <div className="w-full flex flex-col items-center justify-center bg-white py-16">
        <div className="bg-white rounded-xl shadow p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Origem dos Grãos</h3>
            <p className="text-base text-gray-800">
              Nossos grãos são cuidadosamente selecionados de pequenas plantações certificadas, localizadas em regiões reconhecidas pela qualidade de seu solo e clima ideais para o cultivo do café. Trabalhamos diretamente com agricultores que praticam métodos sustentáveis, respeitando o ciclo natural da planta e promovendo o comércio justo. Cada grão é colhido manualmente no ponto perfeito de maturação, garantindo aroma, sabor e frescor incomparáveis em cada xícara. Assim, além de oferecer um café de excelência, também apoiamos comunidades locais e práticas agrícolas responsáveis.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={cofes7Img}
              alt="Origem dos Grãos"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Seção sobre colheita manual dos grãos */}
      <div className="w-full flex flex-col items-center justify-center bg-white py-16">
        <div className="bg-white rounded-xl shadow p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Colheita Manual</h3>
            <p className="text-base text-gray-800">
              Cada grão é colhido à mão por trabalhadores experientes, que selecionam apenas os frutos totalmente maduros. Esse processo cuidadoso garante que somente os melhores grãos sejam aproveitados, preservando o aroma, o sabor e a textura únicos do café. Cada mão que toca o grão transmite dedicação e respeito pela tradição artesanal, garantindo uma experiência de qualidade em cada xícara que chega até você.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={cofes8Img}
              alt="Colheita Manual"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
            />
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
            <p className="text-sm mt-2">✉️ contato@morangodoamor.com<br /><span className="text-gray-400">Email para orçamentos</span></p>
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
  );
}