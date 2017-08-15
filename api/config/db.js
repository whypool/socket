/**
 * Created by why on 2017/8/15.
 */

module.exports={
    host:process.env.DB_HOST||'localhost',
    port:process.env.DB_PORT||'3306',
    user:process.env.DB_USER||'root',
    password:process.env.DB_PASS||'123456',
    database:process.env.DB_DATABASE||'why',
    multipleStatements:true
};
