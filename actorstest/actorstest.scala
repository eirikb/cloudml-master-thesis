package actorstest

import scala.actors.Actor
import scala.actors.Actor._

case object Inc
case object Exit

object actorstest extends App {
    val handler = new Handler
    val counter = handler.start()

    println("COUNT " + counter.count)
    Thread.sleep(5000)
    println("COUNT " + counter.count)
}

class Handler {
    def start() : Counter = {
        val counter = new Counter
        counter.start

        0 until 3 foreach(i => {
            counter ! Inc
        })
        counter ! Exit
        counter
    }
}

class Counter extends Actor {
    var count = 0

    def act() {
        loop {
            react {
                case Inc =>
                    count += 1
                case Exit =>
                    exit()
            }
        }
    }
}
