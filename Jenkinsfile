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
    steps {
            withEnv(overrides: ["CHROME_BIN=/usr/bin/ChromeHeadless"]) {
              echo 'Testing...'
              sh 'ng test'
            }
      }

      }
    }
  }
}

}
