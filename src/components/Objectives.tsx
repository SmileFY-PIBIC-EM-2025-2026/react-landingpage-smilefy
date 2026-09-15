import { useEffect, useRef } from 'react';
import { Eye, Smartphone, ShieldCheck, HeartHandshake } from 'lucide-react';

const cards = [
  {
    icon: Eye,
    title: 'Descobre problemas invisíveis antes que virem urgência',
    text: 'Cáries e inflamações começam pequenas, silenciosas, escondidas. Com o SmileFY, você vê o perigo antes que ele vire dor, gasto e desespero. É o tipo de alerta que pode salvar seu sorriso.',
  },
  {
    icon: Smartphone,
    title: 'Transforma seu celular em um detector de risco',
    text: 'Nunca mais dependa só do espelho. O app analisa seus dentes com precisão e te mostra o que está errado — mesmo quando você acha que está tudo bem. É como ter um check-up sempre à mão.',
  },
  {
    icon: ShieldCheck,
    title: 'Te protege do pior no momento certo',
    text: 'Quando algo começa a dar errado na sua boca, o SmileFY identifica na hora. Ele te avisa antes que vire dor insuportável ou um tratamento caro que você poderia ter evitado.',
  },
  {
    icon: HeartHandshake,
    title: 'Te dá poder sobre a sua própria saúde',
    text: 'Você não precisa esperar o problema estourar. Com um pré-diagnóstico imediato, você age cedo — e se livra de futuras dores, sangramentos e emergências. Baixar o SmileFY é escolher não sofrer depois.',
  },
];

export default function Objectives() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

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
      { threshold: 0.2 },
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        (card as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="obj">
      <h2 id="obj_title">Seu sorriso merece mais do que sorte — merece o SmileFY</h2>
      <div id="obj_flex">
        {cards.map((card, i) => (
          <article key={i} ref={el => { cardRefs.current[i] = el; }}>
            <card.icon />
            <h3>{card.title}</h3>
            {i !== 3 && <p>{card.text}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
