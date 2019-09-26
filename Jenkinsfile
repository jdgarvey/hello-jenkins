pipeline {
  agent {
    docker { image: "node:latest" }
  }

  stages {
    stage('Test') {
      sh 'npm test'
    }
    post {
      success {
        'We good'
      }
      failure {
        'Big issues'
      }
    }
  }
}
