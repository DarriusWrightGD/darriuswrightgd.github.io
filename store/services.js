export const state = () => ({
  services: [
    {
      icon: 'code',
      ability: 'FullStack Developer',
      description: 'Skilled in fronted technologies such as VueJS, CSS, and HTML 5. As well as Backend technologies such as .NET and NodeJS'
    },
    {
      icon: 'cloud',
      ability: 'Cloud Engineer',
      description: 'Deep experience with cloud providers, as well as developing infrastructure as code.'
    },
    {
      icon: 'chalkboard-teacher',
      ability: 'Mentor',
      description: 'Always eager to teach those around me and encourage them to grow using the skills that I have gained throughout the years.'
    },
    {
      icon: 'book',
      ability: 'Learner',
      description: 'Learning is my passion as a Software Engineer. I am always excited by the opportunity to grow and sharpen my skills.'
    }
  ]
})

export const getters = {
  services({ services }) { return services }
}