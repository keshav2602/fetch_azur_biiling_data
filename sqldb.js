import sql from "mssql";

const config = {
  user: 'CloudSA368fb420',
  password: 'Keshav@456',
  server: 'testssserverss.database.windows.net',
  database: 'testdbdatabase',
  options: {
    encrypt: true
  }
};

sql.connect(config)
  .then(pool => {
    console.log(config,"config")
    console.log(pool,"pool")
    console.log('Connected to database');
  })
  .catch(err => {
    console.log('Database connection failed', err);
  });


