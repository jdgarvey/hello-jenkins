pipeline {
  agent {
    docker { image: "node:latest" }
  }

  stages {
    stage('Test') {
      steps {
        sh 'npm test'
      }
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
