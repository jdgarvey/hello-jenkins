pipeline {
    agent {
      docker {
        image 'cypress/base:10'
      }
    }
    environment {
      HOME = "."
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('E2E') {
            steps {
                sh 'npm run e2e'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'reports/**/*', fingerprint: true, allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/*.mp4', fingerprint: true, allowEmptyArchive: true
            sh 'ls reports/coverage/junit/'
            junit 'reports/**/junit.xml'
            publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports', reportFiles: 'index.html', reportName: 'Jest Report'])
        }
    }
}
