/* ═══════════════════════════════════════════════
   DICIONÁRIO DE TRADUÇÕES - PORTUGUÊS | INGLÊS | ESPANHOL
   Este objeto contém todas as strings de texto do site em três idiomas.
   Cada idioma tem chaves que correspondem aos elementos HTML com data-key.
═══════════════════════════════════════════════ */
const T={
  pt:{
    nav_home:'Início',nav_about:'Sobre',nav_skills:'Habilidades',nav_projects:'Projetos',nav_contact:'Contato',
    hero_available:'Disponível para freelance',
    hero_line1:'Olá, sou',hero_line3:'Dev Frontend',
    hero_subtitle:'Transformando ideias em experiências digitais poderosas. Apaixonado por interfaces limpas, código eficiente e soluções que fazem a diferença real.',
    hero_cta1:'Ver Projetos',hero_cta2:'Entre em Contato',
    stat_exp:'Anos de Exp.',stat_proj:'Projetos',stat_comp:'Empresas',
    badge_text:'Dev Frontend',location:'Olinda, Pernambuco',exp_badge:'Anos de\nExperiência',
    about_label:'Sobre mim',about_title:'Transformando desafios\nem soluções digitais',
    acard1_title:'Resolutivo',acard1_text:'Experiência prática em suporte técnico e resolução de problemas em ambiente corporativo real.',
    acard2_title:'Foco em UI/UX',acard2_text:'Interfaces responsivas com atenção à usabilidade. Boas práticas de organização e estruturação de código.',
    acard3_title:'Evolução Contínua',acard3_text:'Constantemente buscando crescer como desenvolvedor e aprender novas tecnologias.',
    about_bio_label:'Resumo',
    about_bio:'Desenvolvedor Frontend com experiência prática em projetos reais e atuação como Assistente de TI. Possuo conhecimento em HTML, CSS, JavaScript, React e PHP, com foco na criação de interfaces responsivas e funcionais.',
    detail_name:'Nome',detail_location:'Localização',detail_lang:'Idiomas',detail_lang_val:'Português (Nativo), Inglês (B2)',
    detail_srv:'Serviços',detail_srv_val:'Web Design, Documentação de Software',
    tl_label:'Experiência & Formação',
    e1_p:'2024 — Atual',e1_r:'Assistente de TI',e1_b1:'Suporte técnico a usuários (hardware e software)',e1_b2:'Manutenção de computadores, redes e sistemas internos',e1_b3:'Identificação e redução de interrupções nos sistemas',
    e2_p:'2022 — Atual',e2_r:'Desenvolvedor Frontend Freelancer',e2_c:'Remoto',e2_b1:'Interfaces responsivas com HTML, CSS e JavaScript',e2_b2:'Projetos web com foco em usabilidade e UX',e2_b3:'Boas práticas de organização de código',
    e3_r:'Estagiário — Dev Frontend & Backend',e3_b1:'Desenvolvimento com HTML, CSS, PHP e JavaScript',e3_b2:'Demandas reais, melhorias em sistemas internos',
    edu1:'Análise e Desenvolvimento de Sistemas',
    sk_label:'Habilidades',sk_title:'Tecnologias que domino',
    lv_int:'Intermediário',lv_bas:'Básico',
    proj_label:'Projetos',proj_title:'Trabalhos recentes',
    p1_desc:'Cardápio digital responsivo para restaurantes locais, com foco em usabilidade mobile e acessibilidade.',
    p2_desc:'Landing page premium inspirada no design da Apple. Animações suaves e estética refinada.',
    p3_desc:'Projeto focado no aprimoramento em HTML, CSS, Sass e JavaScript com boas práticas front-end.',
    p_live:'Ver Projeto',
    gh_title:'Mais no GitHub',gh_text:'Explore todos os meus projetos open source no GitHub.',gh_btn:'Ver GitHub',
    ct_label:'Contato',ct_title:'Vamos construir algo juntos',ct_intro:'Tem um projeto em mente? Adoraria ouvir você.',
    soc_label:'Redes Sociais',
    f_name:'Nome',f_msg:'Projeto / Mensagem',f_send:'Enviar Mensagem',
    footer:'© 2026 Marco Davi. Todos os direitos reservados.',
    lang_label:'Português'
  },
  en:{
    nav_home:'Home',nav_about:'About',nav_skills:'Skills',nav_projects:'Projects',nav_contact:'Contact',
    hero_available:'Available for freelance',
    hero_line1:"Hello, I'm",hero_line3:'Frontend Dev',
    hero_subtitle:'Transforming ideas into powerful digital experiences. Passionate about clean interfaces, efficient code, and solutions that make a real difference.',
    hero_cta1:'View Projects',hero_cta2:'Contact Me',
    stat_exp:'Years Exp.',stat_proj:'Projects',stat_comp:'Companies',
    badge_text:'Frontend Dev',location:'Olinda, Pernambuco',exp_badge:'Years of\nExperience',
    about_label:'About me',about_title:'Transforming challenges\ninto digital solutions',
    acard1_title:'Problem Solver',acard1_text:'Hands-on experience in technical support and real-world problem solving in corporate environments.',
    acard2_title:'UI/UX Focused',acard2_text:'Responsive interfaces with attention to usability. Good practices in code organization and structure.',
    acard3_title:'Continuous Growth',acard3_text:'Constantly seeking to grow as a developer and learn new technologies.',
    about_bio_label:'Summary',
    about_bio:'Frontend Developer with hands-on experience in real projects and as an IT Assistant. Knowledge in HTML, CSS, JavaScript, React and PHP, focused on building responsive, functional interfaces.',
    detail_name:'Name',detail_location:'Location',detail_lang:'Languages',detail_lang_val:'Portuguese (Native), English (B2)',
    detail_srv:'Services',detail_srv_val:'Web Design, Software Documentation',
    tl_label:'Experience & Education',
    e1_p:'2024 — Present',e1_r:'IT Assistant',e1_b1:'Technical support to users (hardware and software)',e1_b2:'Maintenance of computers, networks and internal systems',e1_b3:'Identification and reduction of system interruptions',
    e2_p:'2022 — Present',e2_r:'Freelance Frontend Developer',e2_c:'Remote',e2_b1:'Responsive interfaces with HTML, CSS and JavaScript',e2_b2:'Web projects focused on usability and UX',e2_b3:'Good practices in code organization',
    e3_r:'Intern — Frontend & Backend Dev',e3_b1:'Development with HTML, CSS, PHP and JavaScript',e3_b2:'Real demands, internal system improvements',
    edu1:'Systems Analysis & Development',
    sk_label:'Skills',sk_title:'Technologies I work with',
    lv_int:'Intermediate',lv_bas:'Basic',
    proj_label:'Projects',proj_title:'Recent work',
    p1_desc:'Responsive digital menu for local restaurants, focused on mobile usability and accessibility.',
    p2_desc:"Premium landing page inspired by Apple's design language. Smooth animations and refined aesthetics.",
    p3_desc:'Project focused on improving HTML, CSS, Sass and JavaScript with front-end best practices.',
    p_live:'Live Demo',
    gh_title:'More on GitHub',gh_text:'Explore all my open source projects on GitHub.',gh_btn:'View GitHub',
    ct_label:'Contact',ct_title:"Let's build something together",ct_intro:"Have a project in mind? I'd love to hear from you.",
    soc_label:'Social',
    f_name:'Name',f_msg:'Project / Message',f_send:'Send Message',
    footer:'© 2026 Marco Davi. All rights reserved.',
    lang_label:'English'
  },
  es:{
    nav_home:'Inicio',nav_about:'Sobre mí',nav_skills:'Habilidades',nav_projects:'Proyectos',nav_contact:'Contacto',
    hero_available:'Disponible para freelance',
    hero_line1:'Hola, soy',hero_line3:'Dev Frontend',
    hero_subtitle:'Transformando ideas en experiencias digitales poderosas. Apasionado por interfaces limpias, código eficiente y soluciones que hacen una diferencia real.',
    hero_cta1:'Ver Proyectos',hero_cta2:'Contáctame',
    stat_exp:'Años de Exp.',stat_proj:'Proyectos',stat_comp:'Empresas',
    badge_text:'Dev Frontend',location:'Olinda, Pernambuco',exp_badge:'Años de\nExperiencia',
    about_label:'Sobre mí',about_title:'Transformando desafíos\nen soluciones digitales',
    acard1_title:'Resolutivo',acard1_text:'Experiencia práctica en soporte técnico y resolución de problemas en entorno corporativo real.',
    acard2_title:'Foco en UI/UX',acard2_text:'Interfaces responsivas con atención a la usabilidad. Buenas prácticas en organización y estructura de código.',
    acard3_title:'Crecimiento Continuo',acard3_text:'Buscando constantemente crecer como desarrollador y aprender nuevas tecnologías.',
    about_bio_label:'Resumen',
    about_bio:'Desarrollador Frontend con experiencia práctica en proyectos reales y como Asistente de TI. Conocimiento en HTML, CSS, JavaScript, React y PHP, enfocado en crear interfaces responsivas y funcionales.',
    detail_name:'Nombre',detail_location:'Ubicación',detail_lang:'Idiomas',detail_lang_val:'Portugués (Nativo), Inglés (B2)',
    detail_srv:'Servicios',detail_srv_val:'Diseño Web, Documentación de Software',
    tl_label:'Experiencia & Formación',
    e1_p:'2024 — Actual',e1_r:'Asistente de TI',e1_b1:'Soporte técnico a usuarios (hardware y software)',e1_b2:'Mantenimiento de equipos, redes y sistemas internos',e1_b3:'Identificación y reducción de interrupciones en los sistemas',
    e2_p:'2022 — Actual',e2_r:'Desarrollador Frontend Freelancer',e2_c:'Remoto',e2_b1:'Interfaces responsivas con HTML, CSS y JavaScript',e2_b2:'Proyectos web con foco en usabilidad y UX',e2_b3:'Buenas prácticas de organización de código',
    e3_r:'Practicante — Dev Frontend & Backend',e3_b1:'Desarrollo con HTML, CSS, PHP y JavaScript',e3_b2:'Demandas reales, mejoras en sistemas internos',
    edu1:'Análisis y Desarrollo de Sistemas',
    sk_label:'Habilidades',sk_title:'Tecnologías que manejo',
    lv_int:'Intermedio',lv_bas:'Básico',
    proj_label:'Proyectos',proj_title:'Trabajos recientes',
    p1_desc:'Menú digital responsivo para restaurantes locales, con foco en usabilidad móvil y accesibilidad.',
    p2_desc:'Landing page premium inspirada en el diseño de Apple. Animaciones suaves y estética refinada.',
    p3_desc:'Proyecto enfocado en mejorar HTML, CSS, Sass y JavaScript con buenas prácticas front-end.',
    p_live:'Ver Proyecto',
    gh_title:'Más en GitHub',gh_text:'Explora todos mis proyectos open source en GitHub.',gh_btn:'Ver GitHub',
    ct_label:'Contacto',ct_title:'Construyamos algo juntos',ct_intro:'¿Tienes un proyecto en mente? Me encantaría escucharte.',
    soc_label:'Redes Sociales',
    f_name:'Nombre',f_msg:'Proyecto / Mensaje',f_send:'Enviar Mensaje',
    footer:'© 2026 Marco Davi. Todos los derechos reservados.',
    lang_label:'Español'
  }
};

