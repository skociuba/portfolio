export const summaryContent = {
  title: 'Summary',
  description: `Hello, My name is Sebastian Kociuba. I am React front-end developer
    with three years of commercial experience. I'm easy learning
    and hardworking person, who can work on existing projects, as well
    as create new ones from scratch. Without any issues I can add new
    features, find and fix bugs, and make sure all well tested changes
    can go to production using a full CI/CD pipeline. I get along easily
    with people, and my English is good, so without any issues I can
    talk and understand business requirements. I would be very happy to
    talk more in person, and be able to present my value and experience
    more in details to you and your company.`,
  phone: '505 683 245',
  email: 'kociuba.sebastian@gmail.com',
  src: '/images/profile.jpg',
};

export const skills = {
  title: 'Using Technologies',
  items1: [
    {
      subTitle: 'Front-end',
      description: [
        'React',
        'Redux',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind',
        'Styled Components',
        'Storybook',
      ],
    },
  ],
  items2: [
    {
      subTitle: 'Back-end',
      description: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    },
    {
      subTitle: 'Other',
      description: [
        'Git / GitHub',
        'Jira',
        'Confluence',
        'CI/CD',
        'AWS',
        'NPM',
      ],
    },
  ],
};
export const experienceAndEducation = {
  title: 'Experience and Education',
  items: [
    {
      subTitle: 'Experience:',
      description: [
        {
          name: 'Junior Frontend Developer HSBC:',
          date: '2021 – now',
        },
        {
          name: 'Operator of the cutting machine Lear Corporation:',
          date: '2010 – 2021',
        },
        {
          name: ' Shop–assistant in a furniture store Domex:',
          date: '2009 – 2010',
        },
        {
          name: 'Professional experience in forestry Nadleśnictwo Radymno:',
          date: '2007 – 2008',
        },
      ],
    },
    {
      subTitle: 'Education:',
      description: [
        {
          name: 'University of Agriculture name of Hugon Kołłątaj:',
          date: '2021 – 2007',
        },
      ],
    },
  ],
};

export const portfolio = [
  {
    name: 'Space shuttle',
    link: 'http://www.promykosmiczne.pl.s3-website-eu-west-1.amazonaws.com/',
    list: [
      "I'm a fanatic of space flight, my first page is about planes, manned and unmanned.",
      'Im using here classic CSS3, HTML5, and pure Java Script',
      'To deploy I used AWS S3 bucket, and CloudFront CDN.',
    ],
    img: '/images/promy.png',
  },
  {
    name: 'Portfolio, current page',
    link: 'https://portfolio-tau-ten-43.vercel.app/',
    list: [
      "I start learning some new features, and i decided to create my own portfolio, i'm using here Next.js, Tailwind,",
      'To deploy I used Vercel.',
    ],
    img: '/images/portfolio.png',
  },
  {
    name: 'Web Developer Blog',
    link: 'http://webdeveloperblog.cba.pl/',
    list: [
      'When i was learning i needed to writen my knowledge, so i started created blog, ',
      'Im using here classic CSS3, HTML5, and pure Java Script for searching component',
      'To deploy I used CBA hosting.',
    ],
    img: '/images/blog.png',
  },
  {
    name: 'NPM package',
    link: 'https://www.npmjs.com/package/seba-container-wrapper',
    list: [
      'Here I learned how to create and publish my own NPM package',
      "In addition, I'm using here CI/CD pipeline and Storybook for testing my components",
      'To deploy I used AWS S3 bucket.',
    ],
    img: '/images/npm.png',
  },
  {
    name: 'Task Manager',
    link: 'http://taskmanager.cba.pl/',
    list: [
      'Here are some of my first steps in React, I created a simple task manager',
      "I'm using here redux, react-router, and hooks",
      'To deploy I used CBA hosting.',
    ],
    img: '/images/taskmanager.png',
  },
];
