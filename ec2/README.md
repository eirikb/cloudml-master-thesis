Get keys from https://aws-portal.amazon.com/gp/aws/developer/account/index.html  
Add them to ./pem  
Also add a dev.pem there (just called dev)


Run setup.sh to download and temporarily setup ec2-tools:


    . ./setup.sh

Run run.sh to create three instances  

    sh run.sh

Run desc.sh to get instance DNS (can provide ID from run.sh)

    sh desc.sh

Run psql.sh to install and setup psql on an instance

    sh psql.sh [ec2.SOME-INSTANCE-HERE-eu-west-1.compute.amazonaws.com]


Manually ssh into this box and do this:

    ssh -i pem/dev.pem ec2-user@[ec2.SOME-INSTANCE-HERE-eu-west-1.compute.amazonaws.com]
    sudo su postgres
    createuser -sP bank

Use the password bank, log out

Update grails-app/conf/DataSource.groovy with correct URL to new database instance and run

    cd ../demoapp
    grails war
    cd ../ec2

cd back to ec2
Then run deploy.sh

    sh deploy.sh [ec2.SOME-INSTANCE-HERE-BUT-NOT-THE-DB-ONE-eu-west-1.compute.amazonaws.com]


