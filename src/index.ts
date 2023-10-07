import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import { config } from "./config";

const Port = 3000;

const app = new Koa();

const router = new Router();

config.forEach((route) => {
  switch (route.method) {
    case "GET":
      router.get(route.url, (ctx) => {
        ctx.body = route.callback(
          ctx.query,
          ctx.request.body as Record<string, any>
        );
      });
  }
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(Port, () => {
  console.log("server run on port ", Port);
});
