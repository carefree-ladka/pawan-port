pipeline{
    agent any
    environment{
        GITHUB_REPO='carefree-ladka/pawan-port'
        GH_PAGES_BRANCH='gh-pages'
    }
    stages{
        stage('Checkout'){
            steps{
                checkout([$class: 'GitSCM',branches:[[name:'*/master']],
                userRemoteCongigs:[[url:"https://github.com/${GITHUB_REPO}.git"]]
                ])
            }
        }
        stage('Build and Deploy'){
            steps{
                script{
                    sh "npm install"
                    sh "npm run build"
                    dir('build'){
                        sh "git init && git remote add origin https://github.com/${GITHUB_REPO}.git"
                        sh "git add"
                        sh 'git commit -m "Deploy to Github Pages"'
                        sh "git push --force origin master:${GH_PAGES_BRANCH}"
                    }
                }
            }
        }
    }
}