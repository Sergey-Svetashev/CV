import XDrawer from './x-drawer';
import TEXT from '../../TEXT.json'; //! TODO: separate info links from text & fetch it differently

export default function Contacts() {
  return (
    <XDrawer
      label={{
        children: (
          <img
            src='/contacts.svg'
            alt='Contacts'
            draggable='false'
            className='w-9 m-auto opacity-90'
          />
        ),
        class:
          'w-16 h-14 pl-1 rounded-tl-xl rounded-bl-xl bg-radial-[#aaaaaa_1.2px,_#606060_1px] bg-size-[8px_8px] absolute right-full top-0 mt-2.5 cursor-grab active:cursor-grabbing shadow-black-inset flex align-center',
      }}
    >
      <div className='p-2 bg-[rgba(100,100,100,0.9)] rounded-tl-xl rounded-bl-xl'>
        <h2 className='font-semibold text-base text-center text-white'>{TEXT.main.info.title}</h2>
        <div className='flex justify-between min-w-36'>
          {TEXT.main.info.links.map(({ icon, text, url }) => (
            <a
              key={url /* TODO: consider add a hash for keying */}
              className='w-10 h-10 mx-1 content-center bg-gray-300 rounded-[50%] text-center'
              href={url}
              title={text}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </XDrawer>
  );
}
