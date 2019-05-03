pipeline {
    agent any
    stages {
    stage ('checkout'){
          steps{
            checkout scm
          }
        }
        stage('Build') {
            steps {
            echo 'Building..'
                sh 'npm install'
                sh 'ng serve'
            }
             post {
               always {
                    archiveArtifacts artifacts: 'Angular-5-Sample-Demo/dist/*.js',onlyIfSuccessful: true
                            }
                        }
        }

    }
}

