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
                sh 'ng build'
            }
             post {
               always {
                    archiveArtifacts artifacts: 'dist/*.js',onlyIfSuccessful: true
                            }
                        }
        }

    }
}

