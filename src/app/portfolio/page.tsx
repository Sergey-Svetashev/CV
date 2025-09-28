import { Fragment } from 'react';
import { Container, H2 } from '~/components';
import TEXT from '~/TEXT.json';

export default () => (
  <Container>
    <H2 text={TEXT.portfolio.title} />
    <p className='py-4'>{TEXT.portfolio.text}</p>
    {TEXT.portfolio.list.map(({ title, text, stack, links }, i) => (
      <div className='mb-8' key={i}>
        <h3 className='font-semibold'>[{title}]</h3>
        <div key={i} className='bg-gray-200 my-1 px-4 py-2 rounded'>
          <p className='py-1'>{text}</p>
          <div className='py-1'>
            <h3 className='inline font-semibold'>{stack.title}:</h3>
            {stack.links.map(({ name, url }, i) => (
              <a className='text inline-block px-1' key={i} href={url}>
                {name}
              </a>
            ))}
          </div>
          <div className='py-1'>
            {links.map(({ text, url }, i) => (
              <Fragment key={i}>
                <a className='' href={url}>
                  {text}
                </a>
                <br />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ))}
  </Container>
);
