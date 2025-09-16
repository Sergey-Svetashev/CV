import { Experience } from '~/models';
import Drawer from './drawer';
import './index.css';
import Tab from './tab';
import TabProvider from './tab-context';

const tailwinds = {
  label:
    'bg-white shadow-tinge cursor-pointer lg:p-4 rounded-tl-2xl rounded-tr-2xl  hover:shadow-tinge--active transition-shadow',
};

export default function Background({ title, experience }: { title: string; experience: Array<Experience> }) {
  return (
    <Drawer title={{ class: `${tailwinds.label} text-3xl font-semibold pt-4 p-5 select-none`, text: title }}>
      <TabProvider initTabs={new Array(experience.length).fill(0)}>
        {/* TODO! find out how to make the grid-cols- tailwind class dynamic */}
        <div className='absolute grid grid-cols-[repeat(2,_minmax(0,_max-content))_minmax(max-content,_max-content)] w-full bg-white px-4'>
          {experience.map(({ title, company, location, period, achievements }, i) => {
            return (
              <Tab
                index={i}
                key={period}
                className='table min-w-max'
                label={
                  <div key={period} className={`${tailwinds.label} lg:text-base py-3 px-4 hover:z-10`}>
                    <h3>{title}</h3>
                    <h4>
                      {company} <span className=''>{location}</span>
                    </h4>
                    <p>{period}</p>
                  </div>
                }
              >
                <ul>
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
        </div>
      </TabProvider>
    </Drawer>
  );
}
