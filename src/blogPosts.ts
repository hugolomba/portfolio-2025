const blogPosts = [
    {
    id: "0",
    title: "Refactoring a Beloved Project: The Solar System",
    excerpt: "Revisiting my old project 'The Solar System' and rebuilding it from scratch with React, TypeScript, Tailwind, and a custom Node.js API. Now it includes dwarf planets, asteroids, galaxies, and interactive curiosities about each celestial body.",
    date: "2025-09-16",
    link: "https://the-solarsystem.netlify.app",
    author: "Hugo Lomba",
    images: [
        "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033091/Screenshot_2025-09-16_at_15.27.38_qenu1c.png",
        "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033084/Screenshot_2025-09-16_at_15.30.10_lfyenb.png",
        "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033084/Screenshot_2025-09-16_at_15.30.30_rk032d.png"
    ],
    authorImage: "https://avatar.iran.liara.run/public/35",
    content: `
<article>
  <p style="text-indent: 2em;">When I first started learning React back in 2022, I created a small project called <strong>The Solar System</strong>.
  <br>It displayed basic information about the planets and the Sun. It was simple, but it had something special: it was about a topic I love — the universe — and that kept me motivated to go deeper into coding. I was very proud of it, because I could transform an idea in a real digital product.</p>
  
  <div className="galleryBefore" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem 0;
">
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033085/Screenshot_2025-09-16_at_15.29.22_vk5jpl.png" />
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033084/Screenshot_2025-09-16_at_15.30.10_lfyenb.png" />
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033084/Screenshot_2025-09-16_at_15.30.30_rk032d.png" />
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758033084/Screenshot_2025-09-16_at_15.30.19_wiruqb.png" />
  </div>

  <p>Revisiting it now felt like opening a time capsule.<br>
  I decided to rebuild the whole project from scratch, this time with <strong>React + TypeScript + Tailwind</strong> on the frontend, and <strong>Node.js + Express + TypeScript</strong> on the backend, creating my own API to serve the data.</p>

  <h2 style="margin-top: 2rem;">What Changed?</h2>
  
  <div className="galleryAfter" style="
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem 0;
">
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062575/Screenshot_2025-09-16_at_23.39.55_f8rfkm.png" />
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.06_makbgr.png" />
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.20_tujg1y.png" />
  <img src="https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.13_jfckcx.png" />
  </div>

  <p>Previously, the project only displayed the planets and the Sun.</p>
  <p></p>Now, it allows exploration of:</p>
  <ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem;">
    <li>Dwarf planets</li>
    <li>Asteroids</li>
    <li>Galaxies</li>
    <li>Stars</li>
    <li>Planets</li>
  </ul>

  <p>On top of that, I redesigned the UI with a <strong>sci-fi inspired style</strong>, added smooth animations, and made the experience more interactive.</p>

  <h2 style="margin: 2rem 0;">What I Learned and Achieved</h2>

  <p>Rebuilding the project gave me the chance to review my old code and improve it.</p>
  <br>  I had to think through everything — from the <strong>API architecture</strong> and how the data would be structured, to how <strong>React components</strong> would consume and interact with this information.</p>

  <p>In short, <strong>The Solar System</strong> is more than just a project about planets — it’s a project about <strong>learning, evolving, and transforming knowledge into something you can see and interact with</strong>.</p>

  <p>I’m really proud of how it turned out, and I hope it inspires others to revisit their old projects and see how far they’ve come.</p>
<br>
  <p>You can visite it here: <a href="the-solar-system.hugo-miranda.dev">the-solar-system.hugo-miranda.dev</a></p>
</article>

`
}
];

export default blogPosts;