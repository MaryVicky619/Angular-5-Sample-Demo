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
         stage('Test') {
                    steps {
                    echo 'Testing...'
                    sh '$(npm bin)/ng test --progress false --watch false'
                    }
                     post {
                       always {
                            junit allowEmptyResults: false, testResults: '**/test-results.xml'
                                    }
                                }
                }
    }
}

