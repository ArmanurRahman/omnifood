//copyright test
const yearEl = document.querySelector(".year");

yearEl.textContent = new Date().getFullYear();

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault;
        const href = link.getAttribute("href");

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        if (href !== "#" && href.startsWith("#")) {
            const selectedEl = document.querySelector(href);
            selectedEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});

//sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    (entries) => {
        if (!entries[0].isIntersecting) {
            document.body.classList.add("sticky");
        }
        if (entries[0].isIntersecting) {
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);

obs.observe(sectionHeroEl);
