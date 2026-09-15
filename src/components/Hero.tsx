export default function Hero() {
  return (
    <section id="cta">
      <div id="cta_content">
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

        <div id="cta_seta">
          <a href="#home">
            <i className="fa-solid fa-chevron-down" />
          </a>
        </div>
      </div>
    </section>
  );
}
