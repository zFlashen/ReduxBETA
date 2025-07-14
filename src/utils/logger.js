function getFileNameFromUrl(str) {
    const match = str.match(/\/([^\/?#:]+):\d+:\d+$/);
    return match ? match[1] : null;
}

export class Logger {
    static getCallerInfo(depth = 3) {
        const stack = new Error().stack?.split('\n');
        if (!stack || stack.length <= depth) return { raw: '' };

        const line = stack[depth].trim();
        const match = line.match(/\((.*?:\d+:\d+)\)/) || line.match(/at (.*?:\d+:\d+)/);
        const file = match ? match[1] : '';
        return {
            raw: file
        };
    }

    static styled(label, bg, color, border = color) {
        return [
            `%c${label}`,
            `background: ${bg}; color: ${color}; font-weight: bold; font-family: monospace; font-size: 12px; padding: 3px 6px; border-radius: 4px; border: 1px solid ${border};`
        ];
    }

    static log(label, bg, color, border, ...msg) {
        const { raw } = Logger.getCallerInfo(4);
        if (raw) {
          const fileName = getFileNameFromUrl(raw);
          const lineColMatch = raw.match(/:(\d+:\d+)$/);
          const lineCol = lineColMatch ? lineColMatch[1] : '';
      
          const shortLabel = `${fileName}:${lineCol.split(':')[0]}`;
      
          console.groupCollapsed(...Logger.styled(label, bg, color, border), ...msg);
      
          console.log(shortLabel, raw);
      
          console.groupEnd();
        } else {
          console.log(...Logger.styled(label, bg, color, border), ...msg);
        }
      }
      

    static info(...msg) {
        Logger.log("info", "#192140", "#5c82f5", "#22346e", ...msg);
    }

    static success(...msg) {
        Logger.log("success", "#14291a", "#63c174", "#1d4427", ...msg);
    }

    static warn(...msg) {
        Logger.log("warning", "#2c2000", "#dba100", "#473400", ...msg);
    }

    static error(...msg) {
        Logger.log("error", "#3b1813", "#cb3a1d", "#652016", ...msg);
    }

    static debug(...msg) {
        Logger.log("debug", "#9b9b9b", "#262930", "transparent", ...msg);
    }

    static custom(label, bg, color, ...msg) {
        const { raw } = Logger.getCallerInfo(4);
        if (raw) {
            console.groupCollapsed(...Logger.styled(label, bg, color), ...msg);
            console.log(`${getFileNameFromUrl(raw)}: ${raw}`);
            console.groupEnd();
        } else {
            console.log(...Logger.styled(label, bg, color), ...msg);
        }
    }
}
