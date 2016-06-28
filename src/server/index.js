/* @flow */

'use strict'

import path from "path"
import ChartedServer from './charted'
import FileDb from "./db"
import fs from "fs"

let db = new FileDb(path.join(__dirname, '..', '..', '.charted_db'))

if (process.env.PID) {
  fs.writeFileSync(process.env.PID, process.pid)
}

ChartedServer.start(Number(process.env.PORT) || 3000, path.join(__dirname, '..', 'client'), db)
  .then((address: any) => console.log(`Running at ${address.address}:${address.port}`))
