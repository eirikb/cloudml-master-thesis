import actorstest.Handler;
import actorstest.Counter;

public class Test {

    public static void main(final String[] args) throws InterruptedException {
        Handler handler = new Handler();
        Counter counter = handler.start();

        System.out.println("COUNT " + counter.count());
        Thread.sleep(5000);
        System.out.println("COUNT " + counter.count());
    }
}
