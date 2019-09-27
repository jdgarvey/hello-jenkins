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
            archiveArtifacts artifacts: 'reports/coverage/**/*', fingerprint: true, allowEmptyArchive: true
            junit 'reports/junit-*.xml'
        }
    }

    // post {
    //     always {
    //         archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
    //         junit 'build/reports/**/*.xml'
    //     }
    // }
}