/* ═══════════════════════════════════════════════
   VARIÁVEIS DE ESTADO GLOBAL
   Controlam o idioma atual e o tema (claro/escuro) do site.
   Os valores são salvos no localStorage para persistir entre sessões.
═══════════════════════════════════════════════ */
let lang = localStorage.getItem('md-lang') || 'pt'; // Idioma atual (pt, en, es)
let theme = localStorage.getItem('md-theme') || 'light'; // Tema atual (light, dark)

/* ═══════════════════════════════════════════════
   FUNÇÃO: APLICAR TEMA
   Aplica o tema claro ou escuro ao site modificando o atributo data-theme do elemento raiz.
   Também salva a preferência no localStorage.
═══════════════════════════════════════════════ */
function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t); // Define o tema no HTML
  theme = t; // Atualiza variável global
  localStorage.setItem('md-theme', t); // Salva no navegador
}

/* ═══════════════════════════════════════════════
   FUNÇÃO: RENDERIZAR TEXTO
   Atualiza todos os elementos HTML que têm o atributo data-key com o texto
   correspondente do idioma selecionado.
═══════════════════════════════════════════════ */
function renderText(l){
  const t = T[l]; // Obtém o dicionário do idioma
  document.querySelectorAll('[data-key]').forEach(el => { // Para cada elemento com data-key
    const v = t[el.dataset.key]; // Busca o texto no dicionário
    if(v !== undefined) el.textContent = v; // Atualiza o conteúdo se encontrado
  });
}

