export const state = () => ({
  experience: [
    {
      company: 'CHG Healthcare',
      jobTitles: ['Software Engineer II'],
      from: '5/2018',
      to: 'Present',
      accomplishments: [
        'Paired to develop CloudFormation for both non production and production deployments',
        'Mentored team members on development',
        'Empowered testers through building frameworks  allowing  them to test at new levels',
        'Worked heavily with product owners to deliver value to the user',
        'Improved CI/CD pipelines to speed up build times'
      ],
      technologiesUsed: ['AWS', 'CloudFormation', 'NodeJS', 'VueJS', 'JavaScript', 'Jest', 'SAM Local', 'Jenkins 2']
    },
    {
      company: 'Dealertrack',
      jobTitles: ['Senior Software Engineer', 'Software Engineer'],
      from: '4/2016',
      to: '5/2018',
      accomplishments: [
        'Paired to architect a JSON method of building, deploying, and creating AWS resources',
        'Created build and deployment pipelines for various types of projects  (e.g. .NET Core and  Angular)',
        'Set up automation to clean up security group issues and terminate unused instances',
        'Helped develop a method of tracking deployment statistics'
      ],
      technologiesUsed: [
        'AWS',
        ' C#',
        'Docker',
        'Terraform',
        'Angular',
        'Jenkins 2',
        'Jest',
        'Visual Studio Code',
        'IntelliJ',
        'Git',
        'NodeJS'
      ]
    },
    {
      company: 'Willis Towers Watson',
      jobTitles: ['Software Developer'],
      from: '8/2015',
      to: '4/2016',
      accomplishments: [
        'Tested the quality of software',
        'Created and maintained  features for the company’s website',
        'Started a tool to obfuscate production data and port it to a different environment'
      ],
      technologiesUsed: [
        'C#',
        'Visual Studio',
        'ReactJS',
        'Redux',
        'TeamCity',
        'NUnit',
        'NodeJS',
        'ES6',
        'Webpack',
        'Git',
        'Karma',
        'and GulpJS'
      ]
    },
    {
      company: 'Pluralsight',
      jobTitles: ['Student Developer/Team Lead'],
      from: '1/2015',
      to: '6/2015',
      accomplishments: [
        'Worked heavily in pair programming',
        'Implemented tests for code using TDD',
        'Created a tools to automate the workflow of course transcription'
      ],
      technologiesUsed: [
        'C#',
        'Visual Studio',
        'Octopus Deploy',
        'TeamCity,',
        'AngularJS',
        'CSS',
        'JavaScript',
        'Cassandra',
        'Git',
        'HTML'
      ]
    }
  ]
});

export const getters = {
  experience(state) {
    return state.experience;
  }
};
