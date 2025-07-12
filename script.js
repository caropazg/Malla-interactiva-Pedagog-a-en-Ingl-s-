const courses = {
  // 1° Semestre
  "Lengua Inglesa Integrada 1": {
    desc: "Primer nivel de inglés integrado para futuros/as docentes.",
    prereq: "Ninguno"
  },
  "Introducción a la Educación": {
    desc: "Perspectivas básicas y fundamentos de la educación.",
    prereq: "Ninguno"
  },
  "Introducción a la reflexión filosófica": {
    desc: "Pensamiento crítico y filosófico aplicado a la educación.",
    prereq: "Ninguno"
  },
  "Taller de Pensamiento Matemático": {
    desc: "Desarrollo de habilidades matemáticas básicas.",
    prereq: "Ninguno"
  },
  "Expresión Escrita": {
    desc: "Técnicas y práctica de la escritura.",
    prereq: "Ninguno"
  },
  // 2° Semestre
  "Lengua Inglesa Integrada 2": {
    desc: "Segundo nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 1"
  },
  "Pensamiento Sociológico y Educacional": {
    desc: "Análisis de fenómenos educativos desde la sociología.",
    prereq: "Ninguno"
  },
  "Historia de la Educación en Chile y Latinoamérica": {
    desc: "Historia y contexto de la educación en la región.",
    prereq: "Ninguno"
  },
  "Pensamiento Crítico": {
    desc: "Profundización en habilidades de pensamiento crítico.",
    prereq: "Ninguno"
  },
  "OFG": {
    desc: "Optativo de Formación General.",
    prereq: "Ninguno"
  },
  "OFT": {
    desc: "Optativo de Formación Transversal.",
    prereq: "Ninguno"
  },
  // 3° Semestre
  "Lengua Inglesa Integrada 3": {
    desc: "Tercer nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 2"
  },
  "Fundamentos Lingüísticos para la Enseñanza del Inglés 1": {
    desc: "Bases lingüísticas para la enseñanza del idioma inglés.",
    prereq: "Lengua Inglesa Integrada 2"
  },
  "Realidad Educacional Chilena": {
    desc: "Análisis del sistema educativo chileno.",
    prereq: "Ninguno"
  },
  "Educación Inclusiva": {
    desc: "Estrategias para la inclusión educativa.",
    prereq: "Ninguno"
  },
  "OFG 2": {
    desc: "Optativo de Formación General.",
    prereq: "Ninguno"
  },
  "OFT 2": {
    desc: "Optativo de Formación Transversal.",
    prereq: "Ninguno"
  },
  // 4° Semestre
  "Lengua Inglesa Integrada 4": {
    desc: "Cuarto nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 3"
  },
  "Fundamentos Lingüísticos para la Enseñanza del Inglés 2": {
    desc: "Profundización de fundamentos lingüísticos para la enseñanza del inglés.",
    prereq: "Fundamentos Lingüísticos para la Enseñanza del Inglés 1"
  },
  "Psicología Educacional": {
    desc: "Principios de psicología aplicados a la educación.",
    prereq: "Ninguno"
  },
  "Taller de Práctica Temprana 1": {
    desc: "Primera experiencia práctica en contexto educativo.",
    prereq: "Introducción a la Educación"
  },
  "OFT 3": {
    desc: "Optativo de Formación Transversal.",
    prereq: "Ninguno"
  },
  // 5° Semestre
  "Lengua Inglesa Integrada 5": {
    desc: "Quinto nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 4"
  },
  "Literatura para la Clase de Inglés": {
    desc: "Estrategias y recursos literarios para la clase de inglés.",
    prereq: "Lengua Inglesa Integrada 4"
  },
  "Psicología del Aprendizaje 1": {
    desc: "Procesos psicológicos del aprendizaje.",
    prereq: "Psicología Educacional"
  },
  "Gestión de Aulas para la Enseñanza del Inglés": {
    desc: "Gestión y liderazgo en el aula de inglés.",
    prereq: "Lengua Inglesa Integrada 2"
  },
  "Lingüística Aplicada a la Enseñanza del Inglés": {
    desc: "Aplicación de la lingüística en la enseñanza del inglés.",
    prereq: "Fundamentos Lingüísticos para la Enseñanza del Inglés 2"
  },
  "Taller de Práctica Temprana 2": {
    desc: "Segunda experiencia práctica en contexto educativo.",
    prereq: "Taller de Práctica Temprana 1"
  },
  // 6° Semestre
  "Lengua Inglesa Integrada 6": {
    desc: "Sexto nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 5"
  },
  "Psicología del Aprendizaje 2": {
    desc: "Profundización en procesos psicológicos del aprendizaje.",
    prereq: "Psicología Educacional"
  },
  "El Currículum de Inglés para la Planificación de Clases": {
    desc: "Diseño curricular para la enseñanza de inglés.",
    prereq: "Lingüística Aplicada a la Enseñanza del Inglés"
  },
  "Estrategias y Habilidades para la Enseñanza del Inglés": {
    desc: "Estrategias innovadoras para la enseñanza del inglés.",
    prereq: "Lingüística Aplicada a la Enseñanza del Inglés, Lengua Inglesa Integrada 4"
  },
  "ELAB y Taller de Reflexión I": {
    desc: "Espacio de reflexión sobre la práctica docente.",
    prereq: "Taller de Práctica Temprana 2"
  },
  "Ética Profesional": {
    desc: "Ética y responsabilidad profesional docente.",
    prereq: "Ninguno"
  },
  // 7° Semestre
  "Lengua Inglesa Integrada 7": {
    desc: "Séptimo nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 6"
  },
  "Evaluación para el Aprendizaje del Inglés": {
    desc: "Evaluación formativa y sumativa en inglés.",
    prereq: "El Currículum de Inglés para la Planificación de Clases"
  },
  "Selección de Materiales para la Enseñanza del Inglés": {
    desc: "Selección y uso de materiales educativos en inglés.",
    prereq: "Estrategias y Habilidades para la Enseñanza del Inglés, El Currículum de Inglés para la Planificación de Clases"
  },
  "ELAB y Taller de Reflexión II": {
    desc: "Segundo espacio de reflexión sobre la práctica docente.",
    prereq: "ELAB y Taller de Reflexión I, Estrategias y Habilidades para la Enseñanza del Inglés, El Currículum de Inglés para la Planificación de Clases"
  },
  "Formación Complementaria 1": {
    desc: "Ramos de formación complementaria.",
    prereq: "Ninguno"
  },
  // 8° Semestre
  "Lengua Inglesa Integrada 8": {
    desc: "Octavo nivel de inglés integrado.",
    prereq: "Lengua Inglesa Integrada 7"
  },
  "Literatura para la Enseñanza del Inglés": {
    desc: "Profundización en recursos literarios para enseñar inglés.",
    prereq: "Lingüística Aplicada a la Enseñanza del Inglés"
  },
  "ELAB y Taller de Reflexión III": {
    desc: "Tercer espacio de reflexión sobre la práctica docente.",
    prereq: "ELAB y Taller de Reflexión II"
  },
  "Formación Complementaria 2": {
    desc: "Ramos de formación complementaria.",
    prereq: "Ninguno"
  },
  "Inglés Académico I": {
    desc: "Desarrollo de habilidades de inglés académico.",
    prereq: "Lengua Inglesa Integrada 8, Literatura para la Enseñanza del Inglés, ELAB y Taller de Reflexión III"
  },
  // 9° Semestre
  "Seminario de Grado": {
    desc: "Seminario para la preparación de la titulación.",
    prereq: "Lengua Inglesa Integrada 8, Literatura para la Enseñanza del Inglés, ELAB y Taller de Reflexión III"
  },
  "ELAB y Taller de Reflexión IV": {
    desc: "Cuarto espacio de reflexión sobre la práctica docente.",
    prereq: "ELAB y Taller de Reflexión III, Lengua Inglesa Integrada 8"
  },
  "Formación Complementaria 3": {
    desc: "Ramos de formación complementaria.",
    prereq: "Ninguno"
  },
  "Inglés Académico II": {
    desc: "Perfeccionamiento en inglés académico.",
    prereq: "Inglés Académico I"
  },
  // 10° Semestre
  "Taller de Titulación": {
    desc: "Trabajo final para obtener el título profesional.",
    prereq: "Inglés Académico I, ELAB y Taller de Reflexión IV, Seminario de Grado"
  },
  "ELAB y Práctica Profesional": {
    desc: "Práctica docente profesional.",
    prereq: "ELAB y Taller de Reflexión IV"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.semesters-container');
  const modal = document.getElementById('course-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalPrereq = document.getElementById('modal-prerequisite-text');
  const closeBtn = document.getElementById('close-modal');

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.course-card');
    if (card) {
      const name = card.getAttribute('data-course');
      const data = courses[name];
      modalTitle.textContent = name;
      if (data) {
        modalDescription.textContent = data.desc;
        modalPrereq.textContent = data.prereq;
      } else {
        modalDescription.textContent = "Sin información.";
        modalPrereq.textContent = "Ninguno";
      }
      modal.style.display = 'flex';
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