/* ═══════════════════════════════════════════════
   ANIMAÇÃO DE MUDANÇA DE IDIOMA COM EFEITO WIPE
   Cria uma animação suave de transição entre idiomas usando uma cortina deslizante.
   O efeito dura cerca de 1.2 segundos com timing preciso.
═══════════════════════════════════════════════ */
function applyLang(l, animate){
  if(!animate){ // Se não deve animar, apenas troca o texto
    renderText(l);
    finishLang(l);
    return;
  }

  const cover = document.getElementById('lang-cover'); // Elemento da cortina
  const label = document.getElementById('lang-cover-label'); // Texto da cortina
  label.textContent = T[l].lang_label; // Define o nome do idioma na cortina

  /* 1 — DESLIZAR PARA DENTRO */
  cover.classList.remove('out');
  cover.classList.add('in');

  /* 2 — TROCAR TEXTO NO PICO DA ANIMAÇÃO */
  setTimeout(() => renderText(l), 480); // 480ms = meio da animação

  /* 3 — DESLIZAR PARA FORA */
  setTimeout(() => {
    cover.classList.remove('in');
    cover.classList.add('out');
  }, 600); // Após 600ms

  /* 4 — REMOVER CLASSE APÓS ANIMAÇÃO COMPLETA */
  setTimeout(() => cover.classList.remove('out'), 1200); // Após 1.2s

  finishLang(l); // Finaliza a mudança de idioma
}

