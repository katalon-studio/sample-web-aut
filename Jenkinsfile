pipeline {

    agent none

    stages {

        stage('Deploy staging') {
            when {
                branch 'master'
            }
            agent {
                docker {
                    image 'node'
                    args '-v /$HOME/docker-cache-node:/tmp/docker-cache-node -e "HOME=/tmp/docker-cache-node"'
                }
            }
            steps {
                sh 'npm install && npm run package'
            }
            post {
                always {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'dist', bucket:'katalon-test', path:'aut', acl:'PublicRead')
                    }
                }
            }
        }
    }
}
