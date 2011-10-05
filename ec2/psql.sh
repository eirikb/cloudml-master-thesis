ssh -ti pem/dev.pem ec2-user@$1 sudo yum -y update
ssh -ti pem/dev.pem ec2-user@$1 sudo yum -y install postgresql postgresql-server
ssh -ti pem/dev.pem ec2-user@$1 sudo /etc/init.d/postgresql initdb
ssh -ti pem/dev.pem ec2-user@$1 'echo "listen_addresses = '*'" | sudo tee -a /var/lib/pgsql/data/pg_hga.conf'
ssh -ti pem/dev.pem ec2-user@$1 'echo "host all all  0.0.0.0/0 md5" | sudo tee -a /var/lib/pgsql/data/postgresql.conf'