/* ═══════════════════════════════════════════════
   FUNÇÃO: FINALIZAR MUDANÇA DE IDIOMA
   Atualiza os botões de idioma ativos e o atributo lang do HTML.
   Salva a preferência no localStorage.
═══════════════════════════════════════════════ */
function finishLang(l){
  // Atualiza botões ativos
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.langSwitch === l)
  );

  // Define o idioma no HTML (pt-BR, en, es)
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : l === 'es' ? 'es' : 'en';

  lang = l; // Atualiza variável global
  localStorage.setItem('md-lang', l); // Salva no navegador
}

/* ═══════════════════════════════════════════════
   INICIALIZAÇÃO DO SITE
   Aplica o tema e idioma salvos quando a página carrega.
═══════════════════════════════════════════════ */
applyTheme(theme); // Aplica o tema salvo
applyLang(lang, false); // Aplica o idioma salvo sem animação

/* ═══════════════════════════════════════════════
   EVENTOS DE CONTROLE DE TEMA E IDIOMA
   Botão de alternância de tema (claro/escuro) e botões de seleção de idioma.
═══════════════════════════════════════════════ */
document.getElementById('theme-btn').addEventListener('click', () =>
  applyTheme(theme === 'light' ? 'dark' : 'light') // Alterna entre light/dark
);

// Para cada botão de mudança de idioma
document.querySelectorAll('[data-lang-switch]').forEach(b => {
  b.addEventListener('click', () => {
    if(b.dataset.langSwitch !== lang) // Só muda se for idioma diferente
      applyLang(b.dataset.langSwitch, true); // Com animação
  });
});

