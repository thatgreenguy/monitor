'use strict'

const oracledb = require('oracledb')

let credentials = {}
credentials.user = process.env.DB_USER
credentials.password = process.env.DB_PASSWORD
credentials.connectString = `${process.env.DB_PORT_1521_TCP_ADDR}/${process.env.DB_ENV_ORACLE_SID}`

oracledb.getConnection(credentials, function (err, cn) {
  if (err) throw new Error('DB Connection failed: ' + err)
  console.log('We have a connection' + JSON.stringify(cn))
  cn.close()
})
