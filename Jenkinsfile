pipeline {
    agent {
      docker {
        image 'node:latest'
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
    }
    post {
        always {
            archiveArtifacts artifacts: 'reports/**/*', fingerprint: true, allowEmptyArchive: true
            sh 'ls reports/coverage/junit/'
            junit 'reports/**/junit.xml'
            publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports', reportFiles: 'index.html', reportName: 'Jest Report'])
        }
    }
}
