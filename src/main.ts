import { buildApp, parseEnv } from "@dusk/dusk-api";

const { app, logger } = buildApp({ serviceName: "{{service-name}}" });
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found.",
    },
  });
});
const env = parseEnv();

app.listen(env.PORT, env.HOST, () => {
  logger.info(`listening on http://${env.HOST}:${env.PORT}`);
});
