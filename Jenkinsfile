pipeline {
    agent {
      docker {
        image 'node:7-alpine'
      }
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
            junit 'reports/junit-*.xml'
            publishHTML (target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'index.html',
                reportName: "Jest Report"
            ])
        }
    }

    // post {
    //     always {
    //         archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
    //         junit 'build/reports/**/*.xml'
    //     }
    // }
}
