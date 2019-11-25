pipeline {

    agent none

    stages {

        stage('Deploy staging') {
            when {
                not {
                    branch 'master'
                }
            }
            agent {
                docker {
                    image 'node'
                    args '-v /$HOME/docker-cache-node:/tmp/docker-cache-node -e "HOME=/tmp/docker-cache-node"'
                }
            }
            steps {
                sh ''
            }
            post {
                always {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'dist', bucket:'katalon-test', path:'', acl:'PublicRead')
                    }
                }
            }
        }
    }
}
