scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i pem/dev.pem $1 ec2-user@$2:~/
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -ti pem/dev.pem ec2-user@$2 sudo sh $1
