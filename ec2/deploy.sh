scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i pem/dev.pem ../demoapp/target/bank*.war ec2-user@$1:~/
sh inject remote-deploy.sh $1
