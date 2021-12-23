# Portfolio
## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/NodeJS-20232A?style=for-the-badge&logo=node.js&logoColor=68A063)
![Express](https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=000000)
![MongoDB](https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=mongodb&logoColor=4B33D)


## Deployment (with Vercel)
- Create a *Personal Access Token `(PAT)` on Github, with access to all your repositories. 
- Copy the `PAT` and save it for later use
- Create an account on Vercel and connect your Github account
- Create a [![image](https://img.shields.io/badge/New%20Project-000000?style=for-the-badge)](https://vercel.com/new)
- Choose `Import Git Repository` and choose the cloned repository
- The `Project Name` may be changed but keep the `Framework Preset (Next.js)`, `Root Directory (./)` and `Build Settings` intact
- Add the following environment variable with key: `PAT` and value: `<40-character-PAT>` (replace with actual PAT without the angular <> brackets)
- Press the ![image](https://img.shields.io/badge/Deploy-0171F3?style=for-the-badge) button

**PATs must follow GitHub's new authentication token format : `ghp_<37-character-Base62-String>`*

## How to update content
Deployment with Vercel automatically sets up your repository for continuous deployment. Changes committed and pushed to master should reflect in a few minutes on your site. If your deployment fails, check ![image](https://img.shields.io/badge/Build%20Logs-ffffff) on Vercel.

## Running locally
- Requirements: Node, NPM and Yarn (LTS)*
- Navigate to your cloned project, and run `yarn` on a terminal
- Create a file named `.env.local` and add the PAT environment variable here (`PAT=<40-character-pat>`)
- Run `yarn dev` to test the Next.js app on `localhost:3000`
- Production builds can also be tested using `yarn build` and `yarn start`

*`npm` commands also work
