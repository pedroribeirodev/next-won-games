module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --fike')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
