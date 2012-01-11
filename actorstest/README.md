Testing usage of actors from java
---


Test like this:
----

    scalac actorstest.scala
    javac Test.java
    java -cp /usr/share/scala/lib/scala-library.jar:. Test

Note that the location of scala-library must be correct, and fullpath

It should print

    COUNT 0
    _sleep for 5 seconds_
    COUNT 3

Maven
-----

For this simple test I decided to not use maven...

