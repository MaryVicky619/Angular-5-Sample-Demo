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
        sh './node_modules/karma/bin/karma start karma.conf.js'
        echo 'Testing'
      }
    }
  }
  environment {
    CHROME_BIN = '/usr/bin/ChromeHeadless'
  }
}