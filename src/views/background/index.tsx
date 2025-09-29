import { Experience } from '~/models';
import YDrawer from './y-drawer';
import Tab from './tab';
import { DrawerCtxProvider, TabCtxProvider } from './context';

const gridCols: Record<number, string> = {
  3: 'grid-cols-[repeat(2,_minmax(0,_max-content))_minmax(max-content,_max-content)]',
  4: 'grid-cols-[repeat(3,_minmax(0,_max-content))_minmax(max-content,_max-content)]',
  5: 'grid-cols-[repeat(4,_minmax(0,_max-content))_minmax(max-content,_max-content)]',
};

export default function Background({
  title,
  experience,
}: {
  title: string;
  experience: Array<Experience>;
}) {
  return (
    <DrawerCtxProvider>
      <YDrawer
        title={{
          class:
            'bg-dotted-gray cursor-grab active:cursor-grabbing rounded-tl-2xl rounded-tr-2xl text-white shadow-plain---pitch-black-inset w-full absolute bottom-full px-5',
          text: title,
        }}
      >
        <div className={`relative grid ${gridCols[experience.length]} w-full bg-white text-black pt-3 px-4`}>
          <TabCtxProvider initTabs={new Array(experience.length).fill(0)}>
            {experience.map(({ title, company, location, type, period, achievements }, i) => {
              return (
                <Tab
                  index={i}
                  key={period}
                  className='table min-w-max'
                  label={
                    <div
                      key={period}
                      className='bg-white cursor-pointer lg:p-4 rounded-tl-2xl rounded-tr-2xl transition-shadow shadow-tinge hover:shadow-tinge--active tab lg:text-base py-3 px-4 border border-gray-200 border-b-0'
                    >
                      <h3>{title}</h3>
                      <h4>
                        {company} | {location} <span className='hidden sm:inline'>{type}</span>
                      </h4>
                      <p>{period}</p>
                    </div>
                  }
                >
                  <ul className='pt-4 px-8 pb-8'>
                    {achievements.map(({ text, details }, i) => (
                      <li key={`${period}_${++i}`}>
                        {text}
                        {details ? (
                          <ul>
                            {details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </Tab>
              );
            })}
          </TabCtxProvider>
        </div>
      </YDrawer>
    </DrawerCtxProvider>
  );
}
