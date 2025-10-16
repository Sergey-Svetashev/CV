import { Container, H2 } from '~/components';
import TEXT from '~/TEXT.json'; // TODO! fetch!

export default function Home() {
  return (
    <>
      {/* Headings */}
      <div id='drawer-edge' className='w-full bg-white text-black pt-5 shadow-plain'>
        <Container>
          <h1 className='font-bold uppercase text-[3rem] leading-14 md:text-[7rem] md:leading-24'>
            {TEXT.main.name}
            <br />
            {TEXT.main.family}
          </h1>
          <h2 className='font-semibold text-[1.7rem] md:text-[3rem]'>{TEXT.main.headline}</h2>
        </Container>
        <a
          href='/portfolio'
          className='text-3xl text-center p-4 mt-2 block bg-gray-400'
        >{`${TEXT.portfolio.title} ->`}</a>
      </div>
      {/* Scrollable content */}
      <div className='pb-20 max-h-[calc(100vh-250px)] md:max-h-[calc(100vh-360px)] overflow-y-scroll'>
        <Container>
          <H2 text={TEXT.main.title} />
          {TEXT.main.text.map((t, i) => (
            <p className='indent-3 py-0.5 md:py-1.5 md:text-xl' key={i}>
              {t}
            </p>
          ))}
        </Container>
      </div>
    </>
  );
}
