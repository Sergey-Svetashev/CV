import TEXT from "~/TEXT.json";
import Background from "~/views/background";

export default function Home() {
  // TODO: fetch TEXT according to lang being set
  return (
    <>
      <div className="p-4 lg:p-8">
        <h1 className="font-bold uppercase mb-4">
          {TEXT.main.name}
          <br />
          {TEXT.main.family}
        </h1>
        <h2 className="font-semibold text-3xl mb-4">{TEXT.main.headline}</h2>
        {TEXT.main.text.map((t, i) => (
          <p className="indent-2.5 py-0.5" key={i}>
            {t}
          </p>
        ))}
      </div>
      <div id="info"></div>
      <div id="skills"></div>
      <div id="experience" className="fixed w-full bottom-0">
        <Background title={TEXT.experience.title} experience={TEXT.experience.data} />
      </div>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer TBD
      </footer> */}
    </>
  );
}
