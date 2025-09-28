import { iconMap } from '~/icons';
import { ContactsIcon } from '~/icons/contacts';
import { MailIcon } from '~/icons/mail';
import { PhoneIcon } from '~/icons/phone';
import TEXT from '../../TEXT.json'; //! TODO: separate info links from text & fetch it differently
import XDrawer from './x-drawer';

export default function Contacts() {
  return (
    <XDrawer
      label={{
        children: <ContactsIcon className='w-12 m-auto' />,
        class:
          'w-16 h-14 rounded-tl-xl rounded-bl-xl bg-dotted-gray absolute right-full top-0 cursor-grab active:cursor-grabbing shadow-2xl shadow-gray-700 flex align-center',
      }}
    >
      <div className='p-2 pt-3 shadow-2xl shadow-gray-700 bg-white rounded-bl-2xl'>
        <div className='flex justify-around min-w-36'>
          {TEXT.main.info.links.map(({ icon, text, url }) => {
            const Icon = iconMap[icon];

            return (
              <a
                key={url /* TODO: consider add a hash for keying */}
                className='w-10 h-10 mx-1.5 content-center rounded-[50%] text-center'
                href={url}
                title={text}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <div className='pt-3 px-2'>
          <a className='flex pb-1' href={TEXT.main.info.mail.url}>
          <MailIcon className='w-7 pr-1' />
          <span>{TEXT.main.info.mail.text}</span>
        </a>
        <a className='flex pb-1' href={TEXT.main.info.phone.url}>
          <PhoneIcon className='w-7 pr-1' />
          <span>{TEXT.main.info.phone.text}</span>
        </a>
        </div>
      </div>
    </XDrawer>
  );
}
