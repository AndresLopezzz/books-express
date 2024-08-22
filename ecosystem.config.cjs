module.exports= {
  apps: [
    {
      name: 'app-prod',
      script: './src/index.js',
      cwd: './',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'app-dev',
      script: './src/index.js',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        APPID: process.env.APPID,
      },
    },
  ],
};