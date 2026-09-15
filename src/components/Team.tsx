import { useState, useRef, useCallback, useEffect } from 'react';

interface Person {
  name: string;
  displayName: string;
  role: string;
  info: string;
  image: string;
  side?: 'esquerdo';
}

const topRow: Person[] = [
  {
    name: 'danilo',
    displayName: 'Danilo Pereira',
    role: 'Orientador COTIL',
    info: 'Graduado em Ciência da Computação pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP - Rio Claro / SP), Mestre em Engenharia da Computação, diplomas de Doutorado e Pós Doutorado em Neurociências pela Universidade Estadual de Campinas (UNICAMP).',
    image: '/danilo.jpg',
  },
  {
    name: 'vanessa',
    displayName: 'Vanessa Pecorari',
    role: 'Orientadora FOP',
    info: 'Possui graduação em Odontologia pela UNICAMP (2000), mestrado em Clínica Odontológica pela Universidade Estadual de Campinas (2003) e doutorado (2007) em Clínica Odontológica pela mesma instituição. É também bacharel em Estatística pela Universidade Anhembi-Morumbi e possui MBA em Data Science pela USP-ESALQ. Realizou pós-doutorado na FOP/UNICAMP. Sua atuação concentra-se na Bioestatística aplicada à saúde.',
    image: '/vanessa.png',
    side: 'esquerdo',
  },
];

const bottomRow: Person[] = [
  { name: 'julia', displayName: 'Júlia Filippini', role: 'Aluna', info: '', image: '/julia.jpg' },
  { name: 'marina', displayName: 'Marina Coser', role: 'Aluna', info: '', image: '/marina.jpg' },
  {
    name: 'laura',
    displayName: 'Laura Buosi',
    role: 'Aluna',
    info: 'Estudante de Desenvolvimento de Sistemas pelo COTIL-UNICAMP e participante do PIBIC-EM. Possui perfil de liderança e comunicação, com experiências em simulações da ONU, representação de turma, atuação como professora infantil de inglês e participação em projetos de comunicação, incluindo entrevistas em rádio.',
    image: '/laura.jpg',
  },
  {
    name: 'vitor',
    displayName: 'Vitor Moreira',
    role: 'Aluno',
    info: 'Estudante de Desenvolvimento de Sistemas integrado ao Ensino Médio no Colégio Técnico de Limeira COTIL-UNICAMP. Possui experiência e faz estágio na área de dados, usando Power BI.',
    image: '/vitor.jpg',
  },
  { name: 'joao', displayName: 'João Stival', role: 'Aluno', info: '', image: '/joao.jpg' },
  {
    name: 'felipe',
    displayName: 'Felipe de Paula',
    role: 'Aluno',
    info: 'Estudante de Desenvolvimento de Sistemas pelo COTIL-UNICAMP. Atua como desenvolvedor backend Java em sistemas erp, utilizando Python para automação e integração de modelos de IA. Possui experiência em IoT utilizando ESP32 e protocolo MQTT, além de conhecimento prático em refatoração de regras de negócio, arquitetura de servidores Linux (Fedora/Debian), containerização (Docker/Podman) e bancos de dados PostgreSQL.',
    image: '/felipe.png',
  },
  {
    name: 'wesley',
    displayName: "Wesley Sant'Anna",
    role: 'Monitor',
    info: "Estudante de Sistemas de Informação pela Facultade de Tecnologia (FT) da UNICAMP, com forte interesse em ciência de dados, inteligência artificial e desenvolvimento de software. Possui experiência com análise de dados, automação e desenvolvimento web, atuando com ferramentas como Python, C/C++, JavaScript, LangChain e FastAPI. Participa de projetos de iniciação científica e divulgação científica, com foco em machine learning e aplicações de IA integrando iniciativas acadêmicas e de mentoria.",
    image: '/wesley.jpg',
  },
];

interface NoteState {
  person: Person;
  top: number;
  left: number;
}

export default function Team() {
  const [noteState, setNoteState] = useState<NoteState | null>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showNote = useCallback((person: Person, el: HTMLElement) => {
    if (!person.info) return;
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

    setNoteState({ person, top: 0, left: 0 });

    requestAnimationFrame(() => {
      if (!noteRef.current) return;
      const rect = el.getBoundingClientRect();
      const noteWidth = noteRef.current.offsetWidth;
      const padding = 15;
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      let top: number, left: number;

      if (window.innerWidth > 1024) {
        top = rect.top + scrollY;
        if (person.side === 'esquerdo') {
          left = rect.left + scrollX - noteWidth - padding;
        } else {
          left = rect.right + scrollX + padding;
        }
      } else {
        top = rect.bottom + scrollY + padding;
        left = window.innerWidth / 2 - noteWidth / 2;
        if (left < 10) left = 10;
        if (left + noteWidth > window.innerWidth) left = window.innerWidth - noteWidth - 10;
      }

      setNoteState({ person, top, left });
    });
  }, []);

  const scheduleHide = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => setNoteState(null), 200);
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  }, []);

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('.photo-item') && !target.closest('#profile_note')) {
        setNoteState(null);
      }
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const renderPhotoItem = (person: Person) => (
    <div
      key={person.name}
      className="photo-item"
      onMouseEnter={e => showNote(person, e.currentTarget)}
      onMouseLeave={scheduleHide}
      onClick={e => { e.stopPropagation(); showNote(person, e.currentTarget); }}
    >
      <img className="circular-img" src={person.image} alt={person.displayName} />
      <p className="description">
        <strong>{person.displayName}</strong>
        {person.role}
      </p>
    </div>
  );

  return (
    <section id="quem">
      <h1 id="quem_title">Quem somos?</h1>

      <div className="flex-gallery top-row">
        {topRow.map(renderPhotoItem)}
      </div>

      <div className="flex-gallery">
        {bottomRow.map(renderPhotoItem)}
      </div>

      {noteState && (
        <div
          id="profile_note"
          ref={noteRef}
          className="show"
          style={{ top: noteState.top, left: noteState.left }}
          onMouseEnter={cancelHide}
          onMouseLeave={scheduleHide}
          onClick={e => e.stopPropagation()}
        >
          <div className="note-content">
            <h3>{noteState.person.name === 'vanessa' ? 'Vanessa Gallego Arias Pecorari' : noteState.person.displayName}</h3>
            <span>{noteState.person.role}</span>
            <p>{noteState.person.info}</p>
          </div>
        </div>
      )}
    </section>
  );
}
