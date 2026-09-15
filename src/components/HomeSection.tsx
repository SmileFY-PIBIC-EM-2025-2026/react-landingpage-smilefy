import { Stethoscope } from 'lucide-react';
import { CarieIcon, GengiviteIcon } from './icons/DiseaseIcons';

export default function HomeSection() {
  return (
    <section id="home">
      <h1 id="home_title">O que é o SmileFY?</h1>

      <div id="home_bento">
        <div id="home_text_card">
          <p>
            O SmileFY é um projeto estudantil desenvolvido para facilitar o acesso à saúde
            bucal por meio de um aplicativo inteligente. Com a ajuda de um adaptador bucal
            simples acoplado à câmera do celular, o usuário tira fotos intraorais
            padronizadas que alimentam um banco de dados acadêmico inovador. Essas imagens
            permitem treinar uma IA capaz de realizar um pré-diagnóstico rápido, prático e
            acessível de doenças bucais — começando por cárie e gengivite, problemas que
            podem evoluir silenciosamente.
          </p>
          <p>
            Este não é apenas um app: é uma ferramenta essencial de prevenção. Com ele,
            você identifica riscos antes que se tornem problemas graves, economiza tempo,
            evita dor e protege sua saúde de forma imediata.
          </p>
          <div id="home_tag">
            <div className="icon_circle">
              <Stethoscope size={14} />
            </div>
            <span>Desenvolvido com dentistas da FOP-UNICAMP</span>
          </div>
        </div>

        <div id="home_stat_card">
          <span id="home_stat_number">2</span>
          <span id="home_stat_label">doenças bucais rastreadas</span>
          <div id="home_stat_icons">
            <div className="disease_badge">
              <div className="disease_badge_icon">
                <CarieIcon />
              </div>
              <span>Cárie</span>
            </div>
            <div className="disease_badge">
              <div className="disease_badge_icon">
                <GengiviteIcon />
              </div>
              <span>Gengivite</span>
            </div>
          </div>
        </div>

        <div id="home_model_card">
          <model-viewer
            src="/ProjetoFOP.glb"
            alt="Modelo 3D do adaptador bucal"
            camera-controls
            auto-rotate
            shadow-intensity="1"
          >
            Padronizador de fotos:
          </model-viewer>
        </div>
      </div>
    </section>
  );
}
