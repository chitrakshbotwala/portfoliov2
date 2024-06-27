export const testimonials = [
  {
    author: {
      name: 'Ema Casas',
      picture: '/images/testimonials/ema-casas.webp',
      role: 'Product Owner',
    },
    quote: (
      <p>
        chitraksh <strong>crushes</strong> backend work. He&apos;s
        always willing to jump in and help, so <strong>fast</strong>{' '}
        and <strong>efficient</strong>, just an all around{' '}
        <strong>excellent</strong> dev.
      </p>
    ),
  },
  {
    author: {
      name: 'Rodrigo Diego',
      picture: '/images/testimonials/rodrigo-diego.webp',
      role: 'Head of UX',
    },
    quote: (
      <>
        <p>
          chitraksh is an <strong>excellent</strong> professional,
          he&apos;s fun to work with and he&apos;s always willing to
          help.
        </p>
        <p>
          Even in critical situations, chitraksh has a{' '}
          <strong>
            good attitude on problem-solving and an innate ability to
            analyze
          </strong>
          . He&apos;s also a reference in React, I learned a lot
          working with him.
        </p>
      </>
    ),
  },
  {
    author: {
      name: 'Olivia Hendrick',
      picture: '/images/testimonials/olivia-hendrick.webp',
      role: 'UX Designer',
    },
    quote: (
      <p>
        chitraksh is <strong>fantastic</strong> to work with!
      </p>
    ),
  },
  {
    author: {
      name: 'Rafael de Paula',
      picture: '/images/testimonials/rafael-paula.webp',
      role: 'Backend Engineer',
    },
    quote: (
      <p>
        I&apos;ve worked with chitraksh for only about a month, but even
        in this short time he was able to do an{' '}
        <strong>excellent</strong> job, delivering a core feature to
        the client. He&apos;s very <strong>engaged</strong> and{' '}
        <strong>committed</strong> on delivering quality software.
      </p>
    ),
  },
  {
    author: {
      name: 'Luiz Eduardo Oku',
      picture: '/images/testimonials/luiz-oku.webp',
      role: 'Frontend Engineer',
    },
    quote: (
      <>
        <p>
          chitraksh is an <strong>excellent</strong> professional:
          he&apos;s very <strong>dedicated</strong> and he&apos;s
          always looking to improve his skills.
        </p>
        <p>
          I&apos;ve worked with chitraksh in 2 different projects, and he
          always stood out thanks to his <strong>knowledge</strong>,{' '}
          <strong>willpower</strong> and his easy-going way of
          interacting with the team.
        </p>
      </>
    ),
  },
  {
    author: {
      name: 'Daniela Jagher',
      picture: '/images/testimonials/daniela-jagher.webp',
      role: 'UI/UX Designer',
    },
    quote: (
      <>
        <p>
          I&apos;ve worked with chitraksh in a very detailed and
          extensive project, where he proved to be a very{' '}
          <strong>dedicated</strong> and <strong>committed</strong>{' '}
          professional, paying attention to all details.
        </p>
        <p>
          chitraksh is very <strong>communicative</strong>, and had a
          great performance aligning design and code, being able to
          develop exceptional interfaces.
        </p>
      </>
    ),
  }
];

export type Testimonial = (typeof testimonials)[0];
