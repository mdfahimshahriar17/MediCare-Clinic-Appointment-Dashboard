function createLog(level, message, context) {
  return {
    timestamp: new Date().toISOString(),
    level,
    context,
    message,
  };
}

export function logInfo(message, context) {
  console.info(createLog("INFO", message, context));
}

export function logWarn(message, context) {
  console.warn(createLog("WARN", message, context));
}

export function logError(message, context) {
  console.error(createLog("ERROR", message, context));
}