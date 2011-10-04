echo -e "\nRun like this: . ./setup.sh\nPut your keys in pem-folder ( https://aws-portal.amazon.com/gp/aws/developer/account/index.html )\n"

wget http://s3.amazonaws.com/ec2-downloads/ec2-api-tools.zip
unzip ec2-api-tools.zip
mv ec2-api-tools-* ec2-api-tools
export EC2_HOME=ec2-api-tools
export EC2_PRIVATE_KEY=`ls $PWD/pem/pk*`
export EC2_CERT=`ls $PWD/pem/cert*`
