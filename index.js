'use strict'

const config = require('config')
const oracledb = require('oracledb')

const CFG = config.get('CFG')

let credentials = CFG.CREDENTIALS
credentials.user = process.env.db_user
credentials.password = process.env.db_password
credentials.host = process.env.db_host

oracledb.getConnection(credentials, function (err, cn) {
  if (err) throw new Error('DB Connection failed: ' + err)
  console.log('We have a connection' + JSON.stringify(cn))
  cn.close()
})
