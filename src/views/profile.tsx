import { ReactNode } from "react";
import { Link } from "~/models";

export default function Profile({ links }: { links: Array<Link> }): ReactNode {
  return (
    <ul>
      {links.map(({ text, url }) => (
        <li>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
}
