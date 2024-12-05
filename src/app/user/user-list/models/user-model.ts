import { Users } from '../../types';

export const DUMMY_USERS: Users[] = [
  {
    id: 1,
    name: 'Max',
    tasks: [
      {
        taskId: 101,
        taskName: 'Devops upload',
        taskDescription:
          'Max needs to upload sprints to Azure DevOps to improve system stability and maintenance.',
        raisedOnDate: '2023-10-01T10:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 122,
        taskName: 'Server Maintenance',
        taskDescription:
          'Max is responsible for performing routine server maintenance to ensure optimal performance.',
        raisedOnDate: '2023-10-02T14:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Stephen',
    tasks: [
      {
        taskId: 102,
        taskName: 'Comprehensive Code Review for Latest Submissions',
        taskDescription:
          "Stephen is responsible for meticulously reviewing the latest code submissions to ensure they meet the company's stringent quality assurance standards, identifying potential areas for improvement, and providing detailed feedback to the development team.",
        raisedOnDate: '2023-10-02T11:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 123,
        taskName: 'Mentoring New Developers',
        taskDescription:
          'Stephen is mentoring new developers to help them understand the codebase and development practices.',
        raisedOnDate: '2023-10-03T10:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Raven',
    tasks: [
      {
        taskId: 103,
        taskName: 'Database Migration',
        taskDescription:
          'Raven needs to migrate the database to the new server to increase performance.',
        raisedOnDate: '2023-10-03T09:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 124,
        taskName: 'Backup Strategy Implementation',
        taskDescription:
          'Raven is implementing a new backup strategy to secure data against potential loss.',
        raisedOnDate: '2023-10-04T08:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Brett',
    tasks: [
      {
        taskId: 104,
        taskName: 'Complete Redesign of User Interface for Enhanced Experience',
        taskDescription:
          'Brett is tasked with a comprehensive redesign of the user interface to significantly improve the user experience by implementing modern design principles, enhancing intuitiveness, and ensuring accessibility across all platforms.',
        raisedOnDate: '2023-10-04T08:30:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 5,
    name: 'Hudson',
    tasks: [
      {
        taskId: 105,
        taskName: 'Security Audit',
        taskDescription:
          'Hudson will conduct a comprehensive security audit to identify vulnerabilities.',
        raisedOnDate: '2023-10-05T14:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 125,
        taskName: 'Penetration Testing',
        taskDescription:
          'Hudson is performing penetration testing to evaluate and strengthen the security posture.',
        raisedOnDate: '2023-10-06T10:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 6,
    name: 'Rafael',
    tasks: [
      {
        taskId: 106,
        taskName: 'API Development',
        taskDescription:
          "Rafael is developing new APIs to enhance the application's functionality.",
        raisedOnDate: '2023-10-06T13:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 126,
        taskName: 'API Documentation',
        taskDescription:
          'Rafael is updating the API documentation to reflect the new changes.',
        raisedOnDate: '2023-10-07T09:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 7,
    name: 'Jack',
    tasks: [
      {
        taskId: 107,
        taskName: 'Comprehensive Performance Testing Across All Modules',
        taskDescription:
          'Jack is conducting extensive performance tests to ensure that the application meets speed and efficiency requirements across all modules, optimizing where necessary to achieve optimal performance.',
        raisedOnDate: '2023-10-07T12:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 127,
        taskName: 'Load Testing',
        taskDescription:
          'Jack will carry out load testing to assess application behavior under high usage conditions.',
        raisedOnDate: '2023-10-08T11:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 8,
    name: 'Gregg',
    tasks: [
      {
        taskId: 108,
        taskName: 'User Research',
        taskDescription:
          'Gregg is conducting user research to gather feedback for the next product iteration.',
        raisedOnDate: '2023-10-08T15:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 9,
    name: 'Adam',
    tasks: [
      {
        taskId: 109,
        taskName: 'Bug Fixing',
        taskDescription:
          'Adam is fixing bugs reported by the QA team to improve software reliability.',
        raisedOnDate: '2023-10-09T16:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 128,
        taskName: 'QA Coordination',
        taskDescription:
          'Adam is coordinating with the QA team to ensure all issues are addressed efficiently.',
        raisedOnDate: '2023-10-10T09:30:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 10,
    name: 'Vertiser',
    tasks: [
      {
        taskId: 110,
        taskName: 'Development of a New Comprehensive Marketing Strategy',
        taskDescription:
          'Vertiser is developing a new, comprehensive marketing strategy designed to significantly boost product visibility, engage target demographics, and leverage multi-channel marketing techniques to maximize outreach and conversion.',
        raisedOnDate: '2023-10-10T17:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 11,
    name: '',
    tasks: [
      {
        taskId: 111,
        taskName: 'Documentation Update',
        taskDescription:
          'Updating the project documentation for the latest release.',
        raisedOnDate: '2023-10-11T18:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 12,
    name: 'Olivia',
    tasks: [
      {
        taskId: 112,
        taskName: 'Project Timeline Planning',
        taskDescription:
          'Olivia is responsible for developing a detailed project timeline to ensure timely delivery of all project phases.',
        raisedOnDate: '2023-10-12T09:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 129,
        taskName: 'Resource Allocation',
        taskDescription:
          'Olivia is managing resource allocation to optimize project execution.',
        raisedOnDate: '2023-10-13T10:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 13,
    name: 'Liam',
    tasks: [
      {
        taskId: 113,
        taskName: 'Continuous Integration Setup',
        taskDescription:
          'Liam is tasked with setting up a continuous integration pipeline to streamline the development process and improve deployment efficiency.',
        raisedOnDate: '2023-10-13T09:30:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 14,
    name: 'Sophia',
    tasks: [
      {
        taskId: 114,
        taskName: 'Customer Feedback Analysis',
        taskDescription:
          'Sophia is aggregating and analyzing customer feedback to identify areas for product improvement and innovation.',
        raisedOnDate: '2023-10-14T10:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 15,
    name: 'James',
    tasks: [
      {
        taskId: 115,
        taskName: 'Infrastructure Scaling',
        taskDescription:
          'James is evaluating and implementing infrastructure scaling solutions to accommodate increasing user demand.',
        raisedOnDate: '2023-10-15T10:30:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 130,
        taskName: 'Cloud Migration',
        taskDescription:
          'James is planning and executing the migration of services to the cloud to enhance scalability.',
        raisedOnDate: '2023-10-16T11:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 16,
    name: 'Ava',
    tasks: [
      {
        taskId: 116,
        taskName: 'Legal Compliance Review',
        taskDescription:
          'Ava is conducting a thorough review of all company operations to ensure legal compliance and address potential legal risks.',
        raisedOnDate: '2023-10-16T11:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 17,
    name: 'William',
    tasks: [
      {
        taskId: 117,
        taskName: 'New Product Feature Development',
        taskDescription:
          'William is leading the development of new product features based on customer feedback and market analysis.',
        raisedOnDate: '2023-10-17T11:30:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 18,
    name: 'Isabella',
    tasks: [
      {
        taskId: 118,
        taskName: 'Crisis Management Strategy Formulation',
        taskDescription:
          'Isabella is formulating crisis management strategies to prepare for potential operational disruptions and ensure business continuity.',
        raisedOnDate: '2023-10-18T12:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 19,
    name: 'Ethan',
    tasks: [
      {
        taskId: 119,
        taskName: 'Supplier Negotiations',
        taskDescription:
          'Ethan is engaging in negotiations with key suppliers to secure better terms and ensure a reliable supply chain.',
        raisedOnDate: '2023-10-19T12:30:00Z',
        markedAsComplete: false,
      },
    ],
  },
  {
    id: 20,
    name: 'Mia',
    tasks: [
      {
        taskId: 120,
        taskName: 'Competitive Market Analysis',
        taskDescription:
          'Mia is conducting a comprehensive analysis of competitors to identify market trends and opportunities for differentiation.',
        raisedOnDate: '2023-10-20T13:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 124,
        taskName: 'Product Launch Planning',
        taskDescription:
          'Mia is planning the upcoming product launch to ensure maximum market impact.',
        raisedOnDate: '2023-10-21T09:00:00Z',
        markedAsComplete: false,
      },
      {
        taskId: 126,
        taskName: 'Product Launch Banning',
        taskDescription:
          'Mia is banning the upcoming product launch to ensure maximum market impact.',
        raisedOnDate: '2023-10-25T09:00:00Z',
        markedAsComplete: false,
      },
    ],
  },
];
