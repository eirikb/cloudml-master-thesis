Demo application
-

This is a simple example application in [Grails](http://grails.org).  
It mainly features these technologies:  

* Hibernate
* Spring MVC
* Spring security
* Webflow

Running
-

To run the application grails is needed, this should get you started:  

    wget http://dist.springframework.org.s3.amazonaws.com/release/GRAILS/grails-1.3.7.zip
    unzip grails-1.3.7
    export PATH=$PATH:$PWD/grails-1.3.7/bin

And for the application:  

    git clone git@github.com:eirikb/cloudml.git
    cd cloudml/demoapp
    grails run-app
