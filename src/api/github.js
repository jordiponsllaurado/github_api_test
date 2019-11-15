import request from './request'

const getUser = user => request(`https://api.github.com/users/${user}`)

const getBranches = (user, repo) => request(`https://api.github.com/repos/${user}/${repo}/branches`)

export { getUser, getBranches }
