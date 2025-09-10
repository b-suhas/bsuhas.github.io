// Simple scroll reveal animation
const elements = document.querySelectorAll(".skill-card, .project-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

elements.forEach(el => observer.observe(el));
