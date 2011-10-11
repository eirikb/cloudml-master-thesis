sudo /etc/init.d/tomcat6 stop
sudo rm -rf /usr/share/tomcat6/webapps/*
sudo cp /home/ec2-user/bank*.war /usr/share/tomcat6/webapps/ROOT.war
sudo /etc/init.d/tomcat6 start
