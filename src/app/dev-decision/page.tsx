import TEXT from '~/TEXT.json';

// TODO: fetch TEXT according to lang being set
export default function Decision() {
  return (
    <>
      <h2>{TEXT.decision.title}</h2>
      {TEXT.decision.text.map((item, i) =>
        typeof item === 'object' ? (
          <a
            key={i} // TODO: index
            href={item.href}
            target='_blank'
          >
            {item.text}
          </a>
        ) : (
          <span key={i}>{item}</span>
        )
      )}
    </>
  );
}
