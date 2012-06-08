runtimeInstance.addListener( (event) => 
    event match {
        case Event.Status => 
            println("Stauts set to %s".format(runtimeInstance.status))
    }
)
