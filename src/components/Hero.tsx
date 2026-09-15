import { Camera, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="cta">
      <div id="cta_content">
        <div id="cta_text">
          <span id="cta_badge">Pré-diagnóstico bucal com IA</span>
          <h1 id="cta_title">Uma foto, um alerta, uma chance de evitar dor</h1>
          <p id="cta_subtitle">
            Use a IA para monitorar sua saúde bucal. Tire fotos padronizadas e receba um
            pré-diagnóstico imediato, no conforto de casa.
          </p>

          <div id="btn_pai">
            <button className="btn_default primary" id="btn_pc">
              Quero um sorriso saudável
            </button>
            <button className="btn_default primary" id="btn_mobile">
              Baixar App
            </button>
          </div>
        </div>

        <div id="cta_visual">
          <img
            id="cta_photo"
            src="/Ctaimg5.png"
            alt="Pessoas sorrindo, segurando fotos de sorrisos saudáveis"
          />
          <div id="cta_stat_badge">
            <div className="icon_circle">
              <Camera size={16} />
            </div>
            <div>
              <strong>5 fotos</strong>
              <span>padronizadas por consulta</span>
            </div>
          </div>
          <div id="cta_icon_badge">
            <ShieldCheck size="1em" />
          </div>
        </div>
      </div>

      <div id="cta_seta">
        <a href="#home" aria-label="Rolar para a seção seguinte">
          <ChevronDown className="" />
        </a>
      </div>
    </section>
  );
}
