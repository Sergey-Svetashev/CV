import { Link } from '~/models';

export default function Profile({ links }: { links: Array<Link> }) {
  return (
    <ul>
      {links.map(({ text, url }, i) => (
        <li key={i}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
}
