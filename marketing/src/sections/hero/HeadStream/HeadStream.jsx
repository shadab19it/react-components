import "./HeadStream.css";

const HeadStream = () => (
  <section className='section-headstream'>
    <div>
      <h1>Get ahead of competition</h1>
      <p>
        With Hundred.dev automate your mundate tasks, <br /> and build technology that can help <br /> you move faster than ever
      </p>
      <button>Get Started</button>
    </div>
    <div>
      <div className='stream-container'>
        <div className='circle' style={{ backgroundColor: "orange" }}></div>
        <img src='/img/sections/hero/HeadStream/coder_4.jpeg' alt='' />
      </div>
      <div className='stream-container'>
        <img src='/img/sections/hero/HeadStream/coder_5.png' alt='' />
        <div className='cylinder' style={{ backgroundColor: "orange" }}></div>
      </div>
      <div className='stream-container'>
        <div className='cylinder' style={{ backgroundColor: "#628aec" }}></div>
        <img src='/img/sections/hero/HeadStream/coder_3.jpeg' alt='' />
        <img src='/img/sections/hero/HeadStream/coder_1.jpeg' alt='' />
      </div>
      <div className='stream-container'>
        <img src='/img/sections/hero/HeadStream/woman.jpeg' alt='' />
        <div className='cylinder' style={{ backgroundColor: "#ea7e60" }}></div>
      </div>
      <div className='stream-container'>
        <img src='/img/sections/hero/HeadStream/coding.jpeg' alt='' />
      </div>
    </div>
  </section>
);

export default HeadStream;
