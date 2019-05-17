pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
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
          archiveArtifacts(artifacts: 'dist/*.js', onlyIfSuccessful: true)
        }
      }
    }
    stage('Test') {
    environment {
           CHROME_BIN='/usr/bin/ChromeHeadless'
         }
    steps {
              echo 'Testing...'
              sh ' $(npm bin)/ng test'
            }
             post {
                always {
                 junit allowEmptyResults: false, testResults: 'reports/HeadlessChrome_0.0.0_(Linux_0.0.0)/test-results-karma.xml'
                   }
                }
      }

      }
    }

