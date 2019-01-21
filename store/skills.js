export const state = () => ({
  skills: [
    {
      name: 'VueJS',
      progress: 70
    },
    {
      name: 'JavaScript (ES5/ES6)',
      progress: 85
    },
    {
      name: 'AWS',
      progress: 75
    },
    {
      name: 'NodeJS',
      progress: 80
    },
    {
      name: 'Docker',
      progress: 85
    },
    {
      name: 'Jenkins',
      progress: 75
    },
    {
      name: "Git",
      progress: 90
    },
    {
      name: "CSS",
      progress: 70
    }
  ]
})

export const getters = {
  skills: (state) => state.skills
}