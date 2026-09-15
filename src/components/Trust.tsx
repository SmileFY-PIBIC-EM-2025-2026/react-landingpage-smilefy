import { Smile, ShieldHalf, Printer } from 'lucide-react';

const pillars = [
  {
    icon: Smile,
    title: 'Parceria científica com a FOP-UNICAMP',
    text: 'Dentistas da Faculdade de Odontologia de Piracicaba avaliam e rotulam cada imagem coletada, servindo de referência para o treinamento do modelo de inteligência artificial.',
  },
  {
    icon: ShieldHalf,
    title: 'Privacidade e LGPD',
    text: 'O tratamento dos dados segue os princípios da Lei Geral de Proteção de Dados: coleta limitada ao necessário, acesso restrito a profissionais autenticados e vínculo com o termo de consentimento do paciente.',
  },
  {
    icon: Printer,
    title: 'Solução de baixo custo',
    text: 'O afastador bucal é impresso em 3D e acoplado ao próprio smartphone do paciente, dispensando equipamentos odontológicos proprietários e mantendo o projeto acessível.',
  },
];

export default function Trust() {
  return (
    <section id="confianca">
      <h2 id="confianca_title">Ciência, ética e acessibilidade</h2>
      <div id="confianca_flex">
        {pillars.map(pillar => (
          <article key={pillar.title}>
            <pillar.icon />
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
