import { H2 } from '~/components/h2';
import TEXT from '~/TEXT.json';

export default () => (
  <>
    <H2 text={TEXT.portfolio.title} />
    <p className='py-4'>{TEXT.portfolio.text}</p>
    {TEXT.portfolio.list.map(({ text, stack }, i) => (
      <div key={i} className='bg-gray-400'>
        <p className='py-4'>{text}</p>
        <div className='py-4'>
          {stack.map(({ name, url }, i) => (
            <a className='text-xl inline-block px-1' key={i} href={url}>
              {name}
            </a>
          ))}
        </div>
      </div>
    ))}
  </>
);
