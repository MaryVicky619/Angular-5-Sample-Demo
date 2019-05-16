pipeline {
  agent none
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
      agent any
      environment {
        CHROME_BIN = '/usr/bin/ChromeHeadless'
      }
      post {
        always {
          junit 'reports/*.xml'

        }

      }
      steps {
        sh '''echo \'Testing...\'
              '''
        sh 'sh \'ng test --watch false\''
      }
    }
  }
  environment {
    CHROME_BIN = '/usr/bin/ChromeHeadless'
  }
}