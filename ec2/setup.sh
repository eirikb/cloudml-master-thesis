wget http://s3.amazonaws.com/ec2-downloads/ec2-api-tools.zip
unzip ec2-api-tools.zip
mv ec2-api-tools-* ec2-api-tools
export EC2_HOME=ec2-api-tools
export EC2_PRIVATE_KEY=pem/pk-*
export EC2_CERT=pem/cert-*
