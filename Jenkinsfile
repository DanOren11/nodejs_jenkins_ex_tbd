pipeline {
    agent { label 'ansible_node' }
    tools{
        nodejs "my_node_tool"
    }

    stages {
        stage('Init and install') {
            steps {
                sh 'npm i express'
                sh 'npm i dotenv'
            }
        }
        stage('Run Node App') {
            steps {
                sh 'nohup node index.js > app.log 2>&1 &'
            }
        }
        stage('Wait 10 Seconds') {
            steps {
               sh 'echo "Waiting 10 seconds..." && sleep 10'
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
                        def ts = json.timestamp
                        def date = new Date(ts)
                        echo "Time: ${date}"
                        echo "Time endpoint returned: ${json}"
                    } catch(Exception e) {
                        error("Time endpoint did not return valid JSON!")
                    }
                }
            }
        }
        stage('test health endpoint'){
            steps {
                script {
                    def response = sh(
                        script: "curl -s -f http://localhost:3000/health",
                        returnStdout: true
                    ).trim()

                    try {
                      def health = readJSON text: response
                      if (health.status != "OK") {
                        error("Health check failed!")
                      }
                        echo "health endpoint returned: ${json}"
                    } catch(Exception e) {
                        error("Time endpoint did not return valid JSON!")
                    }
                }
            }
        }
        stage('test / endpoint'){
              steps {
                script {
                  def response = sh(
                        script: "curl -s -f http://localhost:3000/",
                      returnStdout: true
                  ).trim()
                 echo "/ endpoint returned: ${response}"
                }
            }
        }
        stage('Kill node after the tests'){
            steps{
               sh ' pkill -f "node index.js" || true'
            }
        }
    }
}