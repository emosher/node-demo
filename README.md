Demo repo for CI/CD demo

#### Runner Install
To install the runner, spin up a machine and SSH to it.
```
curl -LJO https://gitlab-runner-downloads.s3.amazonaws.com/latest/rpm/gitlab-runner_amd64.rpm
sudo yum localinstall gitlab-runner_amd64.rpm
sudo gitlab-runner start
sudo gitlab-runner register -n --url https://gitlab.com --registration-token abcd1234 --executor shell --description "Demo Runner"
```
