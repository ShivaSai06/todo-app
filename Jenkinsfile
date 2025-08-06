pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t todo-frontend:latest .'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t todo-backend:latest .'
                }
            }
        }

        stage('Deploy Locally') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
