scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i pem/dev.pem .
./demoapp/target/bank*.war ec2-user@$1:~/
sh inject.sh remote-deploy.sh $1
URL=$(./ec2-api-tools/bin/ec2-describe-instances --region eu-west-1 $1 | grep IN
STANCE | awk '{print $4'})
echo $URL
scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i pem/dev.pem $
1 ec2-user@$2:~/
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -ti pem/dev.pem
ec2-user@$2 sudo sh $1
sudo /etc/init.d/tomcat6 stop
sudo rm -rf /usr/share/tomcat6/webapps/*
sudo cp /home/ec2-user/bank*.war /usr/share/tomcat6/webapps/ROOT.war
sudo /etc/init.d/tomcat6 start
sudo yum -y update
sudo yum -y install postgresql postgresql-server
sudo /etc/init.d/postgresql initdb
sudo /etc/init.d/postgresql stop
# Note that good old >> did not work here
echo "listen_addresses = '*'" | sudo tee -a /var/lib/pgsql/data/postgresql.conf
echo "host all all  0.0.0.0/0 md5" | sudo tee -a /var/lib/pgsql/data/pg_hba.conf

sudo /etc/init.d/postgresql start
sudo yum -y update
sudo yum -y install tomcat6
sudo mkdir /var/run/tomcat
sudo chown tomcat /var/run/tomcat
INSTANCE1=$(./ec2-api-tools/bin/ec2-run-instances -k dev --region eu-west-1 ami-
24506250 | grep INSTANCE | awk '{print $2}')
URL1=$(sh desc.sh $INSTANCE1)
echo "$INSTANCE1 $URL1"

INSTANCE2=$(./ec2-api-tools/bin/ec2-run-instances -k dev --region eu-west-1 ami-
24506250 | grep INSTANCE | awk '{print $2}')
URL2=$(sh desc.sh $INSTANCE2)
echo "$INSTANCE2 $URL2"

INSTANCE3=$(./ec2-api-tools/bin/ec2-run-instances -k dev --region eu-west-1 ami-
24506250 | grep INSTANCE | awk '{print $2}')
URL3=$(sh desc.sh $INSTANCE3)
echo "$INSTANCE3 $URL3"
wget http://s3.amazonaws.com/ec2-downloads/ec2-api-tools.zip
unzip ec2-api-tools.zip
mv ec2-api-tools-* ec2-api-tools
export EC2_HOME=$PWD/ec2-api-tools
export EC2_PRIVATE_KEY=`ls $PWD/pem/pk*`
export EC2_CERT=`ls $PWD/pem/cert*`
