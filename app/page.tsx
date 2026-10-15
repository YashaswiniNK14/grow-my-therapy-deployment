
const expertise = [
  {
    title: "Anxiety & Panic",
    text: "Find ways to quiet constant worry, ease tension, and feel more grounded in your daily life.",
  },
  {
    title: "Trauma & EMDR",
    text: "Work through difficult past experiences at a pace that respects your safety and readiness.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "Make space for rest, loosen the pressure to get everything right, and reconnect with yourself.",
  },
  {
    title: "Mindfulness",
    text: "Build awareness of your thoughts, emotions, and body with practical tools for everyday life.",
  },
];

const faqs = [
  {
    question: "What can I expect from our first session?",
    answer:
      "Our first session is an opportunity to talk about what brings you to therapy, your goals, and what would help you feel comfortable. We will work together to decide on a helpful path forward.",
  },
  {
    question: "Do you offer in-person and online therapy?",
    answer:
      "Yes. Dr. Maya Reynolds offers in-person therapy in Santa Monica and secure telehealth sessions for clients located in California.",
  },
  {
    question: "What approaches do you use?",
    answer:
      "Treatment may integrate cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, depending on your needs and goals.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Dr. Maya Reynolds home">
          <span>Dr. Maya Reynolds</span>
          <small>PSYD · CLINICAL PSYCHOLOGY</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#expertise">SPECIALTIES</a>
          <a href="#approach">METHODS</a>
          <a href="#faqs">FAQS</a>
          <a className="nav-contact" href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image image-placeholder">
          <img
            src="/images/DrImage.png" 
            alt="Dr. Maya Reynolds, licensed clinical psychologist"
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">THERAPY IN SANTA MONICA, CALIFORNIA</p>
          <h1>Find a little more <em>room</em> to breathe.</h1>
          <p className="hero-copy">
            Thoughtful, compassionate therapy for anxiety, trauma, and
            burnout. You don’t have to navigate everything on your own.
          </p>
          <a className="outline-button" href="#contact">LET’S CONNECT <span>↗</span></a>
          <p className="hero-note">In-person in Santa Monica · Online across California</p>
        </div>
      </section>

      <section className="intro section-wrap">
        <div>
          <p className="eyebrow">A SPACE TO BE YOURSELF</p>
          <h2>You can be doing well on the outside and still feel overwhelmed within.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Maybe your mind rarely slows down. Maybe you feel on edge, carry
            the weight of past experiences, or keep pushing even when you are
            exhausted.
          </p>
          <p>
            Therapy offers space to understand what you’re experiencing,
            discover what you need, and move toward a life that feels more
            manageable and meaningful.
          </p>
          <a className="text-link" href="#about">GET TO KNOW ME ↗</a>
        </div>
      </section>

      <section className="who-section">
        <div className="section-wrap">
          <p className="eyebrow">SUPPORT FOR WHERE YOU ARE</p>
          <h2>Therapy that meets you <em>where you are.</em></h2>
          <div className="three-columns">
            <article>
              <span className="number">01</span>
              <h3>Anxiety & Overthinking</h3>
              <p>For the constant worrier, the high achiever, and anyone who finds it difficult to switch off.</p>
            </article>
            <article>
              <span className="number">02</span>
              <h3>Trauma & Past Experiences</h3>
              <p>For those ready to understand old patterns and build a greater sense of safety and trust.</p>
            </article>
            <article>
              <span className="number">03</span>
              <h3>Burnout & Perfectionism</h3>
              <p>For people who give a great deal to others and are learning to make room for themselves.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-overlay">
          <p className="eyebrow">A GENTLER WAY FORWARD</p>
          <h2>You deserve to feel at home in your own life, not just keep up with it.</h2>
        </div>
      </section>

      <section className="expertise section-wrap" id="expertise">
        <div className="expertise-heading">
          <p className="eyebrow">WHAT WE CAN WORK ON</p>
          <h2>Areas of <em>expertise.</em></h2>
          <p>Therapy is personal. We will shape our work around your experiences, needs, and goals.</p>
        </div>
        <div className="expertise-list">
          {expertise.map((item) => (
            <article className="expertise-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-image">
          <img src="/images/Office1.jpeg" alt="A calm, welcoming therapy office" />
        </div>
        <div className="approach-copy">
          <p className="eyebrow">HOW I WORK</p>
          <h2>Care that is collaborative, grounded, and <em>uniquely yours.</em></h2>
          <p>
            I combine practical strategies with thoughtful exploration to
            help you understand your patterns and create meaningful change.
          </p>
          <p>
            Depending on your goals, our work may draw from CBT, EMDR,
            mindfulness-based practices, and body-oriented techniques.
            We move at a pace that feels supportive rather than overwhelming.
          </p>
          <a className="text-link" href="#contact">EXPLORE WORKING TOGETHER ↗</a>
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="about-copy">
          <p className="eyebrow">MEET YOUR THERAPIST</p>
          <h2>A thoughtful space to make sense of what you’re carrying.</h2>
          <p>
            I’m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist
            based in Santa Monica, California. I work with adults navigating
            anxiety, panic, the lingering effects of past experiences, and
            professional burnout.
          </p>
          <p>
            My approach is warm and collaborative. Together, we can build
            practical tools, explore the experiences that have shaped you,
            and strengthen your relationship with yourself.
          </p>
          <p className="signature">Dr. Maya Reynolds</p>
        </div>
        <div className="about-note">
          <span className="note-mark">“</span>
          <p>
            You don’t need to have everything figured out before you begin.
            We can start with where you are today.
          </p>
        </div>
      </section>

      <section className="appointment section-wrap" id="contact">
        <div className="appointment-image">
          <img src="/images/office2.jpeg" alt="Comfortable seating in Dr. Reynolds’ office" />
        </div>
        <div className="appointment-copy">
          <p className="eyebrow">TAKE THE FIRST STEP</p>
          <h2>Let’s find a way forward, <em>together.</em></h2>
          <p>
            Starting therapy can feel like a big step. Reach out to learn
            more about working together in Santa Monica or through secure
            online sessions in California.
          </p>
          <a className="outline-button" href="#about">
            GET IN TOUCH <span>↗</span>
          </a>
          <p className="address">
            123th Street 45 W<br />
            Santa Monica, CA 90401<br />
            In-person & California telehealth
          </p>
        </div>
      </section>

      <section className="office-section section-wrap" id="office">
        <div className="office-heading">
          <p className="eyebrow">YOUR SPACE FOR HEALING</p>
          <h2>A calm place to pause, reflect, and <em>feel at ease.</em></h2>
          <p>
            My Santa Monica office is designed to feel quiet, private, and
            welcoming, with natural light and comfortable surroundings.
          </p>
        </div>
        <div className="office-gallery">
          <img src="/images/Office1.jpeg" alt="Therapy office with a peaceful atmosphere" />
          <img src="/images/office2.jpeg" alt="A welcoming space for therapy sessions" />
        </div>
        <p className="office-address">SANTA MONICA, CALIFORNIA · BY APPOINTMENT</p>
      </section>

      <section className="faqs section-wrap" id="faqs">
        <div>
          <p className="eyebrow">A FEW HELPFUL DETAILS</p>
          <h2>Questions you may be <em>asking.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#home">
              <span>Dr. Maya Reynolds</span>
              <small>PSYD · CLINICAL PSYCHOLOGY</small>
            </a>
            <p>Thoughtful therapy for a more grounded life.</p>
          </div>
          <div>
            <p className="eyebrow">EXPLORE</p>
            <a href="#about">About</a>
            <a href="#expertise">Specialties</a>
            <a href="#approach">Methods</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
            <a href="#contact">Contact Dr.Reynolds</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dr. Maya Reynolds · Concept website for internship assignment</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
