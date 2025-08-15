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