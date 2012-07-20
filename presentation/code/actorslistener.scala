runtimeInstance.addListener( (event) => 
    event match {
        case Event.Status => 
            println("Status set to %s".format(runtimeInstance.status))
    }
)
