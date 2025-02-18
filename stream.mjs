import { from, Stream, Observer} from './lib/rx.js';
import { logger } from "./utils/index.js";

const _from = from.of(1);
const stream = Stream.of(1);
const obs = type => Observer(
  logger(`NEXT-${type}`), 
  logger('ERR'), 
  logger('COMPLETE')
);
_from.map(x => x + 90).subscribe(obs('from'))
stream.map(x=> x + 10).subscribe(obs('stream'))