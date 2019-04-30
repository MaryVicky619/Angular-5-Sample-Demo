pipeline {
    agent {
        docker {
            image 'node:8-alpine'
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
                sh 'npm install npm@latest '
                sh 'npm install tslint typescript --save-dev'
                sh 'npm install @angular/cli@latest'
                sh '$(npm bin)/ng build --prod'
            }
        }
        
    }
}

