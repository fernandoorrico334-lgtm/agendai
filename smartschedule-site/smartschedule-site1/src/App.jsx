import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    segmento: "",
  });

  const handleSubmit = () => {
    const mensagem = `Olá! Vim pela AgendAI.%0A%0A` +
      `Nome: ${form.nome}%0A` +
      `Empresa: ${form.empresa}%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `Segmento: ${form.segmento}`;

    window.open(`https://wa.me/5562999999999?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white px-6 py-10">
      
      {/* HERO */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Seus leads chegam. <br />
            A AgendAI responde, qualifica e agenda automaticamente. <br />
            <span className="text-green-400">Você só fecha.</span>
          </h1>

          <p className="text-lg text-gray-300 mt-6">
            Pare de perder clientes por demora no atendimento. 
            A AgendAI responde na hora, organiza tudo e transforma conversa em agendamento confirmado.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => document.getElementById("form").scrollIntoView({ behavior: "smooth" })}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
            >
              Quero automatizar meu atendimento
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg">
              Ver demonstração
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            ✔ Resposta imediata <br />
            ✔ Agenda automática <br />
            ✔ Funciona 24h por dia
          </div>
        </div>

        {/* DEMO */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700">
          <h3 className="text-green-400 mb-4">Demonstração real</h3>

          <p><strong>Cliente:</strong> Fernando</p>
          <p><strong>Status:</strong> <span className="text-green-400">agendado</span></p>

          <div className="mt-4 bg-[#0b0f19] p-4 rounded">
            Cliente interessado em avaliação com alta intenção de agendamento.
          </div>

          <div className="mt-4 bg-green-900/30 p-4 rounded text-green-300">
            Olá! Temos horário às 09:00 disponível. Posso confirmar agora?
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold">
          Você está perdendo clientes todos os dias sem perceber
        </h2>

        <p className="text-gray-400 mt-4">
          Leads chegam e você demora pra responder. Quando responde, já fecharam com outro.
        </p>
      </div>

      {/* SOLUÇÃO */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        {[
          "Responde na hora",
          "Qualifica automaticamente",
          "Agenda sem esforço"
        ].map((item, i) => (
          <div key={i} className="bg-[#111827] p-6 rounded-lg border border-gray-700">
            {item}
          </div>
        ))}
      </div>

      {/* FORM */}
      <div id="form" className="max-w-md mx-auto mt-20 bg-white text-black p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Quero automatizar agora</h3>

        <input placeholder="Seu nome" className="w-full mb-3 p-2 border" onChange={e => setForm({...form, nome: e.target.value})}/>
        <input placeholder="Empresa" className="w-full mb-3 p-2 border" onChange={e => setForm({...form, empresa: e.target.value})}/>
        <input placeholder="WhatsApp" className="w-full mb-3 p-2 border" onChange={e => setForm({...form, whatsapp: e.target.value})}/>
        <input placeholder="Segmento" className="w-full mb-3 p-2 border" onChange={e => setForm({...form, segmento: e.target.value})}/>

        <button onClick={handleSubmit} className="w-full bg-black text-white py-2 mt-3 rounded">
          Quero mais clientes
        </button>
      </div>

    </div>
  );
}