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
                sh 'nohup node index.js > app.log 2>&1 &'
            }
        }
        stage('Wait 3 Seconds') {
            steps {
               sh 'echo "Waiting 3 seconds..." && sleep 3'
            }
        }
        stage('test time endpoint'){
            steps {
                script {
                    def response = sh(
                        script: "curl -s -f http://localhost:3000/time",
                        returnStdout: true
                    ).trim()

                    try {
                        def json = readJSON text: response
                        echo "Time endpoint returned: ${json}"
                    } catch(Exception e) {
                        error("Time endpoint did not return valid JSON!")
                    }
                }
            }
        }
    }
}