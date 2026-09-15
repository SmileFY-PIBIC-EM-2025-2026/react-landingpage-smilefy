import { Check } from 'lucide-react';

export default function Download() {
  return (
    <section id="download">
      <small id="smalld">Aplicativo Mobile</small>
      <h1>Baixe o SmileFY</h1>
      <p id="pd">
        Em qualquer lugar, a qualquer hora. Com o SmileFY, você tem acesso rápido,
        simples e inteligente ao seu pré-diagnóstico bucal.
      </p>

      <div id="celular_flex">
        <div id="img_flex">
          <iframe
            src="https://smile-f-y2-56ykt7.flutterflow.app"
            id="celulard"
            title="SmileFY App"
          />
        </div>

        <div id="botao_flex">
          <h2>Tudo na palma da mão</h2>
          <p>
            O SmileFY combina tecnologia de inteligência artificial com uma interface
            amigável para oferecer pré-diagnósticos bucais precisos e acessíveis.
          </p>
          <div id="listad">
            <ul>
              <li><Check size={16} /> Análise em segundos com IA avançada</li>
              <li><Check size={16} /> Interface intuitiva e fácil de usar</li>
              <li><Check size={16} /> Resultados salvos automaticamente</li>
              <li><Check size={16} /> Compatível com o padronizador SmileFY</li>
            </ul>
          </div>
          <div id="btnd">
            <button className="btn_default secundary">Baixe o aplicativo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
