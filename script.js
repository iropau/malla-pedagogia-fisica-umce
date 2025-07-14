const ramos = [
  { id: '1.1', nombre: 'Fortalecimiento de Habilidades de Entrada', semestre: 1, creditos: 3, prereqs: [] },
  { id: '1.2', nombre: 'Pedagogía e Identidad Profesional Docente', semestre: 1, creditos: 4, prereqs: [] },
  { id: '1.3', nombre: 'Biología', semestre: 1, creditos: 5, prereqs: [] },
  { id: '1.4', nombre: 'Matemática', semestre: 1, creditos: 6, prereqs: [] },
  { id: '1.5', nombre: 'Física', semestre: 1, creditos: 6, prereqs: [] },
  { id: '1.6', nombre: 'Química', semestre: 1, creditos: 6, prereqs: [] },

  { id: '2.1', nombre: 'Práctica I: Observación', semestre: 2, creditos: 5, prereqs: [] },
  { id: '2.2', nombre: 'Sociología y Psicología de la Educación', semestre: 2, creditos: 5, prereqs: ['1.1', '1.2'] },
  { id: '2.3', nombre: 'Informática Aplicada', semestre: 2, creditos: 3, prereqs: [] },
  { id: '2.4', nombre: 'Métodos Matemáticos de la Física I', semestre: 2, creditos: 5, prereqs: ['1.4', '1.5'] },
  { id: '2.5', nombre: 'Mecánica', semestre: 2, creditos: 6, prereqs: ['1.5'] },
  { id: '2.6', nombre: 'Física Experimental I', semestre: 2, creditos: 6, prereqs: ['1.4', '1.5'] },

  { id: '3.1', nombre: 'Segundo Idioma I', semestre: 3, creditos: 4, prereqs: [] },
  { id: '3.2', nombre: 'Psicología del Desarrollo y del Aprendizaje', semestre: 3, creditos: 5, prereqs: [] },
  { id: '3.3', nombre: 'Electivo I', semestre: 3, creditos: 2, prereqs: ['1.1','1.2','1.3','1.4','1.5','1.6','2.1','2.2','2.3','2.4','2.5','2.6'] },
  { id: '3.4', nombre: 'Métodos Matemáticos de la Física II', semestre: 3, creditos: 5, prereqs: ['2.4'] },
  { id: '3.5', nombre: 'Termodinámica', semestre: 3, creditos: 6, prereqs: ['2.4','2.5'] },
  { id: '3.6', nombre: 'Ondas y Acústica', semestre: 3, creditos: 8, prereqs: ['2.4','2.5'] },

  { id: '4.1', nombre: 'Práctica II', semestre: 4, creditos: 4, prereqs: ['1.1','1.2','1.3','1.4','1.5','1.6','2.1','2.2','2.3','2.4','2.5','2.6','3.2','3.3','3.4','3.5','3.6'] },
  { id: '4.2', nombre: 'Segundo Idioma II', semestre: 4, creditos: 4, prereqs: ['3.1'] },
  { id: '4.3', nombre: 'Modelos y Enfoques Educacionales', semestre: 4, creditos: 4, prereqs: ['3.2'] },
  { id: '4.4', nombre: 'Tecnología y Lenguajes de Programación', semestre: 4, creditos: 3, prereqs: ['2.3'] },
  { id: '4.5', nombre: 'Electromagnetismo I', semestre: 4, creditos: 6, prereqs: ['2.5','3.4'] },
  { id: '4.6', nombre: 'Física de Sólidos y Fluidos', semestre: 4, creditos: 4, prereqs: ['2.5','3.4'] },
  { id: '4.7', nombre: 'Física Experimental II', semestre: 4, creditos: 5, prereqs: ['2.6','3.5','3.6'] },

  { id: '5.1', nombre: 'Didáctica de las Ciencias', semestre: 5, creditos: 4, prereqs: ['4.1'] },
  { id: '5.2', nombre: 'Segundo Idioma III', semestre: 5, creditos: 4, prereqs: ['4.2'] },
  { id: '5.3', nombre: 'Políticas Educacionales', semestre: 5, creditos: 4, prereqs: ['4.3'] },
  { id: '5.4', nombre: 'Electromagnetismo II', semestre: 5, creditos: 4, prereqs: ['3.6','4.5'] },
  { id: '5.5', nombre: 'Óptica', semestre: 5, creditos: 5, prereqs: ['3.6'] },
  { id: '5.6', nombre: 'Ciencias de la Tierra', semestre: 5, creditos: 5, prereqs: ['1.3','1.6','3.5'] },
  { id: '5.7', nombre: 'Mención I', semestre: 5, creditos: 5, prereqs: ['1.1','1.2','1.3','1.4','1.5','1.6','2.1','2.2','2.3','2.4','2.5','2.6','3.2','3.3','3.4','3.5','3.6','4.1','4.3','4.4','4.5','4.6','4.7'] },

  { id: '6.1', nombre: 'Práctica III', semestre: 6, creditos: 5, prereqs: ['5.7'] },
  { id: '6.2', nombre: 'Curriculum y Evaluación Educacional', semestre: 6, creditos: 5, prereqs: ['5.3'] },
  { id: '6.3', nombre: 'Electivo II', semestre: 6, creditos: 2, prereqs: ['5.7'] },
  { id: '6.4', nombre: 'Relatividad', semestre: 6, creditos: 4, prereqs: ['5.4','5.5'] },
  { id: '6.5', nombre: 'Física Cuántica', semestre: 6, creditos: 4, prereqs: ['5.4'] },
  { id: '6.6', nombre: 'Física Experimental III', semestre: 6, creditos: 4, prereqs: ['4.7','5.4','5.5'] },
  { id: '6.7', nombre: 'Mención II', semestre: 6, creditos: 6, prereqs: ['5.7'] },

  { id: '7.1', nombre: 'Didáctica de la Física', semestre: 7, creditos: 5, prereqs: ['5.1','5.4','5.5'] },
  { id: '7.2', nombre: 'Gestión de Proyectos Educativos e Inclusión', semestre: 7, creditos: 6, prereqs: ['6.2'] },
  { id: '7.3', nombre: 'Síntesis Contexto Educación', semestre: 7, creditos: 3, prereqs: ['6.1','6.2'] },
  { id: '7.4', nombre: 'Estructura de la Materia', semestre: 7, creditos: 4, prereqs: ['6.4','6.5','6.6'] },
  { id: '7.5', nombre: 'Astronomía y Astrofísica', semestre: 7, creditos: 4, prereqs: ['6.4'] },
  { id: '7.6', nombre: 'Metodología Investigación', semestre: 7, creditos: 3, prereqs: ['6.7'] },
  { id: '7.7', nombre: 'Mención III', semestre: 7, creditos: 5, prereqs: ['6.7'] },

  { id: '8.1', nombre: 'Práctica IV', semestre: 8, creditos: 5, prereqs: ['7.1','7.2','7.3','7.4','7.5','7.6','7.7'] },
  { id: '8.2', nombre: 'Proyecto Didáctico', semestre: 8, creditos: 4, prereqs: ['7.1','7.2','7.6'] },
  { id: '8.3', nombre: 'Orientación y Convivencia Educacional', semestre: 8, creditos: 4, prereqs: ['7.2'] },
  { id: '8.4', nombre: 'Electivo III', semestre: 8, creditos: 3, prereqs: ['7.7'] },
  { id: '8.5', nombre: 'Historia y Filosofía de las Ciencias', semestre: 8, creditos: 4, prereqs: ['7.4','7.5'] },
  { id: '8.6', nombre: 'Experimental IV', semestre: 8, creditos: 4, prereqs: ['6.7','7.4','7.5'] },
  { id: '8.7', nombre: 'Mención IV', semestre: 8, creditos: 6, prereqs: ['7.7'] },

  { id: '9.1', nombre: 'Práctica Profesional', semestre: 9, creditos: 16, prereqs: ['8.1','8.2','8.3','8.4','8.5','8.6','8.7'] },
  { id: '9.2', nombre: 'Seminario de Práctica Final', semestre: 9, creditos: 6, prereqs: ['9.1'] },

  { id: '10.1', nombre: 'Examen de Título', semestre: 10, creditos: 30, prereqs: ['9.1','9.2'] },
];

