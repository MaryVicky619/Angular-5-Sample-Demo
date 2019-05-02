pipeline {
    agent {
     CI = 'true'
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000 -p 5000:5000'
        }
        environment {
          HOME="."
          NPM_CONFIG_PREFIX="${pwd()}/.npm-global"
          PATH="$PATH:${pwd()}/.npm-global/bin:${pwd tmp: true}/.npm-global/bin"
        }
        withEnv("PATH=${pwd()}/.npm-global/bin:${pwd tmp: true}/.npm-global/bin"]) {
    stages {
    stage ('checkout'){
          steps{
            checkout scm
          }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm install @angular/cli@latest'
                sh 'ng build --watch'
                }
             post {
               always {
                    archiveArtifacts artifacts: 'Angular-5-Sample-Demo/dist/*.js',onlyIfSuccessful: true
                            }
                        }
        }

    }
    }
}
}
