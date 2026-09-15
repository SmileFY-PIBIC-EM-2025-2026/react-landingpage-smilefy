import { useEffect, useRef } from 'react';
import { Palette, Code2, Server, Atom, Box, Brain, Users } from 'lucide-react';

const milestones = [
  {
    icon: Palette,
    title: '1º semestre — Identidade e protótipo',
    text: 'Identidade visual, protótipo com sete telas no FlutterFlow, primeira versão do site e o primeiro modelo do afastador bucal impresso em 3D.',
  },
  {
    icon: Code2,
    title: 'Migração para Flutter/Dart',
    text: 'O app saiu de uma plataforma low-code para código nativo, ganhando acesso total ao código-fonte e liberdade para implementar novas funcionalidades.',
  },
  {
    icon: Server,
    title: 'API e banco de dados',
    text: 'Back-end em Python com FastAPI integrado a um banco de dados relacional, estruturado de acordo com a Lei Geral de Proteção de Dados (LGPD).',
  },
  {
    icon: Atom,
    title: 'Site institucional em React',
    text: 'A página foi reescrita em componentes reutilizáveis, reduzindo duplicação de código e facilitando futuras manutenções.',
  },
  {
    icon: Box,
    title: 'Afastador bucal refinado com a FOP-UNICAMP',
    text: 'Novas versões impressas e testadas, com ajustes de encaixe, conforto e higienização feitos em parceria com a Faculdade de Odontologia de Piracicaba.',
  },
  {
    icon: Brain,
    title: 'Coleta de imagens e treinamento da IA',
    text: 'Dentistas parceiros da FOP-UNICAMP avaliam e rotulam as imagens capturadas, formando a base para o treinamento do modelo de inteligência artificial.',
  },
  {
    icon: Users,
    title: 'COPA e FECITEC',
    text: 'O SmileFY foi apresentado ao público no Cotil de Portas Abertas e na Feira de Ciências e Tecnologia do Cotil, com demonstrações do app e do afastador.',
  },
];

export default function Timeline() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.3 },
    );

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trajetoria">
      <h2 id="trajetoria_title">A trajetória do projeto</h2>
      <p id="trajetoria_subtitle">
        Do primeiro protótipo à parceria com dentistas da FOP-UNICAMP: como o SmileFY evoluiu
        ao longo da bolsa PIBIC-EM.
      </p>

      <ol id="trajetoria_list">
        {milestones.map((step, i) => (
          <li key={step.title} ref={el => { itemRefs.current[i] = el; }}>
            <div className="trajetoria_marker">
              <step.icon size="1em" />
            </div>
            <div className="trajetoria_content">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
