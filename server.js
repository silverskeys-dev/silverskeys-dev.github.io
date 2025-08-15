import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/pedido', (req, res) => {
  const { pacote, nome, whatsapp, email } = req.body;
  // Aqui você pode salvar no banco, enviar email, etc.
  console.log('Novo pedido:', { pacote, nome, whatsapp, email });
  res.json({ success: true, message: 'Pedido recebido com sucesso!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// ...dentro do seu componente React...
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

// ...no JSX do formulário...
<form onSubmit={handleSubmit}>
  {/* campos do formulário */}
  <input name="pacote" value={form.pacote} onChange={handleChange} required />
  <input name="nome" value={form.nome} onChange={handleChange} required />
  <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required />
  <input name="email" value={form.email} onChange={handleChange} />
  <button type="submit">Enviar Pedido</button>
</form>