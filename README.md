# Portfolio
My Portfolio

### Steps to deploy React Repo On Github Pages

# Create the GitHub repository
# Adding the GitHub Pages dependency packages
  $ npm install gh-pages --save-dev

# Adding the properties to the package.json file
  "homepage": "https://<Username>.github.io/<Repository-name>"
  "scripts":{
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build" 
  }

# Pushing the code updates to the GitHub repository and finally deploying the application  
  $ git add .
  $ git commit -m "commit message"
  $ git push
  $ npm run deploy

# View the deployed app on GitHub

# Note : Tips for Managing Your Deployment
1. Automatic Deployment: Set up a GitHub Actions workflow to automate the deployment process every time you push changes to the main branch.
2. Custom Domain: Use a custom domain by adding a CNAME file to the public folder with your custom domain name.
3. Branch Management: Ensure that the gh-pages branch is protected or managed properly to prevent unintended deletions or modifications.

# https://www.geeksforgeeks.org/deployment-of-react-application-using-github-pages/