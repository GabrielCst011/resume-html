const toggle = document.getElementById('toggle-theme');

document.getElementById('toggle-theme').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.getElementById("logo").addEventListener("click", function(event) {
  event.preventDefault();

  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

document.getElementById("download-pdf").addEventListener("click", function () {
  const isDark = document.body.classList.contains('dark-mode');

  const button = document.getElementById("download-pdf");

  const whatsappLink = document.getElementById("whatsapp-link");
  const whatsappNumber = "+55 (11) 99999-9999";
  whatsappLink.textContent = whatsappNumber;

  const githublink = document.getElementById("github");
  const gitlink = "https://github.com/seugit";
  githublink.textContent = gitlink;

  const linkedinlink = document.getElementById("linkedin");
  const link = "https://www.linkedin.com/in/seulinkedin";
  linkedinlink.textContent = link;

  if (isDark) document.body.classList.remove('dark-mode');

  button.style.display = 'none';

  window.print();

  setTimeout(() => {
    button.style.display = 'inline-block';
    if (isDark) document.body.classList.add('dark-mode');

    whatsappLink.textContent = "Iniciar conversa";
    githublink.textContent = "João Silva GitHub";
    linkedinlink.textContent = "João Silva LinkedIn";
  }, 100);
});
