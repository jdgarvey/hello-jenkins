pipeline {
    agent {
      docker {
        image 'node:7-alpine'
      }
    }
    stages {
        // stage('Build') {
        //     steps {
        //         sh './gradlew build'
        //     }
        // }
        stage('Test') {
            steps {
                sh 'Awww yeahh'
            }
        }
    }

    // post {
    //     always {
    //         archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
    //         junit 'build/reports/**/*.xml'
    //     }
    // }
}