// Menu hambúrguer para mobile
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('mob-open'); // Abre/fecha menu
});

/* ═══════════════════════════════════════════════
   SISTEMA DE CURSOR PERSONALIZADO
   Cria um cursor animado com três elementos: ponto central, anel e brilho.
   O anel segue o mouse com atraso suave para efeito elegante.
═══════════════════════════════════════════════ */
const glow = document.getElementById('c-glow'); // Elemento de brilho
const dot = document.getElementById('c-dot');   // Ponto central
const ring = document.getElementById('c-ring'); // Anel que segue com atraso
let mx = 0, my = 0; // Posição atual do mouse
let rx = 0, ry = 0; // Posição do anel (com atraso)

// Atualiza posição do cursor
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY; // Salva posição do mouse
  dot.style.left = mx + 'px'; dot.style.top = my + 'px'; // Move ponto central
  glow.style.left = mx + 'px'; glow.style.top = my + 'px'; // Move brilho
  glow.style.opacity = '1'; // Mostra brilho
});

// Esconde brilho quando mouse sai da janela
document.addEventListener('mouseleave', () => glow.style.opacity = '0');

/* LOOP DE ANIMAÇÃO DO ANEL */
(function loop(){
  rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1; // Interpolação suave (10% por frame)
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; // Move anel
  requestAnimationFrame(loop); // Próximo frame
})();

/* EFEITO HOVER EM ELEMENTOS INTERATIVOS */
document.querySelectorAll('a, button, .sk-card, .pc, .ac, .cchan').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
});

/* ═══════════════════════════════════════════════
   SISTEMA DE PARTÍCULAS ANIMADAS
   Cria um fundo animado com partículas que se movem e se conectam.
   As cores mudam conforme o tema (claro/escuro).
═══════════════════════════════════════════════ */
const cv = document.getElementById('ptc'); // Canvas para as partículas
const cx = cv.getContext('2d'); // Contexto 2D do canvas
let W, H, pts = []; // Largura, altura e array de partículas

/* FUNÇÃO DE REDIMENSIONAMENTO */
const rsz = () => {
  W = cv.width = innerWidth;  // Define largura do canvas
  H = cv.height = innerHeight; // Define altura do canvas
};
rsz(); // Chama na inicialização
window.addEventListener('resize', rsz); // Recalcula ao redimensionar

/* FUNÇÃO PARA CRIAR UMA PARTÍCULA */
const mkP = () => ({
  x: Math.random() * W,    // Posição X aleatória
  y: Math.random() * H,    // Posição Y aleatória
  vx: (Math.random() - 0.5) * 0.22, // Velocidade X (-0.11 a 0.11)
  vy: (Math.random() - 0.5) * 0.22, // Velocidade Y (-0.11 a 0.11)
  r: Math.random() * 1.2 + 0.3,     // Raio (0.3 a 1.5)
  o: Math.random() * 0.25 + 0.07    // Opacidade (0.07 a 0.32)
});

// Cria 60 partículas iniciais
for(let i = 0; i < 60; i++) pts.push(mkP());

/* LOOP DE DESENHO DAS PARTÍCULAS */
(function drawPts(){
  cx.clearRect(0, 0, W, H); // Limpa canvas

  // Define cor baseada no tema (escuro: dourado, claro: marrom)
  const dk = document.documentElement.getAttribute('data-theme') === 'dark';
  const c = dk ? '201,164,104' : '138,106,56'; // RGB da cor

  pts.forEach((p, i) => {
    // Move partícula
    p.x += p.vx; p.y += p.vy;

    // Rebote nas bordas (efeito wrap-around)
    if(p.x < 0) p.x = W; if(p.x > W) p.x = 0;
    if(p.y < 0) p.y = H; if(p.y > H) p.y = 0;

    // Desenha partícula
    cx.beginPath();
    cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    cx.fillStyle = `rgba(${c}, ${p.o})`;
    cx.fill();

    // Desenha linhas de conexão com outras partículas próximas
    for(let j = i + 1; j < pts.length; j++){
      const q = pts[j];
      const d = Math.hypot(p.x - q.x, p.y - q.y); // Distância
      if(d < 95){ // Se estiver próxima (95px)
        cx.beginPath();
        cx.moveTo(p.x, p.y);
        cx.lineTo(q.x, q.y);
        cx.strokeStyle = `rgba(${c}, ${(1 - d/95) * 0.07})`; // Opacidade baseada na distância
        cx.lineWidth = 0.5;
        cx.stroke();
      }
    }
  });

  requestAnimationFrame(drawPts); // Próximo frame
})();

