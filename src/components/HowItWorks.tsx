import { Box, Smartphone, Camera, UploadCloud, ClipboardPlus } from 'lucide-react';

const steps = [
  {
    icon: Box,
    title: 'Encaixe o afastador',
    text: 'Acople o afastador bucal, produzido por impressão 3D, ao seu smartphone. Ele mantém a distância e o ângulo da câmera constantes em relação à arcada dentária.',
  },
  {
    icon: Smartphone,
    title: 'Abra o SmileFY',
    text: 'O aplicativo guia a sequência de captura e mostra na tela exatamente qual foto tirar a cada passo.',
  },
  {
    icon: Camera,
    title: 'Tire as 5 fotos guiadas',
    text: 'Frontal, lateral direita, lateral esquerda, oclusal superior e oclusal inferior — você confirma cada imagem antes de seguir para a próxima.',
  },
  {
    icon: UploadCloud,
    title: 'Envio seguro',
    text: 'As imagens são organizadas por paciente e consulta e enviadas para um banco de dados estruturado de acordo com a LGPD.',
  },
  {
    icon: ClipboardPlus,
    title: 'Receba o pré-diagnóstico',
    text: 'Com o apoio de um modelo de inteligência artificial, treinado com imagens avaliadas por dentistas parceiros, você recebe um pré-diagnóstico de cárie e gengivite.',
  },
];

export default function HowItWorks() {
  return (
    <section id="modo_de_uso">
      <h2 id="modo_title">Como usar o SmileFY</h2>
      <div id="modo_flex">
        {steps.map((step, i) => (
          <article key={step.title}>
            <span className="modo_step_number">{i + 1}</span>
            <step.icon />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
