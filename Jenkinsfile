pipeline {
    agent { label 'ansible_node' }
    tools{
        nodejs "my_node_tool"
    }

    stages {
        stage('Init and install') {
            steps {
                sh 'npm i express'
            }
        }
        stage('Run Node App') {
            steps {
                sh 'node index.js'
            }
        }
    }
}