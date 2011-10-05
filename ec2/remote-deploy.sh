scp -i pem/dev.pem ../demoapp/target/bank-0.1.war ec2-user@$1:~/
sudo /etc/init.d/tomcat6 stop
sudo rm -rf /usr/share/tomcat6/webapps/*
sudo cp /home/ec2-user/bank*.war /usr/share/tomcat6/webapps/ROOT.war
sudo /etc/init.d/tomcat6 start
