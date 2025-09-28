import { Container, H2 } from '~/components';
import TEXT from '~/TEXT.json';

export default function Home() {
  // TODO: fetch TEXT according to lang being set
  return (
    <>
      {/* Headings */}
      <div className='w-full bg-white max-h-[30vh] md:max-h-[47vh] py-5 shadow-plain'>
        <Container>
          <h1 className='font-bold uppercase text-[3rem] leading-14 md:text-[7rem] md:leading-24'>
            {TEXT.main.name}
            <br />
            {TEXT.main.family}
          </h1>
          <h2 id='drawer-edge' className='font-semibold text-[1.7rem] md:text-[3rem]'>
            {TEXT.main.headline}
          </h2>
        </Container>
      </div>
      {/* Scrollable content */}
      <div className='flex h-[calc(100vh-265px)] overflow-y-scroll md:max-h-[calc(100vh-380px)]'>
        <Container>
          <H2 text={TEXT.main.title} />
          {TEXT.main.text.map((t, i) => (
            <p className='indent-3 py-0.5 md:py-1.5 md:text-xl' key={i}>
              {t}
            </p>
          ))}
          <a
            href='/portfolio'
            className='self-end text-3xl p-4 flex justify-self-end'
          >{`${TEXT.portfolio.title} ->`}</a>
        </Container>
      </div>
    </>
  );
}
