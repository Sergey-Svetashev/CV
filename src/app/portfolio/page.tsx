import Link from 'next/link';
import { Fragment } from 'react';
import { Container, H2 } from '~/components';
import { iconMap } from '~/icons';
import TEXT from '~/TEXT.json';

export default function Portfolio() {
  return (
    <Container>
      <Link
        className='pt-2 inline-block text-gray-500'
        href='/'
      >{`<- ${TEXT.portfolio.back}`}</Link>
      <H2 text={TEXT.portfolio.title} />
      <p className='py-4'>{TEXT.portfolio.text}</p>
      {TEXT.portfolio.list.map(({ title, text, stack, links }, i) => (
        <div className='mb-8' key={i}>
          <h3 className='font-semibold'>[{title}]</h3>
          <div key={i} className='bg-gray-200 text-black my-1 px-4 py-2 rounded'>
            <p className='py-1'>{text}</p>
            <div className='py-1'>
              <h3 className='inline font-semibold text-sm'>{stack.title}:</h3>
              {stack.links.map(({ name, url }, i) => (
                <a className='text-sm inline-block px-1' key={i} href={url}>
                  {name}
                </a>
              ))}
            </div>
            <div className='py-1 text-xl'>
              {links.map(({ icon, text, url }, i) => {
                const Icon = icon ? iconMap[icon] : () => null;

                return (
                  <Fragment key={i}>
                    <a className='flex items-center gap-2 py-1' href={url}>
                      <Icon className='w-6 h-6' />
                      {text}
                    </a>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
