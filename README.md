Demo repo for CI/CD demo

#### Runner Install
To install the runner, spin up a machine and SSH to it.
```
# Install runner, get the correct architecture at https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html
curl -LJO https://gitlab-runner-downloads.s3.amazonaws.com/latest/rpm/gitlab-runner_amd64.rpm
sudo yum localinstall gitlab-runner_amd64.rpm
sudo gitlab-runner start
sudo gitlab-runner register -n --url https://gitlab.com --registration-token abcd1234 --executor shell --description "Demo Runner"
# Install Docker
sudo yum install docker
sudo systemctl start docker
sudo docker run hello-world
```

### Demo Script
Demo:
1. Show repo on GitLab.  Files there.
1. Go to the CI/CD editor, and show visualize.  This shows the structure.
    - Note: some define CD as an auto build of a ready to run thing (e.g. docker build), in this definition the “build” stage would be the comple CI/CD process.  However since this is a simple example, I’m taking it to a running 
1. Show CI/CD lint, make a change and see it fail
1. Go to CLI
    - Make it say “Hello DEMO”
    - Syntax error in app.js, add comma
    - `git c -am “Break the build”` then `git push`
1. Go to GitLab and show the pipeline running.  See the test stage fail
1. Go back to CLI and fix the mistake
    - `git c -am “fix the build”` and `git push`
1. Go back to GitLab and see the build pass
1. Select container Registry and see the container updated
1. Trigger the deploy stage to see the page 
