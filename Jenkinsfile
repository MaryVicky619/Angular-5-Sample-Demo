pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      post {
        always {
          archiveArtifacts(artifacts: 'dist/*.js', onlyIfSuccessful: true)

        }

      }
      steps {
        echo 'Building..'
        sh 'npm install'
        sh 'ng build'
      }
    }
    stage('Test') {
      post {
        always {
          junit 'reports/*.xml'

        }

      }
      steps {
        withEnv(overrides: ["CHROME_BIN=/usr/bin/ChromeHeadless"]) {
          echo 'Testing...'
          sh 'ng test --watch false'
        }

      }
    }
  }
}