// ── HAMBURGER MENU ────────────────────────────────────────────────

function toggleMenu() {
  document.querySelector('.menu-links').classList.toggle('open');
  document.querySelector('.hamburger-icon').classList.toggle('open');
}

// ── SKILLS ────────────────────────────────────────────────────────
// To add or remove a skill, edit this array — no HTML changes needed.

const SKILLS = [
  'SQL', 'Java', 'C/C++', 'Git', 'React JS', 'Python',
  'PHP', 'Linux', 'Power BI', 'Embedded Systems', 'ROS',
  'Unity', 'JavaScript', 'HTML', 'CSS', 'Pipe Integrity',
  'MATLAB', 'OpenGL', 'Computer Vision', 'C#', 'RTOS',
  'Computer Networks', 'Power Automate',
];

function renderSkills() {
  document.getElementById('skills-list').innerHTML = SKILLS.map(skill => `
    <article>
      <img src="./assets/checkmark.png" alt="Skill icon" class="icon" />
      <div><h3>${skill}</h3></div>
    </article>
  `).join('');
}

// ── PROJECTS ──────────────────────────────────────────────────────
// To add a project: add an entry to this array.
// - githubUrl: links the Github button
// - moreUrl:   links the More button (usually a YouTube demo)
// - modalId:   (optional) if set, the More button opens a popup modal
//              instead of navigating to moreUrl. The modal must exist
//              in index.html with a matching id.

const PROJECTS = [
  {
    title: 'VR + Haptic Application',
    image: './assets/vr_Cover.png',
    githubUrl: 'https://github.com/NightWng/VR---Haptics-Sim-Application',
    moreUrl: 'https://www.youtube.com/watch?v=9A8gdlkD1Lo',
    // modalId: 'vr_Modal',
  },
  {
    title: 'Know Pros',
    image: './assets/KnowPros_cover.png',
    githubUrl: 'https://github.com/HolstCh/Professional-Forum-Web-Application-',
    moreUrl: 'https://www.youtube.com/watch?v=eAL8OtaBSsg',
    // modalId: 'knowPros_Modal',
  },
  {
    title: 'Reverse Shell',
    image: './assets/rev_shell.png',
    githubUrl: 'https://github.com/NightWng/Reverse-Shell?tab=readme-ov-file',
    moreUrl: 'https://www.youtube.com/watch?v=Jwzf1OpDqZ0',
  },
];

function renderProjects() {
  const container = document.getElementById('projects-list');
  container.innerHTML = PROJECTS.map(p => `
    <div class="details-container color-container">
      <div class="article-container">
        <img src="${p.image}" alt="${p.title}" class="project-img" />
      </div>
      <h2 class="experience-sub-title project-title">${p.title}</h2>
      <div class="btn-container">
        <button class="btn btn-color-2 project-btn" data-url="${p.githubUrl}">Github</button>
        ${p.modalId
          ? `<button class="btn btn-color-2 project-btn" data-modal="${p.modalId}">More</button>`
          : `<button class="btn btn-color-2 project-btn" data-url="${p.moreUrl}">More</button>`
        }
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-url]').forEach(btn => {
    btn.addEventListener('click', () => window.open(btn.dataset.url, '_blank'));
  });

  container.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) openModal(modal);
    });
  });
}

// ── MODALS ────────────────────────────────────────────────────────

function openModal(modal) {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  const video = modal.querySelector('video');
  if (video) video.pause();
}

// Open via timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    const modal = document.getElementById(item.dataset.modal);
    if (modal) openModal(modal);
  });
});

// Close via X button
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
});

// Close via backdrop click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal);
  });
});

// ── INIT ──────────────────────────────────────────────────────────

renderSkills();
renderProjects();
