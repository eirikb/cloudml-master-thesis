sudo yum -y update
sudo yum -y install postgresql postgresql-server
sudo /etc/init.d/postgresql initdb
sudo /etc/init.d/postgresql stop
# Note that good old >> did not work here
echo "listen_addresses = '*'" | sudo tee -a /var/lib/pgsql/data/postgresql.conf
echo "host all all  0.0.0.0/0 md5" | sudo tee -a /var/lib/pgsql/data/pg_hba.conf
sudo /etc/init.d/postgresql start
