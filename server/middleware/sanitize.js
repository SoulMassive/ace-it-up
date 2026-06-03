import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';

export const sanitizeMongo = mongoSanitize();
export const sanitizeXSS = xss();
export const preventHPP = hpp();
