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
                     withEnv(["CHROME_BIN=/usr/bin/Chrome"]) {
                              echo 'Testing...'
                              sh ('./node_modules/karma/bin/karma start karma.conf.js')
                            }
                    }
                     post {
                       always {
                            junit allowEmptyResults: false, testResults: 'HeadlessChrome_0.0.0_(Linux_0.0.0)/*.xml'
                                    }
                                }
                }
    }
}