const state = {};
const container = document.getElementById('malla');

function createMalla() {
  const semestres = [...new Set(ramos.map(r => r.semestre))];
  
  // Crear contenedor flexible para los semestres
  const mallaContainer = document.createElement('div');
  mallaContainer.className = 'malla-container';
  container.appendChild(mallaContainer);

  semestres.forEach(sem => {
    const semDiv = document.createElement('div');
    semDiv.className = 'semester';
    semDiv.innerHTML = `<h2>Semestre ${sem}</h2>`;

    const grid = document.createElement('div');
    grid.className = 'course-grid';

    ramos.filter(r => r.semestre === sem).forEach(r => {
      const card = document.createElement('div');
      card.className = 'course locked';
      card.id = r.id;
      card.innerHTML = `
        <strong>${r.nombre}</strong>
        <div class="credits">${r.creditos} créditos</div>
      `;
      card.addEventListener('click', () => toggleRamo(r.id));
      grid.appendChild(card);
    });

    semDiv.appendChild(grid);
    mallaContainer.appendChild(semDiv);
  });

  updateUI();
}

function toggleRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  
  // 1. Validación de prerrequisitos
  const prereqsFaltantes = ramo.prereqs.filter(pr => !state[pr]);
  
  if (prereqsFaltantes.length > 0 && !state[id]) {
    // Mostrar nombres de ramos faltantes
    const nombresFaltantes = prereqsFaltantes.map(id => {
      const r = ramos.find(item => item.id === id);
      return `${r.nombre} (${id})`;
    }).join("\n• ");
    
    alert(`❌ No puedes tomar "${ramo.nombre}"\n\nFaltan estos prerrequisitos:\n• ${nombresFaltantes}`);
    return;
  }

  // 2. Validación de deselección (si ya está completado)
  if (state[id]) {
    const ramosDependientes = ramos.filter(r => 
      r.prereqs.includes(id) && state[r.id]
    );
    
    if (ramosDependientes.length > 0) {
      const nombresDependientes = ramosDependientes.map(r => 
        `${r.nombre} (${r.id})`
      ).join("\n• ");
      
      alert(`⚠️ No puedes deseleccionar "${ramo.nombre}"\n\nEs requisito de:\n• ${nombresDependientes}`);
      return;
    }
  }

  // 3. Cambiar estado si pasó las validaciones
  state[id] = !state[id];
  updateUI();
  // Nueva línea para guardar:
  localStorage.setItem('mallaState', JSON.stringify(state));
}

function updateUI() {
  ramos.forEach(r => {
    const card = document.getElementById(r.id);
    const passed = state[r.id];
    const unlocked = r.prereqs.every(pr => state[pr]);

    card.classList.remove('completed', 'locked');
    if (passed) {
      card.classList.add('completed');
    } else if (!unlocked && r.prereqs.length > 0) {
      card.classList.add('locked');
    }
  });
}

window.onload = function() {
  // Cargar estado guardado
  const savedState = localStorage.getItem('mallaState');
  if (savedState) {
    Object.assign(state, JSON.parse(savedState));
  }
  
  createMalla();
  updateUI(); // Asegurar que la UI refleje el estado cargado
};
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('¿Estás seguro de querer borrar todo tu progreso?')) {
    localStorage.removeItem('mallaState'); // Borra los datos guardados
    state = {}; // Resetea el estado en memoria
    updateUI(); // Actualiza la interfaz
    alert('Progreso reiniciado correctamente');
  }
});
