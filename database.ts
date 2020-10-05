import { Pool } from 'pg';

const dbConfig = {
    user: 'postgres',
    password: '2244',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000
}

const pool = new Pool(dbConfig);
pool.on('error', function(err) {
    console.log(`We have an error!: ${err.message} - ${err.stack}`);
});

export function query (text: any, params: any, callback: any){
    return pool.query(text, params, callback);
}