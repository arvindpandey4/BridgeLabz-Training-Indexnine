enum LogLevel {
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4
}

class Logger {
  private level: LogLevel = LogLevel.INFO;

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  debug(message: string): void {
    if (this.level <= LogLevel.DEBUG) {
      console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`);
    }
  }

  info(message: string): void {
    if (this.level <= LogLevel.INFO) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }
  }

  warn(message: string): void {
    if (this.level <= LogLevel.WARN) {
      console.log(`[WARN] ${new Date().toISOString()} - ${message}`);
    }
  }

  error(message: string): void {
    if (this.level <= LogLevel.ERROR) {
      console.log(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }
  }
}

const logger = new Logger();
logger.setLevel(LogLevel.DEBUG);

logger.debug("Debug message");
logger.info("Info message");
logger.warn("Warning message");
logger.error("Error message");

export { Logger, LogLevel };
