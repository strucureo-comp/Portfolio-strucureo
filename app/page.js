
import StrucureoScripts from "@/components/StrucureoScripts";

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
  <div id="loader" class="loader">
    <div class="w-layout-blockcontainer loader-container w-container">
      <div class="content in-loader">
        <div class="content-left content-left-in-loader">
          <div class="left-hero-text-wrapper in-loader">
            <p class="content-left-title left-title-in-loader">Loading<span id="loader-dots"
                class="loader-dots">...</span></p>
          </div>
        </div>
        <div class="line in-loader"></div>
        <div class="content-right content-right-in-loader">
          <div class="right-hero-text-wrapper in-loader">
            <div class="loader-counter"><span id="loader-count" class="loader-count">100</span>%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-overlay-wrapper">
    <div id="bottom-overlay" class="bottom-overlay-container w-embed">
      <div style="
    position: absolute;
    inset: 0;
    z-index: 1;
    backdrop-filter: blur(0.5px);
    -webkit-backdrop-filter: blur(0.5px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 2;
    backdrop-filter: blur(0.5625px);
    -webkit-backdrop-filter: blur(0.5625px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 3;
    backdrop-filter: blur(1.125px);
    -webkit-backdrop-filter: blur(1.125px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 4;
    backdrop-filter: blur(2.25px);
    -webkit-backdrop-filter: blur(2.25px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 5;
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 6;
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 7;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
    pointer-events: none;
  "></div>
      <div style="
    position: absolute;
    inset: 0;
    z-index: 8;
    backdrop-filter: blur(36px);
    -webkit-backdrop-filter: blur(36px);
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
    pointer-events: none;
  "></div>
    </div>
  </div>
  <div id="custom-cursor" data-wf--custom-cursor--variant="base" class="custom-cursor">
    <div class="cursor-text">view</div>
  </div>
  <header class="header">
    <div class="bar black top">
      <div class="bar-track">
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
      </div>
    </div>
    <div class="navbar-static">
      <div class="container nav-line-container">
        <div class="line nav-line"></div>
      </div>
      <div data-animation="over-left" data-collapse="none" data-duration="320" data-easing="ease-in-out"
        data-easing2="ease" role="banner" class="navbar w-nav">
        <div class="container nav-container w-container">
          <div class="nav-logo"><a href="#" class="keda-logo w-inline-block">
              <div data-target="Strucureo" data-original="Strucureo.com" class="keda-logo-txt">Strucureo.com</div>
            </a></div>
          <div class="nav-menu-container"><a id="menu-button" href="#" class="menu-button w-button">Menu</a>
            <div id="nav-menu" class="nav-menu"><a href="#works" class="nav-button w-nav-link">Works</a><a href="#about"
                class="nav-button w-nav-link">About</a><a href="#services" class="nav-button w-nav-link">Services</a><a
                href="#footer" class="nav-button w-nav-link">Hire me</a></div>
          </div>
        </div>
      </div>
    </div>
    <section class="wrapper home-hero-wrapper">
      <div class="w-layout-blockcontainer container home-hero-container w-container">
        <div class="content hero-content">
          <div class="content-left hero-content-left">
            <div class="left-hero-text-wrapper">
              <p class="content-left-title hero-left-title">Based<span class="desktop-next-line"> </span>in UAE</p>
            </div>
            <p class="content-left-title timezone mobile-hidden"><span class="warsaw-time">04:04 am</span> GST</p>
          </div>
          <div class="line"></div>
          <div class="content-right hero-content-right">
            <div class="right-hero-text-wrapper">
              <h1 class="content-right-title hero-title">Beyond code.<br /><span data-text="Building intelligence."
                  class="hero-title-italic">Building intelligence.</span></h1>
            </div><a href="mailto:support@strucureo.com?subject=I%E2%80%99ve%20got%20an%20amazing%20idea!"
              class="right-hero-cta w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                viewBox="0 0 88 84" fill="none" class="right-hero-cta-icon">
                <path
                  d="M46.3636 83.1534L37.5852 74.4602L63.8778 48.1676H0V35.4688H63.8778L37.5852 9.21875L46.3636 0.482953L87.6989 41.8182L46.3636 83.1534Z"
                  fill="black"></path>
              </svg>
              <div class="right-hero-cta-text">Let&#x27;s talk about your idea</div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="header-bottom-gradient"></div>
    <div class="code-embed w-embed"><canvas id="hero-cursor-flow"
        style="position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%;"></canvas></div>
  </header>
  <main class="main">
    <section id="works" class="wrapper works-wrapper">
      <div class="w-layout-blockcontainer container w-container">
        <p class="content-left-title works-title mobile-visible">Selected Works</p>
        <div class="content works-content">
<div class="content-left works-content-left works-left-first">
  <p class="content-left-title works-title">Selected<br/>Works</p>
  <div class="home-case-info">
    <p class="case-description">A creative platform to empower and simplify your digital journey.</p>
    <a href="https://thesimplekrew.com/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">The Simple Krew<br/></div>
      </div>
      <div class="works-link-case-scope">Web Platform</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right works-right-first">
  <a aria-label="The Simple Krew Website" href="https://thesimplekrew.com/" target="_blank" class="case-link first w-inline-block">
    <img src="https://api.microlink.io/?url=https://thesimplekrew.com/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="The Simple Krew homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">Delivering innovative and adroit design solutions for modern brands.</p>
    <a href="https://www.adroitdesigns.in/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">Adroit Designs<br/></div>
      </div>
      <div class="works-link-case-scope">Creative Agency</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="Adroit Designs Website" href="https://www.adroitdesigns.in/" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://www.adroitdesigns.in/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="Adroit Designs homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">An exclusive club and community platform for music producers and mixers.</p>
    <a href="https://mixmasters.club/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">Mixmasters Club<br/></div>
      </div>
      <div class="works-link-case-scope">Community Platform</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="Mixmasters Club Website" href="https://mixmasters.club/" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://mixmasters.club/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="Mixmasters Club homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">Streaming and live community platform for engaging audience experiences.</p>
    <a href="https://www.welfordlc.live/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">Welford LC<br/></div>
      </div>
      <div class="works-link-case-scope">Live Platform</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="Welford LC Website" href="https://www.welfordlc.live/" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://www.welfordlc.live/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="Welford LC homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">Bridging the gap between tech talents and top-tier job opportunities.</p>
    <a href="https://www.opentoowork.tech/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">Open To Work<br/></div>
      </div>
      <div class="works-link-case-scope">Tech Recruiting</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="Open To Work Website" href="https://www.opentoowork.tech/" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://www.opentoowork.tech/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="Open To Work homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">Industrial web presence for robust and reliable engineering solutions.</p>
    <a href="https://systemsteelengg.com/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">System Steel Engg<br/></div>
      </div>
      <div class="works-link-case-scope">Engineering</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="System Steel Engg Website" href="https://systemsteelengg.com/" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://systemsteelengg.com/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="System Steel Engg homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">Professional driving and logistics management network.</p>
    <a href="https://www.cityprodrivers.com/" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">City Pro Drivers<br/></div>
      </div>
      <div class="works-link-case-scope">Logistics</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="City Pro Drivers Website" href="https://www.cityprodrivers.com/" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://www.cityprodrivers.com/&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="City Pro Drivers homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div><div class="content works-content">
<div class="content-left works-content-left">
  
  <div class="home-case-info">
    <p class="case-description">Modern automotive service platform for seamless booking and tracking.</p>
    <a href="https://garagev28.vercel.app/Home" target="_blank" class="works-link w-inline-block">
      <div class="works-link-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" class="works-link-arrow"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg>
        <div class="works-link-case-name">Garage V28<br/></div>
      </div>
      <div class="works-link-case-scope">Automotive App</div>
    </a>
  </div>
</div>
<div class="line"></div>
<div class="content-right">
  <a aria-label="Garage V28 Website" href="https://garagev28.vercel.app/Home" target="_blank" class="case-link w-inline-block">
    <img src="https://api.microlink.io/?url=https://garagev28.vercel.app/Home&screenshot=true&meta=false&embed=screenshot.url&type=jpeg&device=desktop&viewport.width=1280&viewport.height=800" loading="lazy" alt="Garage V28 homepage screenshot" class="hero-case-image"/>
  </a>
</div>
</div></section>
    <section class="carousel-wrapper">
      <div class="w-layout-blockcontainer container carousel-container w-container">
        <div class="content">
          <div class="content-left">
            <p class="content-left-title dribbble-content-left">Need more?</p>
          </div>
          <div class="content-right carousel-content-right">
            <h2 class="content-right-title">Check my recent works from dribbble.</h2>
          </div>
        </div>
      </div>
      <div class="w-layout-blockcontainer dribbble-swiper swiper w-container">
        <div class="dribbble-track swiper-wrapper"><a aria-label="Label Placeholder" href="#"
            class="dribbble-case swiper-slide w-inline-block"><img
              src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy"
              alt="" class="dribbble-image" /></a></div>
      </div>
    </section>
    <section id="about" class="wrapper about-wrapper">
      <div class="w-layout-blockcontainer container about-container w-container">
        <div class="content about-content">
          <div id="about-image" class="about-image"><img
              src="/viyas.png"
              loading="lazy" alt="Strucureo.com - Strucureo" class="image" />
            <div class="about-image-text">Hey, It's Viyas here!</div>
          </div>
          <div class="content-left about-content-left">
            <p class="content-left-title about-left-title">Who&#x27;s behind<span class="desktop-next-line"> </span>the
              build?</p>
          </div>
          <div class="line"></div>
          <div class="content-right about-content-right">
            <h2 class="content-right-title">Building for the next <br />decade of tech.</h2>
            <div class="inner-right-content">
              <div>
                <p class="paragraph about-short"><strong>AI-first engineering, not just software.</strong><br /></p>
                <p class="paragraph about-description">Strucureo builds intelligent products and custom AI systems for businesses that need more than off-the-shelf tools.<br /><br />
                  We obsess over architecture, automation, and real-world outcomes — from AI-first ERPs to private cloud infrastructure. Every system we ship is built to scale with your business.</p>
                  <div style="margin-top: 32px; font-size: 14px; color: #888; border-top: 1px solid #222; padding-top: 16px;">
                    Trusted by startups and agencies across India, the US, and the UAE.
                  </div>
              </div>
              <div class="socials"><a aria-label="Contra" href="https://contra.com/kedavvra" target="_blank"
                  class="social-link w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                    viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10.7246 9.42029H19.7826C19.9275 9.42029 20 9.42029 20 9.27536V8.98551C20 8.91304 20 8.84058 19.8551 8.84058C15.5797 7.68116 12.2464 4.42029 11.1594 0.144928L10.8696 0H10.6522C10.5797 0 10.5072 0.0724638 10.5072 0.217391V9.27536C10.5072 9.34783 10.5072 9.42029 10.6522 9.42029H10.7246ZM10.7246 20H11.0145L11.1594 19.8551C12.3188 15.5797 15.5797 12.2464 19.8551 11.1594L20 10.942V10.7246C20 10.6522 19.9275 10.5072 19.7826 10.5072H10.7246L10.5797 10.7246V19.7826C10.5797 19.9275 10.5797 20 10.7246 20ZM9.05797 20H9.27536C9.34783 20 9.42029 19.9275 9.42029 19.7826V10.7246C9.42029 10.6522 9.42029 10.5072 9.27536 10.5072H0.217391C0.0724638 10.5072 0 10.6522 0 10.7246V11.0145C0 11.087 0 11.1594 0.144928 11.1594C4.42029 12.2464 7.75362 15.5797 8.84058 19.8551L9.05797 20ZM0.217391 9.42029H9.27536C9.34783 9.42029 9.42029 9.42029 9.42029 9.27536V0.217391C9.42029 0.0724638 9.42029 0 9.27536 0H8.98551C8.91304 0 8.84058 0 8.84058 0.144928C7.68116 4.34783 4.34783 7.75362 0.144928 8.84058L0 9.05797V9.27536C0 9.34783 0.0724638 9.42029 0.217391 9.42029Z"
                      fill="black"></path>
                  </svg></a><a aria-label="Dribbble" href="https://dribbble.com/Strucureo" target="_blank"
                  class="social-link w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                    viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10 0C4.47939 0 0 4.47939 0 10C0 15.5206 4.47939 20 10 20C15.5098 20 20 15.5206 20 10C20 4.47939 15.5098 0 10 0ZM16.6052 4.60954C17.7983 6.06291 18.5141 7.91756 18.5358 9.92406C18.2538 9.86987 15.4338 9.295 12.5922 9.65294C12.5271 9.51194 12.4729 9.36006 12.4078 9.20825C12.2343 8.79613 12.0391 8.37312 11.8438 7.97181C14.9891 6.692 16.4208 4.84816 16.6052 4.60954ZM10 1.47506C12.1692 1.47506 14.154 2.28851 15.6616 3.62256C15.5097 3.83948 14.2191 5.56399 11.1822 6.70281C9.78306 4.13232 8.23213 2.0282 7.9935 1.70282C8.63338 1.55097 9.30588 1.47506 10 1.47506ZM6.36662 2.27766C6.59437 2.58134 8.11281 4.69631 9.53363 7.21256C5.5423 8.2755 2.01736 8.25381 1.63774 8.25381C2.19089 5.60738 3.98047 3.40564 6.36662 2.27766ZM1.45336 10.0109C1.45336 9.92406 1.45336 9.83731 1.45336 9.75056C1.82213 9.76137 5.96529 9.81562 10.2278 8.53581C10.4773 9.013 10.705 9.50106 10.9219 9.98913C10.8134 10.0217 10.6941 10.0542 10.5857 10.0867C6.18221 11.5076 3.83948 15.3904 3.64425 15.7158C2.2885 14.2082 1.45336 12.2018 1.45336 10.0109ZM10 18.5466C8.026 18.5466 6.20391 17.8742 4.76139 16.7462C4.91323 16.4317 6.64856 13.0911 11.4642 11.41C11.4859 11.3991 11.4968 11.3991 11.5184 11.3883C12.7223 14.5011 13.2104 17.1149 13.3406 17.8633C12.3102 18.308 11.1822 18.5466 10 18.5466ZM14.7614 17.0824C14.6746 16.5618 14.2191 14.0673 13.1019 10.9978C15.7809 10.5748 18.1236 11.269 18.4165 11.3666C18.0478 13.7419 16.6811 15.7917 14.7614 17.0824Z"
                      fill="black"></path>
                  </svg></a><a aria-label="X" href="https://x.com/kedavrio" target="_blank"
                  class="social-link w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                    viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15.2718 1.58667H18.0831L11.9413 8.60625L19.1666 18.1583H13.5093L9.07828 12.365L4.00821 18.1583H1.19528L7.76445 10.6501L0.833252 1.58667H6.63418L10.6394 6.88195L15.2718 1.58667ZM14.2852 16.4757H15.8429L5.78775 3.18095H4.11614L14.2852 16.4757Z"
                      fill="black"></path>
                  </svg></a><a aria-label="Instagram" href="https://www.instagram.com/Strucureo/" target="_blank"
                  class="social-link w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                    viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_157_184)">
                      <path
                        d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                        fill="black"></path>
                      <path
                        d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                        fill="black"></path>
                      <path
                        d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                        fill="black"></path>
                    </g>
                  </svg></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/filip-legierski-5a5654147/"
                  target="_blank" class="social-link w-inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_157_185)">
                      <path
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="black"></path>
                    </g>
                  </svg></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bar primary">
      <div class="bar-track">
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
        <div class="bar-track-item">Now accepting projects</div>
      </div>
    </div>
    <section id="services" class="wrapper services-wrapper">
      <div class="w-layout-blockcontainer container services-container w-container">
        <div class="content services-content">
          <div class="content-left services-content-left">
            <p class="content-left-title services-left-title">Services</p>
          </div>
          <div class="line dark"></div>
          <div class="content-right services-content-right">
            <h2 class="content-right-title">Looking to boost your digital presence?</h2>
          </div>
        </div>
        <div class="content services-content services">
          <div class="content-left services-content-left bottom">
            <div class="services-list">
              <div data-trigger="web" class="services-item first">
                <div class="services-item-label-container">
                  <div class="skills-item-label">Web Design</div>
                </div>
              </div>
              <div data-trigger="app" class="services-item">
                <div class="services-item-label-container">
                  <div class="skills-item-label">App Design</div>
                </div>
              </div>
              <div data-trigger="seo" class="services-item">
                <div class="services-item-label-container">
                  <div class="skills-item-label">SEO</div>
                </div>
              </div>
              <div data-trigger="ai" class="services-item">
                <div class="services-item-label-container">
                  <div class="skills-item-label">AI Automation & Cloud Support</div>
                </div>
              </div>
              <div data-trigger="software" class="services-item">
                <div class="services-item-label-container">
                  <div class="skills-item-label">Custom Softwares</div>
                </div>
              </div>
            </div>
          </div>
          <div class="line dark"></div>
          <div class="content-right services-content-right services-image-container">
            <div class="services-image-wrapper"><img
                src="https://cdn.prod.website-files.com/669ffd7536d2d5697935b89b/67d6db70ac7150f21a7ea7dd_Services-2.avif"
                loading="lazy" data-service="web"
                alt="Open laptop on rocky surface displaying a fashion exploration AI platform with four models in different outfits."
                class="services-image" /><img
                src="https://cdn.prod.website-files.com/669ffd7536d2d5697935b89b/67d6db7051a3e9233215cdb7_Services-1.avif"
                loading="lazy" data-service="app"
                alt="Black smartphone floating above a dark textured surface displaying a productivity app with task categories and quick action cards."
                class="services-image" /><img
                src="https://cdn.prod.website-files.com/669ffd7536d2d5697935b89b/691e2861b095d94ee90c2d0a_Services-3.avif"
                loading="lazy" data-service="seo"
                alt="Billboard with a close-up of a woman with skin cream on her cheek and text reading &#x27;skin first. fun always.&#x27; and &#x27;lazzi skincare&#x27;."
                class="services-image" />
              <div data-service="ai" class="services-image">
                <div class="services-video w-embed"><video
                    src="https://b8v44sqju4.ufs.sh/f/88ud4D12FtPOeq2qahgU3Pc0mzDE7FlMZWrBGLn1QIh6Vxb5" playsinline
                    autoplay loop muted preload="auto"
                    style="width:100%; height:auto; display:block; object-fit:cover;"></video></div>
              </div><img
                src="https://cdn.prod.website-files.com/669ffd7536d2d5697935b89b/67d6db709b9cdd619b3295be_Services-5.avif"
                loading="lazy" data-service="software"
                alt="Three social media posts from Wearly, Denver, CO, featuring a glitch art silhouette with text &#x27;fashion exploration AI powered platform&#x27; in the center."
                class="services-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer id="footer" data-wf--footer--variant="base" class="footer">
    <div class="footer-reveal">
      <div class="w-layout-blockcontainer container footer-container w-container">
        <div class="content footer-content">
          <div class="content-left footer-content-left">
            <p class="content-left-title footer-left-title">Wanna boost<span class="desktop-next-line"> </span>your
              project?</p>
          </div>
          <div class="line footer-line"></div>
          <div class="content-right footer-content-right">
            <h2 class="footer-heading">Just work <br />with me.</h2><a
              href="mailto:support@strucureo.com?subject=I%E2%80%99ve%20got%20an%20amazing%20idea!"
              class="button-v2 w-inline-block">
              <div class="button-v2-border"></div>
              <div class="button-v2-ripple-wrapper">
                <div class="button-v2-ripple"></div>
              </div>
              <div class="button-v2-text-wrapper">
                <div class="button-v2-text">
                  <div>Let&#x27;s talk</div>
                  <div>Let&#x27;s talk</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="content footer-content more">
          <div class="content-left footer-content-left more"><a href="#"
              class="footer-back-to-the-top w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                viewBox="0 0 24 24" class="back-to-the-top-arrow">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 5v14m6-8l-6-6m-6 6l6-6"></path>
              </svg>
              <div>Back to top</div>
            </a></div>
          <div class="line footer-line"></div>
          <div class="content-right footer-content-right more"><a href="#"
              class="footer-back-to-the-top mobile w-inline-block">
              <div class="text-block-4">↑ Back to top</div>
            </a>
            <div class="footer-find-me-on">
              <div>Find me on</div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"
                class="find-me-on-arrow">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14m-6 6l6-6m-6-6l6 6"></path>
              </svg>
            </div>
            <div class="footer-socials"><a href="https://contra.com/kedavvra" target="_blank"
                class="footer-social">Contra</a><a href="https://dribbble.com/Strucureo" target="_blank"
                class="footer-social">Dribbble</a><a href="https://x.com/kedavrio" target="_blank"
                class="footer-social">X</a><a href="https://www.instagram.com/Strucureo/" target="_blank"
                class="footer-social">Instagram</a><a href="https://www.linkedin.com/in/filip-legierski-5a5654147/"
                target="_blank" class="footer-social">LinkedIn</a></div>
          </div>
        </div>
      </div>
      <div class="bar black bottom">
        <div class="bar-track">
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
          <div class="bar-track-item">All rights resevred. 2026. / Strucureo.com</div>
        </div>
      </div>
    </div>
  </footer>
  
  
  
  
  
  
  
  

  

  

  

  

  
  

  

  

  

  

  

  

  

  

  

  

<div id="custom-cursor" class="custom-cursor">
    <div class="cursor-text">View</div>
</div>
` }} />
      <StrucureoScripts />
    </>
  );
}
