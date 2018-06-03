package solutions.smoothstone.Shingle;

import io.vertx.core.AbstractVerticle;

public class MainVerticle extends AbstractVerticle {

    @Override
    public void start() {
        vertx.createHttpServer().requestHandler(req -> {
            req.response().end("Hello from " + Thread.currentThread().getName());
        }).listen(8080);
    }

}
