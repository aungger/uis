import image from 'static/test.jpg';

import {
  ic_home as home,
  ic_code as code,
  ic_timeline as timeline,
  ic_equalizer as equalizer,
  ic_create as create,
  ic_work as work,
  ic_school as school
} from 'react-icons-kit/md';

export const DISABLEDFEATURES = [
  "modal"
];

export const PROJECTS = [
  {
    title: 'First Home',
    image: image,
    description: 'First single family home that I have ever purchased',
    containsSourceCode: false
  },
  {
    title: 'Dotfiles',
    image: image,
    description: 'My dotfiles configuration',
    containsSourceCode: false
  },
  {
    title: 'Scripts',
    image: image,
    description: 'Common scripts that help me with day to day as an engineer',
    containsSourceCode: false
  }
];

export const TABS = [
  {
    name: 'Home',
    icon: 'thing',
  },
  {
    name: 'Projects',
    icon: 'code',
  },
  {
    name: 'Experience',
    icon: 'timeline',
  },
  {
    name: 'Skills',
    icon: 'thing'
  },
  {
    name: 'Blog',
    icon: 'another',
  }
];

export const BLOGPOSTS = [
  {
    title: 'Blog Post 1',
    image: image,
    description: 'Blog Post 1.',
  },
  {
    title: 'Blog Post 2',
    image: image,
    description: 'Blog Post 2.',
  },
  {
    title: 'Blog Post 3',
    image: image,
    description: 'Blog Post 3.',
  },
  {
    title: 'Blog Post 4',
    image: image,
    description: 'Blog Post 4.',
  },
  {
    title: 'Blog Post 5',
    image: image,
    description: 'Blog Post 5.',
  },
  {
    title: 'Blog Post 6',
    image: image,
    description: 'Blog Post 6.',
  },
  {
    title: 'Blog Post 7',
    image: image,
    description: 'Blog Post 7.',
  },
  {
    title: 'Blog Post 8',
    image: image,
    description: 'Blog Post 8.',
  },
  {
    title: 'Blog Post 9',
    image: image,
    description: 'Blog Post 9.',
  }
];

export const HOBBIES = [
  {
    title: 'Breaking',
    image: image,
    description: 'I started breakdancing in 2010 in college with a group called HHCO (Hip Hop Culture Organization). In 2016, I was asked to join a crew called Knock Out Kingz. Everyday I learn more about this dance and it has really shaped the way I view the world.',
  },
  {
    title: 'Computer Science',
    image: image,
    description: 'In college, I started as a Finance major, until my senior year where I which to Computer Science. As a kid, I alwayed love being on the computer. I really love the challenges and creative thinking that computer science has to offer.',
  },
  {
    title: 'Writing',
    image: image,
    description: 'This is one of my newer hobbies that I have recently picked up. I believe that it is healthy for us to write about our thoughts and ideas. It gives us a way to express how we feel and reflect on it.',
  }
];

export const SKILLS = [
  {
    title: "Programming Languages",
    data: [
      'Go',
      'JavaScript',
      'HTML / CSS',
      'Java',
      'Python',
      'SQL'
    ]
  },
  {
    title: "Platforms",
    data: [
      'Linux',
      'AWS',
      'Kubernetes'
    ]
  },
  {
    title: "Tools",
    data: [
      'Terraform',
      'Jenkins',
      'Spinnaker',
      'Chef',
      'Kops'
    ]
  },
  {
    title: "Others",
    data: [
      'Jira',
      'Confluence'
    ]
  },
  {
    title: "SCM",
    data: [
      'GitHub'
    ]
  }
];

export const EXPERIENCES = [
  {
    date: '2020 - Present',
    icon: work,
    location: 'Rapid7, Inc. - InsightConnect',
    position: 'Software Engineer II',
    description: "Implementing frontend features for the InsightConnect product."
  },
  {
    date: '2019 - 2020',
    icon: work,
    location: 'Rapid7, Inc. - Platform Delivery',
    position: 'Software Engineer II',
    description: "Lead a project migrating all of InsightIDR's infrastructure to be managed by Terraform."
  },
  {
    date: '2018 - 2019',
    icon: work,
    location: 'Rapid7, Inc. - Platform Delivery',
    position: 'Software Engineer I',
    description: 'Assisted with on-call duties / bug issues related with Cassandra, Elasticsearch, and Consul.'
  },
  {
    date: '2017 - 2018',
    icon: work,
    location: 'Rapid7, Inc. - Information Security',
    position: 'Platform Engineer II',
    description: 'Contributed to an internal tool named AWSQuery in order to identify misconfigured infrastructure.'
  },
  {
    date: '2016 - 2017',
    icon: work,
    location: 'Rapid7, Inc. - Information Security',
    position: 'Platform Engineer I',
    description: 'Established a software development lifecycle for merging / building code. Deployed the first Kubernetes cluster at Rapid7 in AWS used kops.'
  },
  {
    date: '2015 - 2016',
    icon: work,
    location: 'Cisco Systems, Inc. - Context Service',
    position: 'Software Engineer I',
    description: "Implemented new frontend features for Cisco's Context Service product. Improved continuous integration / deployment processes for faster builds and deployments."
  },
  {
    date: '2010 - 2015',
    icon: school,
    location: 'University of Massachusetts Amherst',
    position: 'Student',
    description: 'Graduated Cum Laude with a degree in Computer Science and a minor in Chinese and Information Technology.'
  }
];