/* ═══════════════════════════════════════════════
   SISTEMA DE NAVEGAÇÃO E SCROLL
   Controla a visibilidade da navbar, botão de scroll-to-top e links ativos.
   Usa detecção de direção do scroll para esconder/mostrar a navbar.
═══════════════════════════════════════════════ */
let lastY = 0; // Última posição Y do scroll
const nb = document.getElementById('navbar'); // Elemento da navbar
const st = document.getElementById('scroll-top'); // Botão scroll-to-top

/* FUNÇÃO DE MANIPULAÇÃO DO SCROLL */
const handleScroll = () => {
  const s = scrollY; // Posição atual do scroll

  // Esconde navbar ao rolar para baixo (após 150px), mostra ao rolar para cima
  nb.classList.toggle('hidden', s > lastY && s > 150);

  // Mostra botão scroll-to-top após 500px
  st.classList.toggle('vis', s > 500);

  lastY = s; // Atualiza última posição

  // Atualiza links ativos da navbar baseado na seção visível
  document.querySelectorAll('section[id]').forEach(sec => {
    const top = sec.offsetTop - 140; // Offset para considerar navbar
    const bot = top + sec.offsetHeight;
    if(s >= top && s < bot){ // Se scroll está dentro da seção
      document.querySelectorAll('.nav-link').forEach(a =>
        a.classList.toggle('active', a.dataset.active === sec.id)
      );
    }
  });
};

window.addEventListener('scroll', handleScroll); // Escuta evento de scroll
handleScroll(); // Chama na inicialização

/* ═══════════════════════════════════════════════
   SISTEMA DE SCROLL REVEAL E BARRAS DE HABILIDADES
   Anima elementos quando entram na viewport usando Intersection Observer.
   Também anima as barras de progresso das habilidades.
═══════════════════════════════════════════════ */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ // Quando elemento entra na tela
      e.target.classList.add('on'); // Adiciona classe de animação

      // Anima barra de habilidade se existir
      const bar = e.target.querySelector('.sk-bar');
      if(bar){
        setTimeout(() => {
          bar.style.transform = `scaleX(${bar.dataset.w || 0.5})`; // Anima largura
        }, 250); // Delay de 250ms
      }

      ro.unobserve(e.target); // Para de observar após animar
    }
  });
}, {
  threshold: 0.1, // 10% do elemento visível
  rootMargin: '0px 0px -28px 0px' // Margem inferior de 28px
});

// Observa todos os elementos com classe .rev
document.querySelectorAll('.rev').forEach(el => ro.observe(el));

/* ═══════════════════════════════════════════════
   SISTEMA DE ABAS DE HABILIDADES
   Permite filtrar os cards de habilidades por categoria (todas, frontend, backend, etc.).
   Anima a entrada dos cards com delay escalonado.
═══════════════════════════════════════════════ */
document.querySelectorAll('.sk-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove classe active de todas as abas
    document.querySelectorAll('.sk-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active'); // Adiciona active na aba clicada

    const sel = tab.dataset.tab; // Categoria selecionada
    let idx = 0; // Índice para animação escalonada

    document.querySelectorAll('.sk-card').forEach(card => {
      const show = sel === 'all' || card.dataset.tab === sel; // Deve mostrar?

      if(show){
        card.style.display = 'block'; // Mostra card
        card.style.opacity = '0'; // Inicia invisível
        card.style.transform = 'translateY(10px)'; // Inicia deslocado

        const i = idx++; // Índice atual
        setTimeout(() => {
          card.style.transition = 'opacity 0.36s ease, transform 0.36s ease';
          card.style.opacity = '1'; // Aparece
          card.style.transform = 'translateY(0)'; // Volta à posição
        }, i * 34); // Delay de 34ms por card
      } else {
        card.style.display = 'none'; // Esconde card
      }
    });
  });
});

