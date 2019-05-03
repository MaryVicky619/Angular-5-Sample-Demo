pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            image 'python:3.7.2'
            args '-p 3000:3000 -p 5000:5000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
    stage ('checkout'){
          steps{
            checkout scm
          }
        }
        stage('Build') {
        agent {
                docker {
                    image 'python:3.7.2'
                }
            }
            steps {
            echo 'Building..'
                    dir('Angular-5-Sample-Demo') {
                sh 'pip install -r requirements.txt'
                sh 'npm install'
                sh 'npm install @angular/cli@latest'
                sh 'npm run build'
                }
            }
             post {
               always {
                    archiveArtifacts artifacts: 'Angular-5-Sample-Demo/dist/*.js',onlyIfSuccessful: true
                            }
                        }
        }

    }
}

