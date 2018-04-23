/* eslint-disable */

// 将来可以加入样式，使其更加美观

const getLevel = () => process.env.LOG_LEVEL || 'error';
const getMod = () => process.env.MOD || 'all';

const IGNORE_CASE = true;

const priority = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
};

function modHit(mod) {
  const targetMod = IGNORE_CASE ? getMod().toLowerCase() : getMod();

  return (
    targetMod === 'all' || targetMod === (IGNORE_CASE ? mod.toLowerCase() : mod)
  );
}

function levelHit(level) {
  return priority[IGNORE_CASE ? getLevel().toLowerCase() : getLevel()] >= level;
}

function doorkeeper(mod, level) {
  if (levelHit(level) && modHit(mod)) return true;
  return false;
}

const logger = {
  silly(mod, msg) {
    if (doorkeeper(mod, priority.silly)) {
      console.log(mod, msg);
      return msg;
    }
    return '';
  },
  debug(mod, msg) {
    if (doorkeeper(mod, priority.debug)) {
      console.debug(mod, msg);
      return msg;
    }
    return '';
  },
  log(mod, msg) {
    if (doorkeeper(mod, priority.verbose)) {
      console.log(mod, msg);
      return msg;
    }
    return '';
  },
  info(mod, msg) {
    if (doorkeeper(mod, priority.info)) {
      console.info(mod, msg);
      return msg;
    }
    return '';
  },
  warn(mod, msg) {
    if (doorkeeper(mod, priority.warn)) {
      console.warn(mod, msg);
      return msg;
    }
    return '';
  },
  error(mod, msg) {
    if (doorkeeper(mod, priority.error)) {
      console.error(mod, msg);
      return msg;
    }
    return '';
  }
};

module.exports = logger;