/* ═══════════════════════════════════════════════
   SISTEMA DE SWIPER PARA MOBILE
   Permite navegar pelos projetos em dispositivos móveis com swipe.
   Suporta toque e arrastar com mouse, com indicadores de pontos.
═══════════════════════════════════════════════ */
(function initSwiper(){
  const inner = document.getElementById('swiper-inner'); // Container dos cards
  const dotsEl = document.getElementById('swiper-dots'); // Container dos pontos
  if(!inner || !dotsEl) return; // Sai se elementos não existem

  const cards = [...inner.querySelectorAll('.pc')]; // Array dos cards
  let current = 0; // Índice do card atual
  let startX = 0, isDragging = false, dragDelta = 0; // Variáveis de drag

  // Cria pontos indicadores
  cards.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'swiper-dot' + (i === 0 ? ' active' : ''); // Primeiro ativo
    d.addEventListener('click', () => goTo(i)); // Navega ao clicar
    dotsEl.appendChild(d);
  });

  /* FUNÇÃO PARA NAVEGAR PARA UM CARD ESPECÍFICO */
  function goTo(idx){
    current = Math.max(0, Math.min(cards.length - 1, idx)); // Limita índice
    const cardW = cards[0].offsetWidth + 16; // Largura do card + margem
    inner.style.transform = `translateX(-${current * cardW}px)`; // Move container

    // Atualiza pontos ativos
    dotsEl.querySelectorAll('.swiper-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  /* EVENTOS DE TOUCH (MOBILE) */
  inner.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX; // Posição inicial
    isDragging = true;
  });

  inner.addEventListener('touchmove', e => {
    if(!isDragging) return;
    dragDelta = e.touches[0].clientX - startX; // Delta do movimento
  });

  inner.addEventListener('touchend', () => {
    if(Math.abs(dragDelta) > 50){ // Se arrastou mais de 50px
      dragDelta < 0 ? goTo(current + 1) : goTo(current - 1); // Direção
    } else {
      goTo(current); // Volta à posição atual
    }
    dragDelta = 0; isDragging = false; // Reseta variáveis
  });

  /* EVENTOS DE MOUSE (DESKTOP) */
  inner.addEventListener('mousedown', e => {
    startX = e.clientX;
    isDragging = true;
    e.preventDefault(); // Previne seleção de texto
  });

  window.addEventListener('mousemove', e => {
    if(isDragging) dragDelta = e.clientX - startX;
  });

  window.addEventListener('mouseup', () => {
    if(isDragging){
      if(Math.abs(dragDelta) > 50){
        dragDelta < 0 ? goTo(current + 1) : goTo(current - 1);
      } else {
        goTo(current);
      }
    }
    dragDelta = 0; isDragging = false;
  });
})();

/* ═══════════════════════════════════════════════
   MAGNETIC BUTTONS
═══════════════════════════════════════════════ */
document.querySelectorAll('.btn-p,.btn-s').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px) translateY(-2px)`;
  });
  btn.addEventListener('mouseleave',()=> btn.style.transform='');
});

/* ═══════════════════════════════════════════════
   FORM
═══════════════════════════════════════════════ */
document.getElementById('fsub').addEventListener('click',()=>{
  const n=document.getElementById('f-name').value.trim();
  const e=document.getElementById('f-email').value.trim();
  const m=document.getElementById('f-msg').value.trim();
  if(n&&e&&m) window.location.href=`mailto:marcodavibdemelo@gmail.com?subject=Contato Portfolio - ${n}&body=${encodeURIComponent(m+'\n\nDe: '+n+'\nEmail: '+e)}`;
});