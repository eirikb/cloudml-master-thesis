trait CloudConnector {
  def createInstances(template: Template):
    List[RuntimeInstance]
    def destroyInstance(id: String)
}
object CloudConnector {
  def apply(account: Account, instanceType: String):
  CloudConnector = instanceType match {
    case _ =>
      new JcloudsConnector(account);
}