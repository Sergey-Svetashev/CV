import TEXT from "~/TEXT.json";
import { Fragment } from "react";

// TODO: fetch TEXT according to lang being set
export default () => (
  <>
    <h2>{TEXT.portfolio.title}</h2>
    <p>{TEXT.portfolio.text}</p>
    <br />
    <div>
      {TEXT.portfolio.list.map(({ text, stack }, i) => (
        <Fragment key={i}> {/* TODO: index */}
          <p>{text}</p>
          <div>
            {stack.map(({ name, url }, i) => (
              <Fragment key={i}> {/*TODO: index */}
                <a href={url}>{name}</a>
                <br />
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  </>
);
