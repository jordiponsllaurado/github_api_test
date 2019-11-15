import request from './request'

const GITHUB_URL = 'https://api.github.com'

const getUser = user => request(`${GITHUB_URL}/users/${user}`)

const getBranches = (user, repo) => request(`${GITHUB_URL}/repos/${user}/${repo}/git/refs`)

const postRef = (user, repo) => request(
  {
    method: 'POST',
    path: `${GITHUB_URL}/repos/${user}/${repo}/git/refs`,
    params: {
      ref: "refs/heads/featureA",
      sha: "aa218f56b14c9653891f9e74264a383fa43fefbd"
    }
  }
)

export { getUser, getBranches, postRef }
