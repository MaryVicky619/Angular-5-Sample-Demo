pipeline {
    agent {
        docker {
            image 'node:10-alpine'
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
            steps {
            echo 'Building..'
                    dir('Angular-5-Sample-Demo') {
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

