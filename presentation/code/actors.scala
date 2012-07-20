def act() {
    loop {
        receive {
            case SetStatus (s) =>
                status = s
                listeners.foreach(_(Event.Status))
            }
        }
    }
}
