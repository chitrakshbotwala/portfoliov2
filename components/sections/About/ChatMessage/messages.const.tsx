import {
  type Message,
  type OptionSelectMessage,
} from './messages.types';

const getAge = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  let age = year - 1996;
  if (month < 6 || (month === 6 && day < 6)) age--;

  return age;
};

export const FAST_MODE_ID = 'fast-mode';

export const incoming: Message[] = [
  {
    content: (
      <>
        I&apos;m <strong>Chitraksh Maheshwari</strong>, here are some quick
        facts about me:{' '}
        <ul
          style={{ listStyle: 'none', margin: 0, padding: '0 1em' }}
        >
          <li>🌎 Indian</li>
          <li>🎂 {getAge()} years old</li>
          <li>
            🎓 Computer Engineer (
            <a
              href="https://www.iitkgp.ac.in/"
              rel="noopener noreferrer"
              target="_blank"
              title="IIT KGP"
            >

            </a>
            )
          </li>
          <li>🎮 PC gaming enjoyer</li>
        </ul>
      </>
    ),
    direction: 'incoming',
    id: '1',
    status: 'writing',
    type: 'text',
  },
  {
    content: (
      <>What would you like to know about me? Ask right away!</>
    ),
    direction: 'incoming',
    id: '2',
    status: 'writing',
    type: 'text',
  },
];

export const optionSelect: OptionSelectMessage = {
  content: [
    {
      id: 'pronounce',
      label: 'How do you pronounce your name?',
      responses: [
        {
          content: (
            <>
              <strong>Chitraksh</strong> sounds almost like{' '}
              <strong>
                <em>Chi</em>
              </strong>
              —
              <strong>
                <em>Traak</em>
              </strong>
              —
              <strong>
                <em>sh</em>
              </strong>
              .<br />
              <br />
              And in Hindi, we pronounce{' '}
              <strong>Maheshwari</strong> almost like{' '}
              <strong>
                <em>Maa-hey-sh-worry</em>
              </strong>
              .
            </>
          ),
          direction: 'incoming',
          id: 'pronounce-1',
          status: 'invisible',
          type: 'text',
        },
      ],
    },
    {
      id: FAST_MODE_ID,
      label: 'Can you please just type faster?',
      responses: [
        {
          content: (
            <>
              Absolutely!
              <br />
              <strong>
                <em style={{ fontSize: '0.8em' }}>
                  *cracks knuckles*
                </em>
              </strong>
            </>
          ),
          direction: 'incoming',
          id: `${FAST_MODE_ID}-response`,
          status: 'invisible',
          type: 'text',
        },
      ],
    },
  ],
  direction: 'outgoing',
  id: 'option-select',
  status: 'visible',
  type: 'option-select',
};

export const end: Message = {
  content: (
    <>
      Well, that was a lovely conversation 🤩
      <br />
      <br />
      If you want to know more about me, feel free to keep on
      scrolling!
    </>
  ),
  direction: 'incoming',
  id: 'end',
  status: 'writing',
  type: 'text',
};

export const messages = [...incoming, optionSelect];
