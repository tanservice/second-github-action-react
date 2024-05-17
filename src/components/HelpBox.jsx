import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>hello</p>
    </article>
  );
}

export default HelpBox;
