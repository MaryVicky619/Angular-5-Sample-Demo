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
           export CHROME_BIN=/usr/bin/chromium-browser
         }
    steps {
              echo 'Testing...'
              sh ' $(npm bin)/ng test'
            }
             post {
                always {
                 junit allowEmptyResults: false, testResults: 'reports/Chrome_74.0.3729_(Linux_0.0.0)/test-results-karma.xml'
                   }
                }
      }

      }
    }

