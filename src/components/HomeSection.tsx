export default function HomeSection() {
  return (
    <section id="home">
      <h1 id="home_title">O que é o SmileFY?</h1>

      <div id="home_flex">
        <p>
          O SmileFY é um projeto estudantil desenvolvido para facilitar o acesso à saúde
          bucal por meio de um aplicativo inteligente. Com a ajuda de um adaptador bucal
          simples acoplado à câmera do celular, o usuário tira fotos intraorais
          padronizadas que alimentam um banco de dados acadêmico inovador. Essas imagens
          permitem treinar uma IA capaz de realizar um pré-diagnóstico rápido, prático e
          acessível de doenças bucais — começando por cárie e gengivite, problemas que
          podem evoluir silenciosamente.{' '}
          <br />
          <br />
          Este não é apenas um app: é uma ferramenta essencial de prevenção. Com ele,
          você identifica riscos antes que se tornem problemas graves, economiza tempo,
          evita dor e protege sua saúde de forma imediata. Em um mundo onde doenças
          bucais avançam sem sintomas, contar com um pré-diagnóstico tão simples pode
          literalmente fazer a diferença para o seu bem-estar. Se você se importa com a
          sua saúde, você PRECISA baixar o SmileFY.
        </p>

        <model-viewer
          src="/ProjetoFOP.glb"
          alt="Modelo 3D do adaptador bucal"
          id="home_fusion"
          camera-controls
          auto-rotate
          shadow-intensity="1"
        >
          Padronizador de fotos:
        </model-viewer>
      </div>
    </section>
  );
}
